import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/ui/navBar";
import DeveloperProvider from "../hooks/useDevelopers";
import Footer from "../components/ui/footer/footer";
import Breadcrumbs from "../components/ui/breadcrumbs";

const MainLayout = () => {
    return (
        <div className="mainContainer">
            <DeveloperProvider>
                <NavBar />
                <Breadcrumbs />
                <Outlet />
            </DeveloperProvider>
            <Footer />
        </div>
    );
};

export default MainLayout;
