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
		imageSrc: 'https://github.com/user-attachments/assets/d5e0ed99-b383-48fa-9284-2132bb02e9bc',
		link: 'https://github.com/JuanLopez2004/discord-goosebot',
	},
	{
		title: "Ryan's Parts Commerce Site",
		description: 'Junior Year Software Eng Project built in ReactJS, NodeJs',
		imageSrc: 'https://github.com/user-attachments/assets/ad1ddeb6-1282-49fb-9efd-58b04bc92201',
		link: 'https://github.com/JuanLopez2004/CSCI-467',
	},
	{
		title: 'NIU ACM Website',
		description:
			'ACM Departmental Website Programmed with ReactJS, TypeScript. Serverside Development with NextJS with nixOS/Bun toolkit',
		imageSrc: 'https://github.com/user-attachments/assets/e77bebf6-1547-4f26-9528-994a539eab14',
		link: 'https://github.com/niu-acm/niu-acm-website',
	},
	{
		title: '2nd Portfolio Site',
		description: 'This Very Site. Built with TypeScript, ReactJS, and NextJS',
		imageSrc: 'https://github.com/user-attachments/assets/2579a930-412d-4c14-9ad9-99885d3e4e6a',
		link: 'https://github.com/JuanLopez2004/Website2',
	},
	{
		title: 'More Projects',
		description: 'Click View to View More Projects',
		imageSrc: 'https://github.com/user-attachments/assets/b4e5dcf3-ea5d-47b2-961a-8a2346593cea',
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
          paddingTop: '80px', // adjust if header height changes
        }}
      >
				<section style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
					<Hero
						title="Aspiring Fullstack Developer with an interest in Data Science"
						content="I’m a Senior studying Computer Science at Northern Illinois University, focused on full-stack web development."
						content2="I’m comfortable with C++, SQL databases, React, Typescript and have a growing interest in data science and its real-world applications."
						content3="I enjoy building practical, efficient apps that connect smoothly with databases and provide great user experiences."
						imageSrc="https://github.com/user-attachments/assets/f95e2129-8549-457e-95c0-d5fa4b47e358"
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
						imageSrc="https://github.com/user-attachments/assets/d84a47b4-de44-4104-84fa-351d3120fd23"
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
							imageSrc="https://github.com/user-attachments/assets/5a4d12d3-76e3-4f90-ad86-cbe0041925c7"
							altText="tux"
							link1="/involvement"
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
