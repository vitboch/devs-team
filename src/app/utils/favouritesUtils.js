export const getStorage = () => {
    if (
        localStorage.getItem("favourites") &&
        localStorage.getItem("favourites").length !== 0
    ) {
        return JSON.parse(localStorage.getItem("favourites"));
    } else return [];
};

export const changeStorage = (id) => {
    if (
        localStorage.getItem("favourites") &&
        localStorage.getItem("favourites").length !== 0
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
