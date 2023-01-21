import React from "react";
import PropTypes from "prop-types";

const Button = ({
    size,
    color,
    label,
    onClick,
    type,
    rounded,
    disabled,
    icon
}) => {
    return (
        <button
            type={type}
            className={`btn btn-${color} ${size} ${rounded}`}
            onClick={onClick}
            disabled={disabled}
        >
            {icon} {label}
        </button>
    );
};
Button.defaultProps = {
    size: "",
    color: "primary",
    type: "button",
    rounded: "rounded-0",
    disabled: false
};

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit"]),
    size: PropTypes.oneOf(["btn-sm", "btn-lg"]),
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "link"
    ]),
    rounded: PropTypes.oneOf(["rounded-0", "rounded-pill"]),
    label: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    icon: PropTypes.element
};

export default Button;
