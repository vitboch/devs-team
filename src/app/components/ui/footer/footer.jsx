import React from "react";
import resSchoolIcon from "../../../../assets/images/icons/result-school.png";
import gitHabIcon from "../../../../assets/images/icons/gitHub.png";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={"bg-light px-5 py-4 " + styles.footer}>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <p>
                        <i className=" bi bi-bug-fill pe-3 fs-5"></i>© 2022-2023
                        DevsTeam
                    </p>
                </div>
                <div className="d-flex gap-3 align-items-center">
                    <a
                        href="https://github.com/vitboch/devs-team"
                        title="Проект на GitHub"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={
                            "d-inline-flex gap-2 text-decoration-none " +
                            styles.footerLink
                        }
                    >
                        <img
                            className={styles.footerIcon}
                            src={gitHabIcon}
                            alt="GitHub"
                        />
                        Исходный код
                    </a>
                    <a
                        href="https://result.school/"
                        title="Обучающая платформа React.School"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={
                            "d-inline-flex gap-2 text-decoration-none " +
                            styles.footerLink
                        }
                    >
                        <img
                            className={styles.footerIcon}
                            src={resSchoolIcon}
                            alt="Result.School"
                        />
                        Наши наставники
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
