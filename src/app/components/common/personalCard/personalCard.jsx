import React, { useEffect, useState } from "react";
import Badge from "../../common/badge";
import Progress from "../../common/progress";
import PropTypes from "prop-types";
import devs from "../../../api/devs.api";
import "./personalCard.scss";
import findUser from "../../../utils/findUser";
import getAge from "../../../utils/getAge";

const PersonalCard = ({ id }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        setUser({ ...findUser(id, devs) });
    }, []);
    const handleClick = () => {
        console.log(id);
    };
    return (
        user && (
            <div className="container">
                <h1 className="title">
                    {user.firstName} {user.lastName}{" "}
                    <button onClick={handleClick}>
                        {" "}
                        {<i className="bi bi-star"></i>}
                    </button>
                </h1>

                <div className="personal-card">
                    <h3 className="personal-card__title">
                        Основная информация
                    </h3>
                    <div className="personal-card__wrapper">
                        <div className="personal-card__img">
                            <img src={user.photo} alt="photo" />
                        </div>
                        <div className="personal-card__descr">
                            <div className="personal-card__name">
                                <span>Имя:</span> {user.firstName}{" "}
                                {user.lastName}
                                <span className="bage">
                                    {" "}
                                    {<Badge color="danger" name="Участник" />}
                                </span>
                            </div>
                            <div className="personal-card__age">
                                <span>Возраст:</span> {getAge(user.birthday)}
                            </div>
                            <div className="personal-card__about">
                                <span>Обо мне:</span> {user.about}
                            </div>
                            <div className="personal-card__work">
                                <span>Что сделал на проекте:</span>{" "}
                                {user.completed}
                            </div>
                            <div className="personal-card__social">
                                <span>Соцальные сети:</span>
                                <div className="personal-card__social-link">
                                    {" "}
                                    <a
                                        href={user.contacts.github}
                                        target="blank"
                                    >
                                        Github
                                    </a>
                                </div>
                                <div className="personal-card__social-link">
                                    <a
                                        href={user.contacts.discord}
                                        target="blank"
                                    >
                                        Discord
                                    </a>
                                </div>
                                <div className="personal-card__social-link">
                                    {" "}
                                    <a
                                        href={`mailto:${user.contacts.email}`}
                                        target="blank"
                                        type="email"
                                    >
                                        Email
                                    </a>
                                </div>
                                <div className="personal-card__social-link">
                                    {" "}
                                    <a
                                        href={user.contacts.telegram}
                                        target="blank"
                                    >
                                        Telegram
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="personal-card__technologies">
                        <h3 className="personal-card__title">
                            Владение технологиями:
                        </h3>
                        <Progress
                            color={user.technologies.html.color}
                            name={user.technologies.html.name}
                            percents={user.technologies.html.percents}
                        />
                        <Progress
                            color={user.technologies.css.color}
                            name={user.technologies.css.name}
                            percents={user.technologies.css.percents}
                        />
                        <Progress
                            color={user.technologies.javascript.color}
                            name={user.technologies.javascript.name}
                            percents={user.technologies.javascript.percents}
                        />
                        <Progress
                            color={user.technologies.react.color}
                            name={user.technologies.react.name}
                            percents={user.technologies.react.percents}
                        />
                        <Progress
                            color={user.technologies.git.color}
                            name={user.technologies.git.name}
                            percents={user.technologies.git.percents}
                        />
                    </div>
                </div>
            </div>
        )
    );
};

PersonalCard.propTypes = {
    id: PropTypes.string
};

export default PersonalCard;
