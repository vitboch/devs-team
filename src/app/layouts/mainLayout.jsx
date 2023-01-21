import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/ui/breadcrumbs";
import NavBar from "../components/ui/navBar";

const MainLayout = () => {
    return (
        <>
            <NavBar />
            <Breadcrumbs />
            <Outlet />
        </>
    );
};

export default MainLayout;
