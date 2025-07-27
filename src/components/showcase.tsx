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
        padding: "clamp(0.5rem, 2vw, 1rem)",
        zIndex: 1,
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(2rem, 8vw, 4rem)",
          marginTop: "0",
          marginBottom: "clamp(1rem, 3vw, 2rem)",
          color: "black",
          fontWeight: "700",
        }}
      >
        Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
          gap: "clamp(1rem, 2.5vw, 1.5rem)",
          marginBottom: "clamp(1rem, 3vw, 2rem)",
          justifyItems: "center",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(0.5rem, 2vw, 1rem)",
        }}
      >
        {projects.map(({ title, description, imageSrc, link, website }) => (
          <div
            key={title}
            className="project-card"
            style={{
              border: "1px solid #ddd",
              borderRadius: "clamp(8px, 1.5vw, 12px)",
              width: "100%",
              maxWidth: "320px",
              minHeight: "400px",
              backgroundColor: "white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
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
              style={{ 
                width: "100%", 
                height: "200px", 
                objectFit: "cover",
                aspectRatio: "16/9"
              }}
            />
            <div style={{ 
              padding: "clamp(0.75rem, 2vw, 1.25rem)", 
              flexGrow: 1,
              display: "flex",
              flexDirection: "column"
            }}>
              <h3 style={{ 
                margin: "0 0 0.75rem 0", 
                fontSize: "clamp(1.1rem, 2.5vw, 1.25rem)",
                fontWeight: "600",
                lineHeight: "1.3"
              }}>
                {title}
              </h3>
              <p style={{ 
                margin: 0, 
                fontSize: "clamp(0.9rem, 2.2vw, 1rem)",
                lineHeight: "1.5",
                color: "#666",
                flexGrow: 1
              }}>
                {description}
              </p>
            </div>
            <div
              style={{
                padding: "0 clamp(0.75rem, 2vw, 1.25rem) clamp(0.75rem, 2vw, 1.25rem) clamp(0.75rem, 2vw, 1.25rem)",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                marginTop: "auto",
              }}
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0070f3",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                  transition: "color 0.2s ease",
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
                    fontWeight: "600",
                    fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                    transition: "color 0.2s ease",
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
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        .project-card a:hover {
          opacity: 0.8;
        }
        
        /* Enhanced responsive design */
        @media (max-width: 768px) {
          .project-card {
            max-width: 100% !important;
            min-height: 350px !important;
          }
        }
        
        @media (max-width: 480px) {
          .project-card {
            min-height: 320px !important;
          }
        }
        
        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .project-card {
            border-width: 0.5px;
          }
        }
      `}</style>
	  </div>
  );
}