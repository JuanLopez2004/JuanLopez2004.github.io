import Header from '@/components/header';
import Footer from '@/components/footer';
import Background from '@/components/background';
import Hero from '@/components/hero';
import Section from '@/components/section';
import SplitSection from '@/components/splitsection';
import Showcase, { Project } from '@/components/showcase';

//Projects Section
const projects: Project[] = [
	{
		title: 'GooseBot',
		description: 'General Discord Bot built with DiscordPY',
		imageSrc: 'https://i.ibb.co/C5YhCYnN/Picsart-25-06-17-02-56-28-663.jpg',
		link: 'https://github.com/JuanLopez2004/discord-goosebot',
	},
	{
		title: "Ryan's Parts Commerce Site",
		description: 'Junior Year Software Eng Project built in ReactJS, NodeJs',
		imageSrc: 'https://i.imgur.com/SvVdlsC.png',
		link: 'https://github.com/JuanLopez2004/CSCI-467',
	},
	{
		title: 'NIU ACM Website',
		description:
			'ACM Departmental Website Programmed with ReactJS, TypeScript. Serverside Development with NextJS with nixOS/Bun toolkit',
		imageSrc: 'https://i.imgur.com/bscMhK0.png',
		link: 'https://github.com/niu-acm/niu-acm-website',
	},
	{
		title: '2nd Portfolio Site',
		description: 'This Very Site. Built with TypeScript, ReactJS, and NextJS',
		imageSrc: 'https://images.pling.com/img/00/00/04/47/10/1114759/44869-1.jpg',
		link: 'https://github.com/JuanLopez2004/Website2',
	},
	{
		title: 'More Projects',
		description: 'Click View to View More Projects',
		imageSrc: 'https://i.imgur.com/viSEu7f.jpeg',
		link: '/projects',
	},
];

export default function Home() {
	return (
		<div
			style={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				position: 'relative',
				width: '100%',
				maxWidth: '100vw',
				overflowX: 'hidden',
				zIndex: 1,
			}}
		>
			<Background />
			<Header />

			<main
				style={{
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					gap: '2rem',
					paddingTop: '100px',
					maxWidth: '100%',
					boxSizing: 'border-box',
					zIndex: 1,
				}}
			>
				<section
					style={{
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						boxSizing: 'border-box',
						backgroundColor: 'white',
						zIndex: 2,
					}}
				>
					<Hero
						title="Aspiring Fullstack Developer with an interest in Data Science"
						content="I’m a Senior studying Computer Science at Northern Illinois University, focused on full-stack web development."
						content2="I’m comfortable with C++, SQL databases, React, Typescript and have a growing interest in data science and its real-world applications."
						content3="I enjoy building practical, efficient apps that connect smoothly with databases and provide great user experiences."
						imageSrc="https://c4.wallpaperflare.com/wallpaper/750/507/586/computers-linux-wallpaper-preview.jpg"
						altText="Tux"
						link1="https://github.com/JuanLopez2004"
						link2="https://www.linkedin.com/in/juan-lopez-6278bb234/"
						link3="https://www.hackerrank.com/profile/jlopezcs04"
						link4="https://drive.google.com/file/d/1nR7Vh3GKPJ2FIKtNlN_zoIqoUFamPgpn/view?usp=sharing"
						whiteBg={true}
					/>
				</section>

				<section style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0 1rem' }}>
					<Section
						title="Biography"
						content="I am a Senior at NIU! I am in my fourth year learning Computer Science. I have a passion for full-stack web development and data science. I am the Chair of the NIU ACM Chapter, where I help organize fun events and educational workshops for students."
						content2="I believe in an equitable tech community, and I strive to make tech accessible to everyone. I am an avid fan of College Football, Team Fortress 2, and Adult Swim."
						imageSrc="https://i.ibb.co/hRMFKRWw/IMG-20250711-191116-406.jpg"
						altText="tux"
					/>
				</section>

				<div id="Skills">
					<SplitSection
						title1="Skills"
						content1="C++, SQL, ReactJS, TypeScript, Python,"
						content2="HTML, CSS, NextJS, Could do Java if forced"
						title2="Dev Tools"
						content3="VScode, Git, GitHub, GitLab,"
						content4="MySQL, Vite, Windows, Linux"
						whiteBg={true}
					/>
				</div>

				<div id="Work">
					<section style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0 1rem' }}>
						<SplitSection
							title1="Work Experience"
							content1="ResTech Help Desk Technician - Northern Illinois University · Part-time, Jun 2025 - Present"
							content2="DeKalb, Illinois, United States"
							content5="On-site"
							title2="Description"
							content3="Provide IT support to students and staff in the various NIU residence halls and the Student Center, including laptop troubleshooting, hardware/software support, Computer Imaging, Powershell, and Assistance."
							content4="Tools Learned: Powershell, Windows 11 Support, GitLab"
							whiteBg={true}
							large={true}
						/>
					</section>
				</div>

				<div id="Involvement">
					<section style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0 1rem' }}>
						<Section
							title="Involvement"
							content="I serve as Chair for the NIU Association of Computing Machinery for 2024-2026. Under our shared vision, we have completely revamped ACM with two new Special Interest Groups (SIGwebdev and SIGmainframe) as well as provide SIGmeeting Workshops, Socials, Speaker Presentations, Career Fairs, and Alumni Council Outreach"
							content2="If you are interested in reading about our work, my contributions, and our event history click below"
							imageSrc="https://i.imgur.com/pkz8jYe.png"
							altText="tux"
							link1="/Involvement"
							link1Label="View Involvement Page"
							whiteBg={true}
						/>
					</section>
				</div>

				<div id="Projects">
					<section style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0 1rem' }}>
						<Showcase projects={projects} />
					</section>
				</div>
			</main>

			<Footer />
		</div>
	);
}
