import Link from "next/link";

export default function Header() {
    return (
        <>
            <style>{`
                .header {
                    display: flex;
                    padding: 1rem 1rem;
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
                    max-width: 62.5rem;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .header-left,
                .header-nav {
                    display: flex;
                    align-items: center;
                    height: 80px; 
                }
				
				.header-left {
                    gap: 0.5rem; 
				}

                .header-logo {
                    height: 50px;
                    transition: opacity 0.3s ease;
                }

                .header-logo:hover {
                    opacity: 0.6;
                }

                .header-title {
                    font-size: 1.4rem;
                    font-weight: bold;
                    letter-spacing: 0.5px;
                    line-height: 50px; /* Match logo height */
                    display: flex;
                    align-items: center;
                }

                .header-nav a {
                    color: white;
                    text-decoration: none;
                    font-size: 1.1rem;
                    margin: 0 0.7rem;
                    transition: color 0.3s ease;
                    line-height: 50px; /* Match alignment */
                }

                .header-nav a:hover {
                    color: rgb(255, 255, 255);
                    text-decoration: underline;
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
