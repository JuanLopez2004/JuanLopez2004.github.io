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
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem", // 32px
          marginTop: "0",
          color: "black",
        }}
      >
        Projects
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "2rem", // 32px
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
              width: "20rem", // bigger width
              height:"30rem",
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
              style={{ width: "100%", height: "17.25rem", objectFit: "cover" }} // 180px
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
                gap: "0.25rem", // 4px
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
        .project-card:hover {
          transform: translateY(-0.25rem); /* -4px */
          box-shadow: 0 0.625rem 1rem rgba(0, 0, 0, 0.2); /* 0 10px 16px */
        }
      `}</style>
    </div>
  );
}
