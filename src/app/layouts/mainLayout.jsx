import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/ui/breadcrumbs";
import NavBar from "../components/ui/navBar";
import Footer from "../components/ui/footer/footer";

const MainLayout = () => {
    return (
        <>
            <NavBar />
            <Breadcrumbs />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;
