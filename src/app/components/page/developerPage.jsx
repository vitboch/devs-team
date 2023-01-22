import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDeveloper } from "../../hooks/useDevelopers";

const DeveloperPage = () => {
    const { devId } = useParams();
    const navigate = useNavigate();
    const { getDeveloperById, isLoading } = useDeveloper();
    useEffect(() => {
        if (!isLoading) {
            if (!getDeveloperById(devId)) {
                navigate("/");
            }
        }
    }, [isLoading]);
    return <div>DeveloperPage</div>;
};

export default DeveloperPage;
