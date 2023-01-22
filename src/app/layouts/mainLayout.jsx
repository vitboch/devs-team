import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/ui/breadcrumbs";
import NavBar from "../components/ui/navBar";
import DeveloperProvider from "../hooks/useDevelopers";
import Footer from "../components/ui/footer/footer";

const MainLayout = () => {
    return (
        <div className="mainContainer">
            <NavBar />

            <DeveloperProvider>
                <Breadcrumbs />
                <Outlet />
            </DeveloperProvider>
            <Footer />
        </div>
    );
};

export default MainLayout;
