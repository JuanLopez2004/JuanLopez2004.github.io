import React from "react";

type IntroBodyProps = {
	title: string;
	content: string;
	content2?: string;
	content3?: string;
	imageSrc: string;
	altText: string;
	whiteBg?: boolean;
	link1?: string;
	link2?: string;
	link3?: string;
	link4?: string;
	link1Label?: string;
};

export default function Section({ title, content, content2, content3, imageSrc, altText, whiteBg, link1, link2, link3, link4, link1Label }: IntroBodyProps) {
	return (
		<>
		   <style>{`
			.sectionbody {
				width: 100%;
				margin: clamp(1rem, 3vw, 1.5rem) auto;
				display: flex;
				align-items: center;
				justify-content: center;
				background: ${whiteBg ? "#fff" : "transparent"};
				position: relative;
				max-width: min(1200px, 95vw);
				box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
				padding: clamp(1rem, 3vw, 2rem);
				border-radius: clamp(8px, 2vw, 1rem);
				gap: clamp(1rem, 3vw, 1.5rem);
				height: auto;
				}
				
		   @media (max-width: 768px) {
			 .sectionbody {
			   flex-direction: column;
			   width: 95%;
			   max-width: 95%;
			   margin: clamp(0.5rem, 2vw, 1rem) auto;
			   padding: clamp(0.75rem, 2.5vw, 1rem);
			 }
			 .text-block,
			 .section-content,
			 .section-title,
			 .section-paragraph {
				text-align: center !important;
			 }
		   }

		   @media (max-width: 480px) {
			 .sectionbody {
			   padding: 0.75rem;
			   gap: 1rem;
			 }
		   }

			.text-block {
				width: 48%;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;
				box-sizing: border-box;
				background-color: #f9f9f9;
				padding: clamp(1rem, 3vw, 1.5rem);
				border-radius: clamp(6px, 1.5vw, 0.75rem);
				box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
				}

			.section-title {
				font-size: clamp(1.2rem, 4vw, 2rem);
				font-weight: 700;
				margin-bottom: clamp(0.5rem, 2vw, 1rem);
				color: #222;
				transition: color 0.3s ease, text-shadow 0.3s ease;
				cursor: default;
				line-height: 1.3;
				}

			.section-title:hover {
				color: #4856a3;
				text-shadow: 0 2px 4px rgba(0, 123, 255, 0.2);
				}

			.section-paragraph {
				margin-bottom: clamp(0.5rem, 1.5vw, 0.75rem);
				font-size: clamp(0.9rem, 3vw, 1.3rem);
				color: #444;
				white-space: pre-wrap;
				word-break: break-word;
				font-family: Arial, Helvetica, sans-serif;
				line-height: 1.6;
				transition: color 0.3s ease, transform 0.2s ease;
				cursor: default;
				}

			.section-paragraph:hover {
				color: #4856a3;
				transform: translateY(-2px);
				}

			.section-link {
				margin-top: clamp(0.25rem, 1vw, 0.5rem);
				font-size: clamp(0.8rem, 2.5vw, 1.1rem);
				font-weight: 600;
				color: #007BFF;
				text-decoration: none;
				transition: color 0.2s ease;
				}

			.section-link:hover {
				color: #4856a3;
				}

			.section-links {
				margin-top: clamp(0.75rem, 2vw, 1rem);
				display: flex;
				flex-direction: column;
				gap: clamp(0.375rem, 1vw, 0.5rem);
				align-items: center;
				justify-content: center;
				width: 100%;
				}

			.section-links a {
				display: inline-block;
				padding: clamp(0.375rem, 1.2vw, 0.5rem) clamp(0.75rem, 2vw, 1rem);
				background-color: #4856a3;
				color: white;
				text-decoration: none;
				border-radius: clamp(4px, 1vw, 0.5rem);
				font-weight: 600;
				transition: all 0.3s ease;
				text-align: center;
				font-size: clamp(0.8rem, 2.2vw, 0.95rem);
				min-width: fit-content;
				}

			.section-links a:hover {
				background-color: #4856a3;
				transform: translateY(-2px);
				box-shadow: 0 4px 8px rgba(72, 86, 163, 0.3);
				}

			.section-image-wrapper {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: clamp(0.5rem, 2vw, 1rem) 0;
				border-radius: clamp(6px, 1.5vw, 0.75rem);
				}

			.section-image {
				width: auto;
				max-width: 100%;
				height: auto;
				max-height: clamp(200px, 40vw, 300px);
				object-fit: cover;
				border-radius: clamp(6px, 1.5vw, 0.75rem);
				display: block;
				}

			@media (max-width: 768px) {
				.text-block,
				.section-content,
				.section-image-wrapper {
					width: 100%;
					padding: clamp(0.75rem, 2.5vw, 1rem);
					text-align: center;
				}
				.section-image {
					max-height: clamp(150px, 35vw, 180px);
					margin: 0 auto;
				}
				.section-title {
					text-align: center;
				}
				.section-paragraph {
					text-align: center;
				}
				.section-links {
					align-items: center;
				}
			}

			@media (max-width: 480px) {
				.section-links a {
					width: 100%;
					padding: 0.75rem 1rem;
				}
				.section-image {
					max-height: 120px;
				}
			}

			/* High DPI displays */
			@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
				.sectionbody {
					border-width: 0.5px;
				}
			}

		`}</style>

			<header className="sectionbody">
				<div className="section-image-wrapper">
					<img src={imageSrc} alt={altText} className="section-image" />
				</div>

				<div className="section-content">
					<h1 className="section-title">{title}</h1>
					<p className="section-paragraph">{content}</p>
					{content2 && <p className="section-paragraph">{content2}</p>}
					{content3 && <p className="section-paragraph">{content3}</p>}

					<div className="section-links">
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