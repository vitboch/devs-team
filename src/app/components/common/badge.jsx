import React from "react";
import PropTypes from "prop-types";

const Badge = ({ color, name, rounded }) => {
    return (
        <span
            className={`badge bg-${color} ` + (rounded ? "rounded-pill" : "")}
        >
            {name}
        </span>
    );
};
Badge.defaultProps = {
    color: "primary",
    rounded: true
};

Badge.propTypes = {
    name: PropTypes.string,
    rounded: PropTypes.bool,
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark"
    ])
};

export default Badge;
