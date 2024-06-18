import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Layout from './Layout/Layout';
import AboutPage from './pages/AboutPage';
import CRUD from './pages/CRUD';

const router = createBrowserRouter(
        createRoutesFromElements(<Route path="/" element ={<Layout />}>
                <Route index element={ <HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/crud" element={<CRUD />}/>
            </Route>
            ));
const Routing = () => {
    
    return (
        <RouterProvider router={router}/>
    )
}

export default Routing
