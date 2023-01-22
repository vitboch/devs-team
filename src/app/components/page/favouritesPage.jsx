import React from "react";
import Card from "../common/card";
import PropTypes from "prop-types";
import { useDeveloper } from "../../hooks/useDevelopers";
import Loader from "../common/loader";

const FavouritesPage = () => {
    const {
        isLoading,

        changeFavouritesState,
        getFavouritesDevelopers
    } = useDeveloper();

    const favouritesDevelopers = getFavouritesDevelopers();
    console.log(favouritesDevelopers);
    return (
        <>
            <h1 className="fw-light text-center mb-4">Избранное</h1>
            <div className="album py-5 bg-light p-3">
                {!isLoading ? (
                    favouritesDevelopers.length !== 0 ? (
                        <div className="container">
                            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-5">
                                {favouritesDevelopers.map((dev) => (
                                    <Card
                                        key={dev._id}
                                        {...dev}
                                        handleFavourites={changeFavouritesState}
                                        isFavourite={true}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="fs-4 fw-light">
                            У Вас никого нет в &quot;Избранном&quot; 😞
                        </div>
                    )
                ) : (
                    <Loader />
                )}
            </div>
        </>
    );
};

FavouritesPage.propTypes = {
    favourites: PropTypes.array,
    handleFavourites: PropTypes.func
};

export default FavouritesPage;
