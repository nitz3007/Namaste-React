import {fireEvent, render, waitFor} from '@testing-library/react';
import Header from '../components/Header';
import RestaurantMenu from '../components/RestaurantMenu';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router-dom/server';
import store from '../utils/store';
import {MENU_DATA} from '../mocks/menuData';

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> {
            return Promise.resolve(MENU_DATA);
        }
    })
})

test("Update Cart in the header on adding item from menu", async() => {
    const body = render (
        <StaticRouter>
            <Provider store={store}>
                <Header/>
                <RestaurantMenu/>
            </Provider>
        </StaticRouter>
    );

    await waitFor(()=>expect(body.getByTestId("menu")));

    const addBtn = body.getAllByTestId("add-btn");
    fireEvent.click(addBtn[0]);

    const cartLink = body.getByTestId("cart-link");
    expect(cartLink.innerHTML).toBe("Cart(1)");

})