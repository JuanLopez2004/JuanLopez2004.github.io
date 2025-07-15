import React from "react";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #4856a3;
          color: white;
          padding: 1rem 1rem;
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .footer-text {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .footer-bottom {
          margin-top: 0.5rem;
        }

        .footer-link {
          color: white;
          font-size: 1.3rem;
          text-decoration: none;
          transition: color 0.3s ease, text-decoration 0.3s ease;
        }

        .footer-link:hover,
        .footer-link:focus {
          color: #d1d1ff;
          text-decoration: underline;
          outline: none;
        }

        /* Responsive tweaks */
        @media (max-width: 768px) {
          .footer-text {
            font-size: 1.3rem;
          }
          .footer-link {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .footer-text {
            font-size: 1.1rem;
          }
          .footer-link {
            font-size: 1rem;
          }
          .footer {
            padding: 1rem 0.5rem;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-nav">
          <span className="footer-text">© 2025 Juan Lopez</span>
          <div className="footer-bottom">
            <a href="mailto:jlopezcs04@gmail.com" className="footer-link">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
