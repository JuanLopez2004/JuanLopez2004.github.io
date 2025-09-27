import React from "react";
import styles from '../styles/SplitSection.module.css';

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
  grayBg?: boolean;
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
  grayBg,
}: SplitSectionProps) {
  const updatedContent1 = `${content1}`;

  return (
    <>
      <section className={`${styles.splitSectionBody} ${grayBg ? styles.grayBg : ''}`}>
        <div className={styles.textBlock}>
          <h2 className={styles.sectionTitle}>{title1}</h2>
          {updatedContent1 && <p className={styles.sectionParagraph}>{updatedContent1}</p>}
          {content2 && <p className={styles.sectionParagraph}>{content2}</p>}
          {content5 && <p className={styles.sectionParagraph}>{content5}</p>}
          {link1Text && link1Href && (
            <a href={link1Href} className={styles.sectionLink}>
              {link1Text}
            </a>
          )}
        </div>

        <div className={styles.textBlock}>
          <h2 className={styles.sectionTitle}>{title2}</h2>
          <p className={styles.sectionParagraph}>{content3}</p>
          {content4 && <p className={styles.sectionParagraph}>{content4}</p>}
          {content6 && <p className={styles.sectionParagraph}>{content6}</p>}
          {link2Text && link2Href && (
            <a href={link2Href} className={styles.sectionLink}>
              {link2Text}
            </a>
          )}
        </div>
      </section>
    </>
  );
}
