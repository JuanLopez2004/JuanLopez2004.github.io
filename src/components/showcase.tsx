import React from "react";

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
    <div
      style={{
        padding: "1rem",
        zIndex: 1,
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginTop: "0",
          color: "black",
        }}
      >
        Projects
      </h2>

      <div
        className="projects-container"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "2rem",
          flexWrap: "wrap",
        }}
      >
        {projects.map(({ title, description, imageSrc, link, website }) => (
          <div
            key={title}
            className="project-card"
            style={{
              border: "1px solid #ccc",
              borderRadius: "0.5rem",
              width: "20rem",
              height: "30rem",
              backgroundColor: "white",
              boxShadow: "0 0.125rem 0.5rem rgba(0,0,0,0.1)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              zIndex: 1,
              transition: "all 0.3s ease",
            }}
          >
            <img
              src={imageSrc}
              alt={title}
              style={{ width: "100%", height: "17.25rem", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem", flexGrow: 1 }}>
              <h3 style={{ margin: "0 0 0.5rem 0" }}>{title}</h3>
              <p style={{ margin: 0 }}>{description}</p>
            </div>
            <div
              style={{
                padding: "0 1rem 1rem 1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0070f3",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                View Code →
              </a>
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#28a745",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Visit Site →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .project-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border-radius: 8px;
          overflow: hidden;
        }
        .project-card:hover {
          transform: translateY(-0.25rem);
          box-shadow: 0 0.625rem 1rem rgba(0, 0, 0, 0.2);
        }
        @media (max-width: 900px) {
          .project-card {
            width: 100% !important;
            min-width: 0;
            margin: 0 auto 1rem auto;
            height: auto !important;
            max-width: 300px;
          }
          .projects-container {
            padding: 0 1rem !important;
            justify-content: center !important;
            flex-direction: column !important;
            align-items: center !important;
          }
        }
      `}</style>
	  </div>
  );
}