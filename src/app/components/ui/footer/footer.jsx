import React from "react";
import resSchoolIcon from "../../../../assets/images/icons/result-school.png";
import gitHabIcon from "../../../../assets/images/icons/gitHub.png";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerCopyright}>
                    <p>
                        <i className=" bi bi-bug-fill pe-3 fs-5"></i>© 2022-2023
                        DevsTeam
                    </p>
                </div>
                <div className={styles.footerLinksWrap}>
                    <a
                        href="https://github.com/vitboch/devs-team"
                        title="Проект на GitHub"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={styles.footerLink}
                    >
                        <img
                            className={styles.footerIcon}
                            src={gitHabIcon}
                            alt="GitHub"
                        />
                        <span className={styles.footerLinkName}>
                            Исходный код
                        </span>
                    </a>
                    <a
                        href="https://result.school/"
                        title="Обучающая платформа React.School"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={styles.footerLink}
                    >
                        <img
                            className={styles.footerIcon}
                            src={resSchoolIcon}
                            alt="Result.School"
                        />
                        <span className={styles.footerLinkName}>
                            Наши наставники
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
