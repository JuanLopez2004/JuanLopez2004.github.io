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
                    background: #4856a3 !important;
                    color: white;
                    padding: 1rem 0 0.5rem 0;
                    position: relative;
                    z-index: 1;
                    width: 100vw;
                    min-width: 100vw;
                    margin: 0;
                    box-sizing: border-box;
                    margin-top: auto;
                    left: 0;
                    right: 0;
                    border: none;
                    box-shadow: none;
                }
                
                .footer-nav {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                }
                
              .footer-text {
                    font-size: 1.7rem;
                    text-align: center;
                    margin: 0;
              }
              
                .footer-bottom {
                    text-align: center;
                    margin: 0;
                }

              .footer-link {
                    color: white;
                    font-size: 1.5rem;
                    text-decoration: none;
                    display: inline-block;
                    transition: color 0.3s ease;
              }
              
              .footer-link:hover {
                        color: rgb(200, 200, 255);
                        text-decoration: underline;
                  }

                  @media (max-width: 900px) {
                    .footer {
                        padding: 0.8rem 0 0.3rem 0;
                        width: 100vw;
                        min-width: 100vw;
                        left: 0;
                        right: 0;
                        background: #4856a3 !important;
                        border: none;
                        box-shadow: none;
                    }
                    .footer-nav {
                        padding: 0 0.5rem;
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