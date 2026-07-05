"use client";
import Link from "next/link";
import { useState } from "react";
import styles from '../styles/Header.module.css';
import { FaBars, FaTimes } from "react-icons/fa";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerLeft}>
                        <Link href="/" onClick={closeMenu}>
                            <img
                                src="https://github.com/user-attachments/assets/4d971aa8-85d8-47f3-bb23-d154e0a485b6"
                                alt="Logo"
                                className={styles.headerLogo}
                            />
                        </Link>
                        <span className={styles.headerTitle}>Juan Lopez</span>
                    </div>
                    <button className={styles.hamburgerButton} onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <nav className={`${styles.headerNav} ${isOpen ? styles.navOpen : ''}`}>
                        <Link href="/experience" onClick={closeMenu}>Experience</Link>
                        <Link href="/involvement" onClick={closeMenu}>Involvement</Link>
                        <Link href="/projects" onClick={closeMenu}>Projects</Link>
                        <Link href="/Blog" onClick={closeMenu}>Blog</Link>
                    </nav>
                </div>
            </header>
        </>
    );
}
