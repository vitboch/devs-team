import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DeveloperPage from "./components/page/developerPage";
import FavouritesPage from "./components/page/favouritesPage";
import MainPage from "./components/page/mainPage";
// import NavBar from "./components/ui/navBar";
import MainLayout from "./layouts/mainLayout";
import { getStorage, changeStorage } from "./utils/favouritesUtils";

const App = () => {
    const [favourites, setFavourites] = useState(getStorage());
    const handleFavourites = (id) => {
        changeStorage(id);
        setFavourites(getStorage());
    };
    return (
        <>
            <Routes>
                <Route path="" element={<MainLayout />}>
                    <Route
                        path=""
                        element={
                            <MainPage
                                favourites={favourites}
                                handleFavourites={handleFavourites}
                            />
                        }
                    />
                    <Route path=":devId" element={<DeveloperPage />} />
                    <Route
                        path="favourites"
                        element={
                            <FavouritesPage
                                favourites={favourites}
                                handleFavourites={handleFavourites}
                            />
                        }
                    />
                </Route>
                <Route path="*" element={<Navigate to={""} />} />
            </Routes>
        </>
    );
};

export default App;
