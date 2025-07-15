import React from "react";

type IntroBodyProps = {
  title: string;
  content: string;
  content2?: string;
  content3?: string;
  imageSrc: string;
  altText: string;
  whiteBg?: boolean;
  link1?: string;
  link2?: string;
  link3?: string;
  link4?: string;
  link1Label?: string;
};

export default function Section({
  title,
  content,
  content2,
  content3,
  imageSrc,
  altText,
  whiteBg,
  link1,
  link2,
  link3,
  link4,
  link1Label,
}: IntroBodyProps) {
  return (
    <>
      <style>{`
        .sectionbody {
          width: 100%;
          margin: 1.5rem auto;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          background: ${whiteBg ? "#fff" : "transparent"};
          position: relative;
          max-width: 1200px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          padding: 2rem;
          border-radius: 1rem;
          gap: 1.5rem;
          height: auto;
          box-sizing: border-box;
        }

        .section-image-wrapper {
          width: 48%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem 0;
          border-radius: 0.75rem;
        }

        .section-image {
          width: auto;
          max-width: 100%;
          height: auto;
          max-height: 300px;
          object-fit: cover;
          border-radius: 0.75rem;
          display: block;
        }

        .section-content {
          width: 48%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          box-sizing: border-box;
        }

        .section-title {
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 700;
          margin-bottom: 1rem;
          color: #222;
        }

        .section-paragraph {
          margin-bottom: 0.75rem;
          font-size: clamp(1rem, 1.8vw, 1.3rem);
          color: #444;
          white-space: pre-wrap;
          word-break: break-word;
          font-family: Arial, Helvetica, sans-serif;
          line-height: 1.5;
        }

        .section-links a {
          margin-top: 0.5rem;
          margin-right: 1rem;
          font-size: clamp(0.9rem, 1.5vw, 1.1rem);
          font-weight: 600;
          color: #007BFF;
          text-decoration: none;
          transition: color 0.2s ease;
          display: inline-block;
        }

        .section-links a:hover,
        .section-links a:focus {
          color: #0056b3;
          outline: none;
        }

        /* Responsive for smaller devices */
        @media (max-width: 768px) {
          .sectionbody {
            flex-direction: column;
            padding: 1rem 1rem 2rem;
            max-width: 100%;
          }

          .section-image-wrapper,
          .section-content {
            width: 100%;
          }

          .section-image-wrapper {
            padding: 0;
            margin-bottom: 1rem;
          }

          .section-image {
            max-height: 250px;
            border-radius: 0.5rem;
          }

          .section-links a {
            margin-right: 0.75rem;
            margin-top: 0.25rem;
          }
        }
      `}</style>

      <header className="sectionbody">
        <div className="section-image-wrapper">
          <img src={imageSrc} alt={altText} className="section-image" />
        </div>

        <div className="section-content">
          <h1 className="section-title">{title}</h1>
          <p className="section-paragraph">{content}</p>
          {content2 && <p className="section-paragraph">{content2}</p>}
          {content3 && <p className="section-paragraph">{content3}</p>}

          <div className="section-links">
            {link1 && (
              <a href={link1} target="_blank" rel="noopener noreferrer">
                {link1Label || "Link 1"}
              </a>
            )}
            {link2 && (
              <a href={link2} target="_blank" rel="noopener noreferrer">
                Link 2
              </a>
            )}
            {link3 && (
              <a href={link3} target="_blank" rel="noopener noreferrer">
                Link 3
              </a>
            )}
            {link4 && (
              <a href={link4} target="_blank" rel="noopener noreferrer">
                Link 4
              </a>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
