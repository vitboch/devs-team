import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../api";

const DeveloperContext = React.createContext();

export const useDeveloper = () => {
    return useContext(DeveloperContext);
};

const DeveloperProvider = ({ children }) => {
    const [developers, setDevelopers] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        API.developers.fetchAll().then((data) => {
            setDevelopers(data);
            setIsLoading(false);
        });
    }, []);

    function getDeveloperById(devId) {
        return developers?.find((d) => d._id === devId);
    }

    return (
        <DeveloperContext.Provider
            value={{ developers, isLoading, getDeveloperById }}
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
