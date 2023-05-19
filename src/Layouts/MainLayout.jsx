import React from 'react';
import Home from '../Components/Home/Home';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Pages/Shared/Navbar/Navbar';
import Footer from '../Components/Pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;