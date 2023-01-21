import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DeveloperPage from "./components/page/developerPage";
import FavouritesPage from "./components/page/favouritesPage";
import MainPage from "./components/page/mainPage";
// import NavBar from "./components/ui/navBar";
import MainLayout from "./layouts/mainLayout";
import Footer from "./components/ui/footer/footer";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<MainLayout />}>
                    <Route path="" element={<MainPage />} />
                    <Route path=":devId" element={<DeveloperPage />} />
                    <Route path="favourites" element={<FavouritesPage />} />
                </Route>
                <Route path="*" element={<Navigate to={""} />} />
            </Routes>
            <Footer/>
        </>
    );
};

export default App;
