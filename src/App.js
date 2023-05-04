import React, {lazy, Suspense, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Contacts from './components/Contacts';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Login from './components/Login';
import ShimmerUI from './components/ShimmerUI';
import UserContext from './utils/userContext';
import {Provider} from 'react-redux';
import store from './utils/store';
// import Instamart from './components/Instamart';

const Instamart = lazy(()=> import ("./components/Instamart"));



const AppLayout = () => {
    const [user,setUser] = useState({
        name: "Akshay Saini",
        email: "support@namastedev.com",
      });
    //this user state will ideally get auth data from an API and 
    return (
        <Provider store={store}>
        <UserContext.Provider
            value = {{
                user: user,
                setUser: setUser
            }}>
            <Header/>
            <Outlet/>
            <Footer/>
        </UserContext.Provider>   
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contacts',
                element: <Contacts/>
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantMenu/>
            },
            {
                path: '/instamart',
                element:<Suspense fallback={<ShimmerUI/>}>
                            <Instamart/>
                        </Suspense>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
//passing react element into root
root.render(<RouterProvider router={appRouter}/>);
