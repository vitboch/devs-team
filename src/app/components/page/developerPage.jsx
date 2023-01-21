import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import devs from "../../api/devs.api";

const DeveloperPage = () => {
    const { devId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        console.log(devs.find((dev) => dev._id === devId));
        if (!devs.find((dev) => dev._id === devId)) {
            navigate("/");
        }
    }, []);
    return <div>DeveloperPage</div>;
};

export default DeveloperPage;
