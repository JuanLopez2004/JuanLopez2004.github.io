import React from "react";
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
    <div className={styles.footerNav}>
        <span className={styles.footerText}>
            © 2025 Juan Lopez
        </span>
        <div className={styles.footerBottom}>
            <a
                href="mailto:jlopezcs04@gmail.com"
                className={styles.footerLink}
            >
                Contact
            </a>
        </div>
    </div>
</footer>
        </>
    );
}