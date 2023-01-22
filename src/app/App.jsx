import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DeveloperPage from "./components/page/developerPage";
import FavouritesPage from "./components/page/favouritesPage";
import MainPage from "./components/page/mainPage";
import MainLayout from "./layouts/mainLayout";
import AboutProject from "./components/page/aboutProject";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<MainLayout />}>
                    <Route path="" element={<MainPage />} />
                    <Route path=":devId" element={<DeveloperPage />} />

                    <Route path="favourites" element={<FavouritesPage />} />

                    <Route path="aboutProject" element={<AboutProject />} />
                </Route>
                <Route path="*" element={<Navigate to={""} />} />
            </Routes>
        </>
    );
};

export default App;
