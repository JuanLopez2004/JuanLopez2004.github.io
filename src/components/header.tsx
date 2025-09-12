import Link from "next/link";
import styles from '../styles/Header.module.css';

export default function Header() {
    return (
                background-color: #4856a3;
                color: white;
                box-sizing: border-box;
                position: fixed;
        <header className={styles.header}>
            <div className={styles["header-container"]}>
                <div className={styles["header-left"]}>
                    <Link href="/">
                        <img
                            src="https://github.com/user-attachments/assets/75ba5dcd-94c9-4eba-b13d-ce46536f9bee"
                            alt="Logo"
                            className={styles["header-logo"]}
                        />
                    </Link>
                    <span className={styles["header-title"]}>Juan Lopez</span>
                </div>
                <nav className={styles["header-nav"]}>
                    <Link href="/#Skills">Skills</Link>
                    <Link href="/#Work">Work</Link>
                    <Link href="/involvement">Involvement</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/Blog">Blog</Link>
                </nav>
            </div>
        </header>
    );
}
