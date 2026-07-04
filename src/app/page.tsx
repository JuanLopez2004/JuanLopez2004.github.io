import Header from '@/components/header';
import Footer from '@/components/footer';
import Background from '@/components/background';
import Hero from '@/components/hero';
import Section from '@/components/section';
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
				<section style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0', margin: '0' }}>
					<Hero
						title="Aspiring Frontend Developer with an interest in Information Technology"
						content="I'm a current MSIM graduate student at the University of Illinois Urbana-Champaign. I have a BS in Computer Science from Northern Illinois University."
						content2="I'm an incoming Software Engineer intern at the Illinois Housing Development Authority in Chicago, Illinois."
						content3="I’m comfortable with C++, SQL, React, Typescript, HTML, CSS, NodeJS and IT helpdesk operations."
						content4="I enjoy building practical, efficient apps that connect smoothly with databases and provide great user experiences."
						imageSrc="https://github.com/user-attachments/assets/dcb0b1d6-d5ae-4c71-838e-03861957220e"
						altText="Frutiger"
						link1="https://github.com/JuanLopez2004"
						link2="https://www.linkedin.com/in/juan-lopez-6278bb234/"
						link3="https://www.hackerrank.com/profile/jlopezcs04"
						link4="https://drive.google.com/file/d/1nR7Vh3GKPJ2FIKtNlN_zoIqoUFamPgpn/view?usp=sharing"
						whiteBg={false}
					/>
				</section>

				<section style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0', margin: '0' }}>
					<Section
						title="Biography"
						content="I am a Senior at NIU! I am in my fourth year learning Computer Science. I have a passion for web development. I am the Chair of the NIU ACM Chapter, where I help organize fun events and educational workshops for students."
						content2="I believe in an equitable tech community, and I strive to make tech accessible to everyone. I am an avid fan of College Football, Team Fortress 2, and Adult Swim."
						imageSrc="https://github.com/user-attachments/assets/d84a47b4-de44-4104-84fa-351d3120fd23"
						altText="tux"
						whiteBg={false}
					/>
				</section>

				<div id="Experience">
				<section style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0', margin: '0' }}>
						<Section
							title="Experience"
							content="I have technical experience in C++, Python, SQL, ReactJS, TypeScript, and modern frontend frameworks like NextJS."
							content2="Currently working as a ResTech/Endpoint Technician at NIU, and incoming Software Engineer intern at IHDA."
							content3="View my full experience, skills, and work history."
							imageSrc="https://github.com/user-attachments/assets/d84a47b4-de44-4104-84fa-351d3120fd23"
							altText="experience"
							link1="/experience"
							link1Label="View Experience Page"
							whiteBg={false}
							reverse={true}
						/>
					</section>
				</div>

				<div id="Involvement">
				<section style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0', margin: '0' }}>
						<Section
							title="Involvement"
							content="I served as the NIU ACM Chapter's Chair from December 2024 - May 2026. I am also involved at UIUC in a mixture of tech related organizations."
							content3="Read about my involvement history here."
							imageSrc="https://github.com/user-attachments/assets/ea132924-cb5e-4e66-bcf5-3a6aaa09e4ba"
							altText="tux"
							link1="/involvement"
							link1Label="View Involvement Page"
							whiteBg={true}
						/>
					</section>
				</div>

				<div id="Projects">
					<section style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0', margin: '0' }}>
						<Showcase projects={projects} />
					</section>
				</div>
			</main>

			<Footer />
		</div>
	);
}
