import Link from "next/link";
import styles from '../styles/Header.module.css';


export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerLeft}>
                        <Link href="/">
                            <img
                                src="https://github.com/user-attachments/assets/75ba5dcd-94c9-4eba-b13d-ce46536f9bee"
                                alt="Logo"
                                className={styles.headerLogo}
                            />
                        </Link>
                        <span className={styles.headerTitle}>Juan Lopez</span>
                    </div>
                    <nav className={styles.headerNav}>
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
