import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const navItems = [
        { name: "Home", path: "" },
        { name: "Favourites", path: "favourites" }
    ];

    return (
        <nav className="navbar navbar-expand-lg  bg-light ">
            <div className="container-fluid mx-2">
                <NavLink to={"/"} className="navbar-brand " aria-current="page">
                    <i className=" bi bi-bug-fill pe-3"></i>
                    DevsTeam
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="offcanvas offcanvas-end "
                    id="offcanvasNavbar"
                    tabIndex="-1"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header ">
                        <h3
                            className="offcanvas-header "
                            id="offcanvasNavbarLabel"
                        >
                            Menu
                        </h3>
                        <button
                            type="button"
                            className="btn-close "
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav   justify-content-end flex-grow-1 pe-3 ">
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
            </div>
        </nav>
    );
};

export default NavBar;
