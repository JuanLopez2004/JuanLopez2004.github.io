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
                height: 100%;
                object-fit: cover;
                display: block;
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
                padding: clamp(2rem, 5vw, 4rem);
                box-sizing: border-box;
                font-family: Arial, Helvetica, sans-serif;
            }
            .hero-title {
                font-size: clamp(1.5rem, 4vw, 2.5rem);
                font-weight: bold;
                margin-bottom: clamp(1rem, 3vw, 1.5rem);
                color: #222;
                line-height: 1.2;
                padding: clamp(0.5rem, 2vw, 1rem) 0;
                padding-bottom: clamp(0.5rem, 2vw, 1rem);
            }
            
            .hero-text {
                font-size: clamp(0.9rem, 3vw, 1.4rem);
                color: #444;
                line-height: 1.6;
                padding: clamp(0.5rem, 2vw, 0.8rem) clamp(0.75rem, 2.5vw, 1.2rem);
                margin: clamp(0.25rem, 1vw, 0.5rem) 0;
                background-color: #f8f9fa;
                border-radius: clamp(4px, 1vw, 0.5rem);
                border-left: 4px solid #4856a3;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            }
            .hero-text-gap {
                margin-top: clamp(0.75rem, 2.5vw, 1.2rem);
            }
            .hero-links {
                display: flex;
                gap: clamp(1rem, 3vw, 1.5rem);
                margin-top: clamp(1.5rem, 4vw, 2rem);
                padding: clamp(1rem, 3vw, 1.5rem);
                background-color: #f8f9fa;
                border-radius: clamp(6px, 1.5vw, 0.75rem);
                justify-content: center;
                align-items: center;
                border: 2px solid #e9ecef;
                flex-wrap: wrap;
            }
            .hero-link-icon {
                color: #444;
                font-size: clamp(1.5rem, 4vw, 2rem);
                transition: all 0.3s ease;
                padding: clamp(0.5rem, 1.5vw, 0.8rem);
                background-color: white;
                border-radius: 50%;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: clamp(40px, 8vw, 56px);
                min-height: clamp(40px, 8vw, 56px);
            }
            .hero-link-icon:hover {
                color: #4856a3;
                transform: translateY(-3px) scale(1.1);
                box-shadow: 0 4px 12px rgba(72, 86, 163, 0.3);
            }

            @media (max-width: 768px) {
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
                    padding: clamp(1rem, 3vw, 1.5rem) clamp(0.5rem, 2vw, 1rem);
                    text-align: center;
                    min-height: 20vh;
                    align-items: center;
                }
                .hero-image {
                    height: clamp(250px, 50vw, 350px);
                    border-radius: 0;
                    width: 100vw;
                    max-width: 100vw;
                }
                .hero-title {
                    font-size: clamp(1.2rem, 5vw, 1.6rem);
                    margin-bottom: clamp(0.5rem, 2vw, 0.8rem);
                    text-align: center;
                }
                .hero-text {
                    font-size: clamp(0.8rem, 3.5vw, 1rem);
                    text-align: left;
                }
                .hero-links {
                    align-self: center;
                    width: fit-content;
                    gap: clamp(0.75rem, 2.5vw, 1rem);
                    padding: clamp(0.75rem, 2.5vw, 1rem);
                }
                .hero-link-icon {
                    font-size: clamp(1.25rem, 4.5vw, 1.75rem);
                    padding: clamp(0.4rem, 1.2vw, 0.6rem);
                    min-width: clamp(36px, 7vw, 48px);
                    min-height: clamp(36px, 7vw, 48px);
                }
            }

            @media (max-width: 480px) {
                .hero-content {
                    padding: 1rem 0.75rem;
                }
                .hero-text {
                    font-size: 0.85rem;
                    padding: 0.5rem 0.75rem;
                }
                .hero-links {
                    gap: 0.75rem;
                    padding: 0.75rem;
                }
                .hero-link-icon {
                    font-size: 1.25rem;
                    padding: 0.4rem;
                    min-width: 36px;
                    min-height: 36px;
                }
            }

            /* High DPI displays */
            @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
                .hero-links {
                    border-width: 1px;
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
