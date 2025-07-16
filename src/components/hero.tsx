import React from "react";
import { FaGithub, FaLinkedin, FaHackerrank, FaFileAlt } from "react-icons/fa";

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
        <>
            <style>{`
            .hero {
                display: flex;
                align-items: stretch;
                justify-content: center;
                width: 100%;
                max-width: 100%;
                margin: 0 auto;
                padding: 0;
                box-sizing: border-box;
                z-index: 1;
            }
            .hero-image-container {
                width: 50%;
                height: 100%;
                display: flex;
                align-items: stretch;
                justify-content: center;
            }
            .hero-image {
                width: 100%;
                height: auto%;
                object-fit: cover;
            }
            .hero-content {
                background-color: #fff;
                text-align: left;
                width: 60%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                padding: 4rem;
                box-sizing: border-box;
                font-family: Arial, Helvetica, sans-serif;
            }
            .hero-title {
                font-size: clamp(1.8rem, 2vw, 2.5rem);
                font-weight: bold;
                margin-bottom: 1rem;
                color: #222;
                line-height: 1.2;
            }
            .hero-text {
                font-size: clamp(1rem, 1.5vw, 1.2rem);
                color: #444;
                line-height: 1.4;
            }
            .hero-text-gap {
                margin-top: 1.0rem;
            }
            .hero-links {
                display: flex;
                gap: 1rem;
                margin-top: 1.5rem;
            }
            .hero-link-icon {
                color: #444;
                font-size: 1.6rem;
                transition: color 0.2s;
            }
            .hero-link-icon:hover {
                color: #4856a3;
            }

            @media (max-width: 900px) {
                .hero {
                    flex-direction: column;
                    height: auto;
                    min-height: 0;
                    width: 100vw;
                    margin: 0;
                    max-width: 100vw;
                    border-radius: 0;
                    z-index: 2;
                }
                .hero-image-container,
                .hero-content {
                    width: 100vw;
                    height: auto;
                }
                .hero-image-container {
                    order: 1;
                }
                .hero-content {
                    order: 2;
                    padding: 1.5rem 0.5rem;
                    text-align: center;
                    min-height: 20vh;
                }
                .hero-image {
                    height: 350px;
                    border-radius: 0;
                    width: 100vw;
                    max-width: 100vw;
                }
                .hero-title {
                    font-size: 1.4rem;
                    margin-bottom: 0.8rem;
                }
                .hero-text {
                    font-size: 0.9rem;
                }
            }
            `}</style>

            <div className="hero">
                <div className="hero-image-container">
                    <img src={imageSrc} alt={altText} className="hero-image" />
                </div>
                <div className="hero-content">
                    <div className="hero-title">{title}</div>
                    <div className="hero-text">{content}</div>
                    {content2 && <div className="hero-text hero-text-gap">{content2}</div>}
                    {content3 && <div className="hero-text hero-text-gap">{content3}</div>}
                    {content4 && <div className="hero-text hero-text-gap">{content4}</div>}
                    {content5 && <div className="hero-text hero-text-gap">{content5}</div>}
                    {content6 && <div className="hero-text hero-text-gap">{content6}</div>}

                    <div className="hero-links">
                        {link1 && (
                            <a href={link1} target="_blank" rel="noopener noreferrer" className="hero-link-icon" title="GitHub">
                                <FaGithub />
                            </a>
                        )}
                        {link2 && (
                            <a href={link2} target="_blank" rel="noopener noreferrer" className="hero-link-icon" title="LinkedIn">
                                <FaLinkedin />
                            </a>
                        )}
                        {link3 && (
                            <a href={link3} target="_blank" rel="noopener noreferrer" className="hero-link-icon" title="HackerRank">
                                <FaHackerrank />
                            </a>
                        )}
                        {link4 && (
                            <a href={link4} target="_blank" rel="noopener noreferrer" className="hero-link-icon" title="Resume">
                                <FaFileAlt />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
