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
  const updatedContent1 = `${content1}`;

  return (
    <>
      <style>{`
       .sectionbody {
  width: 100%;
  margin: clamp(1rem, 3vw, 1.5rem) auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${whiteBg ? "#fff" : "transparent"};
  position: relative;
  max-width: min(1200px, 95vw);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: clamp(2rem, 5vw, 3rem);
  border-radius: clamp(8px, 2vw, 1rem);
  gap: clamp(1rem, 3vw, 1.5rem);
  height: auto;
}
.text-block {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  background-color: #f9f9f9;
  padding: clamp(1.5rem, 4vw, 2rem);
  border-radius: clamp(6px, 1.5vw, 0.75rem);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}
@media (max-width: 768px) {
  .sectionbody {
    flex-direction: column;
    width: 95%;
    max-width: 95%;
    margin: clamp(0.5rem, 2vw, 1rem) auto;
    padding: clamp(0.75rem, 2.5vw, 1rem);
  }
  .text-block {
    width: 100%;
    padding: clamp(0.75rem, 2.5vw, 1rem);
    text-align: center;
  }
}
@media (min-width: 769px) {
  .sectionbody {
    flex-direction: row;
  }
}
@media (min-width: 1200px) {
  .text-block {
    width: 70%;
  }
}
@media (max-width: 480px) {
  .sectionbody {
    padding: 1rem;
    gap: 1rem;
  }
  .text-block {
    padding: 1rem;
  }
}
.section-title {
  font-size: clamp(1.2rem, 4vw, 2rem);
  font-weight: 700;
  margin-bottom: clamp(0.5rem, 2vw, 1rem);
  color: #222;
  line-height: 1.3;
}
.section-paragraph {
  margin-bottom: clamp(0.5rem, 1.5vw, 0.75rem);
  font-size: clamp(0.9rem, 3vw, 1.3rem);
  color: #444;
  white-space: pre-wrap;
  word-break: break-word;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
}
.section-link {
  margin-top: clamp(0.25rem, 1vw, 0.5rem);
  font-size: clamp(0.8rem, 2.5vw, 1.1rem);
  font-weight: 600;
  color: #007BFF;
  text-decoration: none;
  transition: color 0.2s ease;
  padding: clamp(0.375rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1rem);
  background-color: #007BFF;
  color: white;
  border-radius: clamp(4px, 1vw, 6px);
  display: inline-block;
}
.section-link:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}
/* High DPI displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .sectionbody {
    border-width: 0.5px;
  }
}
`}</style>

      <section className="sectionbody">
        <div className="text-block">
          <h2 className="section-title">{title1}</h2>
          {updatedContent1 && <p className="section-paragraph">{updatedContent1}</p>}
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
