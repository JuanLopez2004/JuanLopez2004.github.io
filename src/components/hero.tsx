import React from "react";
import { FaGithub, FaLinkedin, FaHackerrank, FaFileAlt } from "react-icons/fa";
import styles from '../styles/Hero.module.css';


type IntroBodyProps = {
    title: string;
    content: string;
    content2?: string;
    content3?: string;
    content4?: string;
    content5?: string;
    content6?: string;
    imageSrc: string;
    altText: string;
    whiteBg?: boolean;
    link1?: string;
    link2?: string;
    link3?: string;
    link4?: string;
};

export default function Hero({
    title,
    content,
    content2,
    content3,
    content4,
    content5,
    content6,
    imageSrc,
    altText,
    whiteBg,
    link1,
    link2,
    link3,
    link4,
}: IntroBodyProps) {
    return (

            <div className={styles.hero}>
                <div className={styles["hero-image-container"]}>
                    <img src={imageSrc} alt={altText} className={styles["hero-image"]} />
                </div>
                <div className={styles["hero-content"]}>
                    <div className={styles["hero-title"]}>{title}</div>
                    <div className={styles["hero-text"]}>{content}</div>
                    {content2 && <div className={`${styles["hero-text"]} ${styles["hero-text-gap"]}`}>{content2}</div>}
                    {content3 && <div className={`${styles["hero-text"]} ${styles["hero-text-gap"]}`}>{content3}</div>}
                    {content4 && <div className={`${styles["hero-text"]} ${styles["hero-text-gap"]}`}>{content4}</div>}
                    {content5 && <div className={`${styles["hero-text"]} ${styles["hero-text-gap"]}`}>{content5}</div>}
                    {content6 && <div className={`${styles["hero-text"]} ${styles["hero-text-gap"]}`}>{content6}</div>}

                    <div className={styles["hero-links"]}>
                        {link1 && (
                            <a href={link1} target="_blank" rel="noopener noreferrer" className={styles["hero-link-icon"]} title="GitHub">
                                <FaGithub />
                            </a>
                        )}
                        {link2 && (
                            <a href={link2} target="_blank" rel="noopener noreferrer" className={styles["hero-link-icon"]} title="LinkedIn">
                                <FaLinkedin />
                            </a>
                        )}
                        {link3 && (
                            <a href={link3} target="_blank" rel="noopener noreferrer" className={styles["hero-link-icon"]} title="HackerRank">
                                <FaHackerrank />
                            </a>
                        )}
                        {link4 && (
                            <a href={link4} target="_blank" rel="noopener noreferrer" className={styles["hero-link-icon"]} title="Resume">
                                <FaFileAlt />
                            </a>
                        )}
                    </div>
                </div>
            </div>
    );
}
