import React from "react";
import resSchoolIcon from "../../../../assets/images/icons/result-school.png";
import gitHabIcon from "../../../../assets/images/icons/gitHub.png";

const Footer = () => {
    return (
        <div className="p-4 border-top position-absolute w-100 bottom-0">
            <div className="container">
                <div className="d-flex align-items-center justify-content-center justify-content-sm-between">
                    <div className="d-none d-sm-block">
                        <p>
                            <i className=" bi bi-bug-fill pe-3 fs-5"></i>© 2023
                            DevsTeam
                        </p>
                    </div>
                    <div className="d-flex gap-5 gap-md-3">
                        <a
                            href="https://github.com/vitboch/devs-team"
                            title="Проект на GitHub"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="text-decoration-none d-flex gap-2 text-secondary"
                        >
                            <img
                                className="footerIcon"
                                src={gitHabIcon}
                                alt="GitHub"
                            />
                            <span className="d-none d-md-inline">
                                Исходный код
                            </span>
                        </a>
                        <a
                            href="https://result.school/"
                            title="Обучающая платформа React.School"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="text-decoration-none d-flex gap-2 text-secondary"
                        >
                            <img
                                className="footerIcon"
                                src={resSchoolIcon}
                                alt="Result.School"
                            />
                            <span className="d-none d-md-inline">
                                Наши наставники
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
