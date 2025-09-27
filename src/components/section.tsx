import React from "react";
import styles from '../styles/Section.module.css';

type IntroBodyProps = {
	title: string;
	content: string;
	content2?: string;
	content3?: string;
	imageSrc: string;
	altText: string;
	whiteBg?: boolean;
	grayBg?: boolean;
	link1?: string;
	link2?: string;
	link3?: string;
	link4?: string;
	link1Label?: string;
};

export default function Section({ title, content, content2, content3, imageSrc, altText, whiteBg, grayBg, link1, link2, link3, link4, link1Label }: IntroBodyProps) {
	return (
		<>
			<header className={`${styles.sectionbody} ${whiteBg ? styles.whiteBg : ''} ${grayBg ? styles.grayBg : ''}`}>
				<div className={styles.sectionImageWrapper}>
					<img src={imageSrc} alt={altText} className={styles.sectionImage} />
				</div>

				<div className={styles.sectionContent}>
					<h1 className={styles.sectionTitle}>{title}</h1>
					<p className={styles.sectionParagraph}>{content}</p>
					{content2 && <p className={styles.sectionParagraph}>{content2}</p>}
					{content3 && <p className={styles.sectionParagraph}>{content3}</p>}

					<div className={styles.sectionLinks}>
						{link1 && <a href={link1}>{link1Label || "Link 1"}</a>}
						{link2 && <a href={link2}>Link 2</a>}
						{link3 && <a href={link3}>Link 3</a>}
						{link4 && <a href={link4}>Link 4</a>}
					</div>
				</div>
			</header>
		</>
	);
}