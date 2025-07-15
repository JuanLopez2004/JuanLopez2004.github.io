import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        .header-left {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          height: 50px;
        }

        .header-logo {
          height: 50px;
          transition: opacity 0.3s ease;
          cursor: pointer;
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
          user-select: none;
        }

        nav.header-nav {
          display: flex;
          align-items: center;
          height: 50px;
          gap: 1rem;
        }

        nav.header-nav a {
          color: white;
          text-decoration: none;
          font-size: 1.1rem;
          line-height: 50px;
          transition: color 0.3s ease;
        }

        nav.header-nav a:hover,
        nav.header-nav a:focus {
          color: #fff;
          text-decoration: underline;
          outline: none;
        }

        /* Hamburger menu button */
        .menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          margin-left: 1rem;
        }

        .menu-button div {
          width: 25px;
          height: 3px;
          background-color: white;
          margin: 5px 0;
          transition: 0.4s;
          border-radius: 2px;
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          nav.header-nav {
            position: fixed;
            top: 80px;
            right: 0;
            background-color: #4856a3;
            flex-direction: column;
            width: 200px;
            max-width: 80vw;
            height: calc(100vh - 80px);
            padding-top: 1rem;
            gap: 1rem;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            box-shadow: -2px 0 5px rgba(0,0,0,0.3);
            z-index: 999;
          }

          nav.header-nav.open {
            transform: translateX(0);
          }

          nav.header-nav a {
            line-height: normal;
            font-size: 1.2rem;
            padding: 0.5rem 1rem;
          }

          .menu-button {
            display: block;
          }
        }
      `}</style>

      <header className="header" role="banner">
        <div className="header-container">
          <div className="header-left">
            <Link href="/" aria-label="Home">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png"
                alt="Logo"
                className="header-logo"
              />
            </Link>
            <span className="header-title">Juan Lopez</span>
          </div>

          <button
            aria-label="Toggle menu"
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
          >
            <div style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <div style={{ opacity: menuOpen ? 0 : 1 }} />
            <div style={{ transform: menuOpen ? "rotate(-45deg) translate(6px, -6px)" : "none" }} />
          </button>

          <nav className={`header-nav ${menuOpen ? "open" : ""}`} role="navigation">
            <Link href="/#Skills" onClick={() => setMenuOpen(false)}>Skills</Link>
            <Link href="/#Work" onClick={() => setMenuOpen(false)}>Work</Link>
            <Link href="/involvement" onClick={() => setMenuOpen(false)}>Involvement</Link>
            <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link href="/Blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
