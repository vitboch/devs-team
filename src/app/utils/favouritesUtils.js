export const getStorage = () => {
    if (localStorage.getItem("favourites")) {
        return JSON.parse(localStorage.getItem("favourites"));
    } else return [];
};

export const changeStorage = (id) => {
    if (localStorage.getItem("favourites")) {
        const favourites = JSON.parse(localStorage.getItem("favourites"));
        const isFavourite = favourites.some((item) => item === id);
        if (isFavourite) {
            // если id есть в массиве - удаляю
            const newFavourites = favourites.filter((item) => item !== id);
            localStorage.setItem("favourites", JSON.stringify(newFavourites));
        } else {
            // если id нет в массиве - добавляю
            favourites.push(id);
            localStorage.setItem("favourites", JSON.stringify(favourites));
        }
    } else {
        // если в localStorage нет favourites - создаю и добавляю id
        localStorage.setItem("favourites", JSON.stringify([id]));
    }
};
