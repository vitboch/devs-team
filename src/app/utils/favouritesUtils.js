import devs from "../api/devs.api";

export const getFavouritesObjects = () => {
    if (
        localStorage.getItem("favourites") &&
        localStorage.getItem("favourites") !== "[]"
    ) {
        return JSON.parse(localStorage.getItem("favourites")).map((id) =>
            devs.find((dev) => dev._id === id)
        );
    } else return [];
};

export const changeFavouritesIds = (id) => {
    if (
        localStorage.getItem("favourites") &&
        localStorage.getItem("favourites") !== "[]"
    ) {
        const favourites = JSON.parse(localStorage.getItem("favourites"));
        const isFavourite = favourites.some((item) => item === id);
        if (isFavourite) {
            const newFavourites = favourites.filter((item) => item !== id);
            localStorage.setItem("favourites", JSON.stringify(newFavourites));
        } else {
            favourites.push(id);
            localStorage.setItem("favourites", JSON.stringify(favourites));
        }
    } else {
        localStorage.setItem("favourites", JSON.stringify([id]));
    }
};
