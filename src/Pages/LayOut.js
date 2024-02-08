import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Component/navbar/Navbar";
import Footer from "../Component/footer/Footer";

const LayOut = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const pathNotAllowed = ["/welcome", "/login", "/signup"];

    return (
        <>
            {!pathNotAllowed?.includes(currentPath) ? <Navbar /> : undefined}
            <Outlet />
            <Footer />
        </>
    );
};

export default LayOut;
