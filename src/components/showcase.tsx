import React from "react";
import styles from '../styles/Showcase.module.css';

export type Project = {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  website?: string;
};

type ShowcaseProps = {
  projects: Project[];
};

export default function Showcase({ projects }: ShowcaseProps) {
  return (
    <div className={styles.showcaseContainer}>
      <h2 className={styles.showcaseTitle}>
        Projects
      </h2>

      <div className={styles.projectsGrid}>
        {projects.map(({ title, description, imageSrc, link, website }) => (
          <div
            key={title}
            className={styles.card}
          >
            <img
              src={imageSrc}
              alt={title}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                {title}
              </h3>
              <p className={styles.cardDescription}>
                {description}
              </p>
            </div>
            <div className={styles.cardFooter}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.codeLink}
              >
                View Code →
              </a>
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.siteLink}
                >
                  Visit Site →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>


	  </div>
  );
}