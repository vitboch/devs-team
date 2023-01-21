import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../common/button";
import getAge from "../../utils/getAge";

const Card = ({ _id, firstName, lastName, birthday, photo, about }) => {
    return (
        <div className="col">
            <div className="shadow-sm card">
                <img src={photo} className="card-img-top" alt={photo} />
                <div className="card-body">
                    <h5>
                        {firstName} {lastName}
                    </h5>
                    <p className="card-text">{getAge(birthday)}</p>
                    <p className="block-about card-text">{about}</p>
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center pb-3">
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <Link to={`/devId/${_id}`}>
                                    <Button
                                        label="открыть"
                                        size="btn-sm"
                                        color="light"
                                    />
                                </Link>
                                <Button
                                    label="добавить в избранное"
                                    size="btn-sm"
                                    color="light"
                                    onClick={() => console.log("Add id", _id)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    _id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
};

export default Card;
