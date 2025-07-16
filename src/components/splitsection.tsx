import React from "react";

type SplitSectionProps = {
  title1: string;
  content1?: string;
  content2?: string;
  content5?: string;

  title2: string;
  content3: string;
  content4?: string;
  content6?: string;

  large?: boolean;

  link1Text?: string;
  link1Href?: string;

  link2Text?: string;
  link2Href?: string;

  whiteBg?: boolean;
};

export default function SplitSection({
  title1,
  content1,
  content2,
  content5,
  content6,
  title2,
  content3,
  content4,
  link1Text,
  link1Href,
  link2Text,
  link2Href,
  whiteBg,
}: SplitSectionProps) {
  return (
    <>
      <style>{`
       .sectionbody {
  width: 100%;
  margin: 1.5rem auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: ${whiteBg ? "#fff" : "transparent"};
  position: relative;
  max-width: 1200px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  border-radius: 1rem;
  gap: 1.5rem;
  height: auto;
}

.text-block {
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
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

.section-link {
  margin-top: 0.5rem;
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  font-weight: 600;
  color: #007BFF;
  text-decoration: none;
  transition: color 0.2s ease;
}

.section-link:hover {
  color: #0056b3;
}

@media (max-width: 900px) {
        .sectionbody {
          flex-direction: column;
          padding: 1rem;
          gap: 1rem;
          max-width: 95%;
          margin: 1rem auto;
          width: 95%;
        }
        .text-block {
          width: 100% !important;
          padding: 1rem !important;
          min-width: 0;
          text-align: center;
        }
        .section-title {
          text-align: center;
        }
        .section-paragraph {
          text-align: center;
        }
        }


      `}</style>

      <section className="sectionbody">
        <div className="text-block">
          <h2 className="section-title">{title1}</h2>
          {content1 && <p className="section-paragraph">{content1}</p>}
          {content2 && <p className="section-paragraph">{content2}</p>}
          {content5 && <p className="section-paragraph">{content5}</p>}
          {link1Text && link1Href && (
            <a href={link1Href} className="section-link">
              {link1Text}
            </a>
          )}
        </div>

        <div className="text-block">
          <h2 className="section-title">{title2}</h2>
          <p className="section-paragraph">{content3}</p>
          {content4 && <p className="section-paragraph">{content4}</p>}
          {content6 && <p className="section-paragraph">{content6}</p>}
          {link2Text && link2Href && (
            <a href={link2Href} className="section-link">
              {link2Text}
            </a>
          )}
        </div>
      </section>
    </>
  );
}
