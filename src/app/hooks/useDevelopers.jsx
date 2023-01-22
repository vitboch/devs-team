import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../api";
import { changeStorage, getStorage } from "../utils/favouritesUtils";

const DeveloperContext = React.createContext();

export const useDeveloper = () => {
    return useContext(DeveloperContext);
};

const DeveloperProvider = ({ children }) => {
    const [developers, setDevelopers] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [favouritesIds, setFavouritesIds] = useState();
    useEffect(() => {
        API.developers.fetchAll().then((data) => {
            setDevelopers(data);
            setIsLoading(false);
        });
        setFavouritesIds(getStorage());
    }, []);

    function getDeveloperById(devId) {
        return developers?.find((d) => d._id === devId);
    }

    function changeFavouritesState(devId) {
        changeStorage(devId);
        setFavouritesIds(getStorage());
    }

    function getIsFavouriteStatus(devId) {
        return favouritesIds.some((item) => item === devId);
    }

    function getFavouritesDevelopers() {
        return developers?.filter((dev) => favouritesIds.includes(dev._id));
    }

    return (
        <DeveloperContext.Provider
            value={{
                developers,
                isLoading,
                getDeveloperById,
                favouritesIds,
                changeFavouritesState,
                getIsFavouriteStatus,
                getFavouritesDevelopers
            }}
        >
            {children}
        </DeveloperContext.Provider>
    );
};

DeveloperProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default DeveloperProvider;
