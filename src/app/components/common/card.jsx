import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./button";
import getAge from "../../utils/getAge";

const Card = ({
                  _id,
                  firstName,
                  lastName,
                  birthday,
                  photo,
                  about,
                  isFavourite,
                  handleFavourites
              }) => {
    return (
        <div className="card-group">
            <div className="card">
                <img src={photo} className="card-img-top" alt="avatar"/>
                <div className="card-body w-100">
                    <h5 className="card-title">{firstName} {lastName}</h5>
                    <p className="card-text">{getAge(birthday)}</p>
                    <p className="card-text">{about}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <Link to={`/${_id}`}>
                        <Button
                            label="открыть"
                            size="btn-sm"
                            color="light"
                        />
                    </Link>
                    <Button
                        label={
                            isFavourite
                                ? "удалить из избранного"
                                : "добавить в избранное"
                        }
                        size="btn-sm"
                        color={isFavourite ? "secondary" : "light"}
                        onClick={() => {
                            handleFavourites(_id);
                        }}
                    />
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
    about: PropTypes.string.isRequired,
    isFavourite: PropTypes.bool,
    handleFavourites: PropTypes.func
};

export default Card;
