import React from "react";
import PropTypes from "prop-types";

const Progress = ({ percents, color, name }) => {
    const progressClass =
        "progress-bar progress-bar-striped bg-" + color;
    return (
        <>
            <p className="fs-5 mb-1">{name}</p>
            <div className="progress">
                <div
                    className={progressClass}
                    role="progressbar"
                    style={{ width: `${percents}%` }}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    {percents + "%"}
                </div>
            </div>
        </>
    );
};

Progress.propTypes = {
    percents: PropTypes.number,
    color: PropTypes.string,
    name: PropTypes.string
};

export default Progress;