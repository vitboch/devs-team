import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const navItems = [
        { name: "HOME", path: "" },
        { name: "FAVOURITES", path: "favourites" }
    ];
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink
                    to={"/"}
                    className="navbar-brand mx-5"
                    aria-current="page"
                >
                    <i className=" bi bi-bug-fill pe-3"></i>
                    DevsTeam
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Переключатель навигации"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end "
                    id="navbarNav"
                >
                    <ul className="navbar-nav   mx-5">
                        {navItems.map((item, i) => (
                            <li key={i} className="nav-item">
                                <NavLink
                                    to={item.path}
                                    className="nav-link  "
                                    aria-current="page"
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
