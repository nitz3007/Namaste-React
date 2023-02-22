import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import About from './About';
import Error from './Error';
import Contacts from './Contacts';
import RestaurantMenu from './RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Login from './Login';

const AppLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>   
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
                path: 'contacts',
                element: <Contacts/>
            },
            {
                path: 'restaurant/:id',
                element: <RestaurantMenu/>
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
