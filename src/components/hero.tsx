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
          flex-wrap: nowrap;
          align-items: stretch;
          background: ${whiteBg ? "#fff" : "transparent"};
          width: 100%;
          max-width: 2500px;
          margin: 0 auto;
          max-height: 500px;
          z-index: 1;
          box-sizing: border-box;
        }

        .hero-image-container {
          width: 45%;
          height: 100%;
          display: flex;
          align-items: stretch;
          justify-content: flex-end;
          overflow: hidden;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero-content {
          width: 55%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 3rem;
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
          color: #222;
        }

        .hero-title {
          font-size: clamp(1.8rem, 2vw, 5rem);
          font-weight: bold;
          margin-bottom: 1rem;
          color: #222;
        }

        .hero-text {
          font-size: clamp(1.4rem, 2vw, 2rem);
          color: #444;
        }

        .hero-text-gap {
          margin-top: 1rem;
        }

        .hero-links {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .hero-link-icon {
          color: #444;
          font-size: 1.6rem;
          transition: color 0.2s;
        }

        .hero-link-icon:hover,
        .hero-link-icon:focus {
          color: #4856a3;
          outline: none;
        }

        /* Responsive for smaller devices */
        @media (max-width: 768px) {
          .hero {
            flex-wrap: wrap;
            max-height: none;
          }

          .hero-image-container,
          .hero-content {
            width: 100%;
            height: auto;
            padding: 1rem 2rem;
          }

          .hero-image-container {
            justify-content: center;
            margin-bottom: 1rem;
          }

          .hero-image {
            max-height: 300px;
            width: auto;
            max-width: 100%;
            border-radius: 8px;
          }

          .hero-content {
            padding: 0 2rem 2rem;
          }

          .hero-title {
            font-size: clamp(1.6rem, 5vw, 3rem);
          }

          .hero-text {
            font-size: clamp(1rem, 4vw, 1.8rem);
          }

          .hero-links {
            justify-content: center;
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
              <a
                href={link1}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link-icon"
                title="GitHub"
              >
                <FaGithub />
              </a>
            )}
            {link2 && (
              <a
                href={link2}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link-icon"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            )}
            {link3 && (
              <a
                href={link3}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link-icon"
                title="HackerRank"
              >
                <FaHackerrank />
              </a>
            )}
            {link4 && (
              <a
                href={link4}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link-icon"
                title="Resume"
              >
                <FaFileAlt />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
