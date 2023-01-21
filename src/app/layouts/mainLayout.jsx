import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/ui/breadcrumbs";

const MainLayout = () => {
    return (
        <>
            <Breadcrumbs />
            <Outlet />
        </>
    );
};

export default MainLayout;
