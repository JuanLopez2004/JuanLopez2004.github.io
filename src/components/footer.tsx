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
                    padding: 1rem 0;
                    position: relative;
                    z-index: 1;
                    width: 100vw;
                    left: 0;
                    margin: 0;
                    box-sizing: border-box;
                }
              .footer-text {
                    font-size: 1.7rem;
                    text-align: center;
              }
                .footer-bottom {
                    margin-top: auto; 
                    text-align: center;
                    }

              .footer-link {
                    color: white;
                    font-size: 1.5rem;
                    text-decoration: none;
                    margin-top: 0.7rem;
              }
              .footer-nav a:hover {
                        color:rgb(255, 255, 255);
                        text-decoration: underline;
                        fade-in: 0.3s;
                  }

                  @media (max-width: 900px) {
                    .footer {
                        padding: 0.5rem 0;
                    }
                    .footer-text {
                        font-size: 1.1rem;
                    }
                    .footer-link {
                        font-size: 1rem;
                    }
                    }
            `}</style>

            <footer className="footer">
    <div className="footer-nav">
        <span className="footer-text">
            © 2025 Juan Lopez
        </span>
        <div className="footer-bottom">
            <a
                href="mailto:jlopezcs04@gmail.com"
                className="footer-link"
            >
                Contact
            </a>
        </div>
    </div>
</footer>
        </>
    );
}