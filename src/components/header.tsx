import Link from "next/link";

export default function Header() {
    return (
        <>
            <style>{`
               .header {
                display: flex;
                padding: 1rem 0;
                align-items: center;
                background-color: #4856a3;
                color: white;
                box-sizing: border-box;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 1000;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
            }

            .header-container {
                width: 100%;
                max-width: 90rem;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 3rem;
            }

            .header-left,
            .header-nav {
                display: flex;
                align-items: center;
                height: 80px;
            }

            .header-left {
                gap: 1.2rem;
            }

            .header-logo {
                height: 70px;
                transition: opacity 0.3s ease;
            }

            .header-title {
                font-size: 1.6rem;
                font-weight: bold;
                letter-spacing: 0.5px;
                line-height: 70px;
                display: flex;
                align-items: center;
            }

            .header-nav a {
                color: white;
                text-decoration: none;
                font-size: 1.1rem;
                margin: 0 1.3rem;
                transition: color 0.3s ease;
                line-height: 70px;
            }

            .header-nav a:hover {
                color: rgb(255, 255, 255);
                text-decoration: underline;
            }

            @media (max-width: 900px) {
                .header {
                    height: auto;
                    min-height: 80px;
                }
                .header-container {
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 0.5rem 1rem;
                    gap: 0.5rem;
                }
                .header-left {
                    height: auto;
                    gap: 0.7rem;
                    width: 100%;
                }
                .header-logo {
                    height: 48px;
                }
                .header-title {
                    font-size: 1.1rem;
                    line-height: 48px;
                }
                .header-nav {
                    height: auto;
                    flex-wrap: wrap;
                    width: 100%;
                    gap: 0.5rem;
                }
                .header-nav a {
                    margin: 0;
                    font-size: 0.95rem;
                    line-height: 2rem;
                    padding: 0.2rem 0.5rem;
                }
            }
            `}</style>

            <header className="header">
                <div className="header-container">
                    <div className="header-left">
                        <Link href="/">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png"
                                alt="Logo"
                                className="header-logo"
                            />
                        </Link>
                        <span className="header-title">Juan Lopez</span>
                    </div>

                    <nav className="header-nav">
                        <Link href="/#Skills">Skills</Link>
                        <Link href="/#Work">Work</Link>
                        <Link href="/involvement">Involvement</Link>
                        <Link href="/projects">Projects</Link>
                        <Link href="/Blog">Blog</Link>
                    </nav>
                </div>
            </header>
        </>
    );
}
