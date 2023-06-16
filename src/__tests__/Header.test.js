import Header from '../components/Header';
import {render} from '@testing-library/react';
import {StaticRouter} from 'react-router-dom/server';
import {Provider} from 'react-redux';
import store from '../utils/store';

test("Logo should load on rendering header", ()=> {
    //load Header
    const header = render(
    <StaticRouter>
        <Provider store={store}>
            <Header/>
        </Provider>
    </StaticRouter>)

    const logo = header.getAllByTestId("logo");
    expect(logo[0].src).toBe("http://localhost/dummy.png");
})

test("Online status should be rendering Header", ()=>{
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>)

    // const onlineStatus = header.getByTestId("green");
    // console.log(onlineStatus);
})

test("Cart should have zero items", ()=>{
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    )

    const cart = header.getByTestId("cart-link");
    expect(cart.innerHTML).toBe("Cart(0)")
})