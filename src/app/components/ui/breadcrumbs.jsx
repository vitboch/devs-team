import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useDeveloper } from "../../hooks/useDevelopers";

const Breadcrumbs = () => {
    const [nameDev, setName] = useState();
    const { pathname } = useLocation();
    const { devId } = useParams();
    const { getDeveloperById, isLoading } = useDeveloper();
    const pathnames = pathname.split("/").filter((i) => i);
    useEffect(() => {
        if (devId && !isLoading) {
            const dev = getDeveloperById(devId);
            setName(dev ? dev.firstName + " " + dev.lastName : "");
        }
    }, [pathname, isLoading]);

    const generateCrumbs = (pathnames) => {
        if (pathnames.length > 0) {
            return (
                <nav aria-label="breadcrumb ">
                    <ol className="breadcrumb mx-3">
                        {" "}
                        <li
                            className={`breadcrumb-item active`}
                            aria-current="page"
                        >
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        {pathnames.map((crumb, i) => {
                            const isLast = i === pathnames.length - 1;
                            const crumbName =
                                devId === crumb
                                    ? nameDev
                                    : crumb[0].toUpperCase() + crumb.slice(1);
                            if (!isLast) {
                                return (
                                    <li
                                        key={i}
                                        className={`breadcrumb-item active`}
                                        aria-current="page"
                                    >
                                        <NavLink to={crumb}>
                                            {crumbName}
                                        </NavLink>
                                    </li>
                                );
                            } else {
                                return (
                                    <li
                                        key={i}
                                        className={`breadcrumb-item `}
                                        aria-current="page"
                                    >
                                        {crumbName}
                                    </li>
                                );
                            }
                        })}
                    </ol>
                </nav>
            );
        } else {
            return <></>;
        }
    };
    return <>{generateCrumbs(pathnames)}</>;
};

export default Breadcrumbs;
