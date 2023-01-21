import React from "react";

const FavouritesPage = () => {
    const favouritesIds = JSON.parse(localStorage.getItem("favourites"));
    return (
        <>
            <h1 className="fw-light text-center mb-4">Избранное</h1>
        </>
    );
};

export default FavouritesPage;
