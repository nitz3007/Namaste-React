import {render, waitFor, fireEvent, act} from '@testing-library/react';
import {StaticRouter} from 'react-router-dom/server';
import {Provider} from 'react-redux';
import store from '../utils/store';
import Body from '../components/Body';
import {RESTAURANT_DATA} from '../mocks/data';
import {toBeInTheDocument} from '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(RESTAURANT_DATA);
      },
    });
  });

test("Shimmer should load on Homepage", ()=> {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );

    const shimmer = body.getByTestId("shimmer-ui");
    //one way of checking if shimmer is present in the documnet
    // expect(shimmer).toBeInTheDocument();

    expect(shimmer.children.length).toBe(8);
});

test("Restaurants should loan on Homepage", async ()=> {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => {
        expect(body.getByTestId("search-button"));
        const resList = body.getByTestId("restaurant-list");
        expect(resList.children.length).toBe(15);
        
    });
   
});

test("Search for string(Burger) on Homepage", async()=> {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )

    await waitFor(()=> expect(body.getByTestId("search-button")));
    const input = body.getByTestId("search-input");
    act(()=>{
        fireEvent.change(input,{
            target: {
                value: 'Burger',
            },
        })
    });
    const searchBtn = body.getByTestId("search-button");
    fireEvent.click(searchBtn);
    const resList = body.getByTestId("restaurant-list");
    expect(resList.children.length).toBe(3);
})