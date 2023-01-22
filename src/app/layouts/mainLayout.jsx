import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/ui/breadcrumbs";
import NavBar from "../components/ui/navBar";
import DeveloperProvider from "../hooks/useDevelopers";

const MainLayout = () => {
    return (
        <>
            <NavBar />
            <DeveloperProvider>
                <Breadcrumbs />
                <Outlet />
            </DeveloperProvider>
        </>
    );
};

export default MainLayout;
