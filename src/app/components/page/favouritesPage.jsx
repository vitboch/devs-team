import React, { useState } from "react";
import { getFavouritesObjects } from "../../utils/favouritesUtils";
import Card from "../common/card";

const FavouritesPage = () => {
    const [favourites, setFavourites] = useState(getFavouritesObjects());
    const changeFavourite = () => {
        setFavourites(getFavouritesObjects());
    };
    return (
        <>
            <h1 className="fw-light text-center mb-4">Избранное</h1>
            <div className="album py-5 bg-light p-3">
                {favourites.length !== 0 ? (
                    <div className="container">
                        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-5">
                            {favourites.map((dev) => (
                                <Card
                                    key={dev._id}
                                    {...dev}
                                    parent="favourites"
                                    onChangeFavourite={changeFavourite}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="fs-4 fw-light">
                        У Вас никого нет в &quot;Избранном&quot; :(
                    </div>
                )}
            </div>
        </>
    );
};

export default FavouritesPage;
