import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DeveloperPage from "./components/page/developerPage";
import MainPage from "./components/page/mainPage";
import NavBar from "./components/ui/navBar";
import FavouritesLayout from "./layouts/favouritesLayout";
import MainLayout from "./layouts/mainLayout";
import Footer from "./components/ui/footer";

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="" element={<MainLayout />}>
                    <Route path="" element={<MainPage />} />
                    <Route path=":devId" element={<DeveloperPage />} />
                </Route>
                <Route path="favourites" element={<FavouritesLayout />} />
                <Route path="*" element={<Navigate to={""} />} />
            </Routes>
            <Footer/>
        </>
    );
};

export default App;
