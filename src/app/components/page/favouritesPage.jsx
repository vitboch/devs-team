import React from "react";
import Card from "../common/card";
import PropTypes from "prop-types";
import devs from "../../api/devs.api";

const FavouritesPage = ({ favourites, handleFavourites }) => {
    const favouritesPersons = favourites.map((id) =>
        devs.find((dev) => dev._id === id)
    );
    return (
        <>
            <h1 className="fw-light text-center mb-4">Избранное</h1>
            <div className="album py-5 bg-light p-3">
                {favourites.length !== 0 ? (
                    <div className="container">
                        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-5">
                            {favouritesPersons.map((dev) => (
                                <Card
                                    key={dev._id}
                                    {...dev}
                                    handleFavourites={handleFavourites}
                                    isFavourite={true}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="fs-4 fw-light text-center">
                        У Вас никого нет в &quot;Избранном&quot; 😞
                    </div>
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
