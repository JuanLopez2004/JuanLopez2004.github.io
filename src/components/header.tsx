import Link from "next/link";

export default function Header() {
    return (
        <>
            <style>{`
               .header {
                display: flex;
                padding: 0.5rem 0;
                align-items: center;
                background-color: #4856a3;
                color: white;
                box-sizing: border-box;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                width: 100vw;
                min-width: 100vw;
                z-index: 1000;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                height: 100px;
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
                height: 60px;
            }

            .header-left {
                gap: 1.2rem;
            }

            .header-logo {
                height: 70px;
                transition: opacity 0.3s ease;
            }

            .header-title {
                font-size: 1.4rem;
                font-weight: bold;
                letter-spacing: 0.5px;
                line-height: 50px;
                display: flex;
                align-items: center;
            }

            .header-nav a {
                color: white;
                text-decoration: none;
                font-size: 1.5rem;
                margin: 0 1.3rem;
                transition: color 0.3s ease;
                line-height: 50px;
            }

            .header-nav a:hover {
                color: rgb(255, 255, 255);
                text-decoration: underline;
            }

            @media (max-width: 900px) {
                .header {
                    padding: 0.3rem 0;
                    height: auto;
                    min-height: unset;
                }
                .header-container {
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 0.5rem;
                    gap: 0.5rem;
                    height: auto;
                }
                .header-left {
                    flex-direction: row;
                    justify-content: center;
                    gap: 0.5rem;
                    height: 40px;
                }
                .header-logo {
                    height: 55px;
                }
                .header-title {
                    font-size: 2rem;
                    line-height: 30px;
                    white-space: nowrap;
                }
                .header-nav {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: center;
                    gap: 0.2rem;
                    width: auto;
                }
                .header-nav a {
                    margin: 0;
                    font-size: 1rem;
                    font-weight: bold;
                    line-height: 30px;
                    padding: 0.2rem 0.3rem;
                    white-space: nowrap;
                    flex-shrink: 0;
                }
            }
            `}</style>

            <header className="header">
                <div className="header-container">
                    <div className="header-left">
                        <Link href="/">
                            <img
                                src="https://github.com/user-attachments/assets/75ba5dcd-94c9-4eba-b13d-ce46536f9bee"
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
