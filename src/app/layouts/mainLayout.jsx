import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/ui/breadcrumbs";
import NavBar from "../components/ui/navBar";
import Footer from "../components/ui/footer/footer";

const MainLayout = () => {
    return (
        <div className="mainContainer">
            <NavBar />
            <Breadcrumbs />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
