import Header from '@/components/header';
import Footer from '@/components/footer';
import Background from '@/components/background';
import Hero from '@/components/hero';
import Section from '@/components/section';
import Showcase, { Project } from '@/components/showcase';

//Projects Section
const projects: Project[] = [
	{
		title: 'NIU ACM Website',
		description:
			'ACM Departmental Website Programmed with ReactJS, TypeScript. Serverside Development with NextJS with nixOS/Bun toolkit',
		imageSrc: 'https://github.com/user-attachments/assets/aae54359-7f88-400b-a9a9-77bbd42aba99',
		link: 'https://github.com/niu-acm/niu-acm-website',
	},
	{
		title: '2nd Portfolio Site',
		description: 'This Very Site. Built with TypeScript, ReactJS, and NextJS.',
		imageSrc: 'https://github.com/user-attachments/assets/42066ff9-499a-4bab-8c61-76a5756cb390',
		link: 'https://github.com/JuanLopez2004/Website2',
	},
	{
		title: 'GPT2010',
		description: 'Web 2.0 Era ChatGPT buddy. Built with HTML, JS, Node, and CSS for that 2000s look.',
		imageSrc: 'https://github.com/user-attachments/assets/2636d959-f2ea-4a08-b2c3-5f1e823fcee6',
		link: 'https://github.com/JuanLopez2004/gpt2010',
	},
	{
		title: '2011 Android Themed Website',
		description: 'Simple website for Web Dev course at NIU built simply in HTML, CSS, & minimal JS.',
		imageSrc: 'https://github.com/user-attachments/assets/8e947683-4f46-49c8-81a9-738d9b38279e',
		link: 'https://github.com/JuanLopez2004/Website2',
	},
	{
		title: 'Radishbeet.com',
		description: 'Where I get to be myself! Built with basic HTML/CSS for simplicity.',
		imageSrc: 'https://github.com/user-attachments/assets/d0f1bcee-235f-499b-9ccb-43dd3d5f4a6a',
		link: 'https://github.com/JuanLopez2004/radishbeet',
	},
	{
		title: 'GooseFM Radio Website',
		description: 'Fake online radio built in NextJS with embedded Online Radio play functionality.',
		imageSrc: 'https://github.com/user-attachments/assets/63367ab2-da72-41b9-b97a-05e1b249d11c',
		link: 'https://github.com/JuanLopez2004/goosefm',
	},
	{
		title: "Ryan's Parts Commerce Website",
		description: "Junior Year Software Engineering Project built in ReactJS, NodeJs",
		imageSrc: "https://github.com/user-attachments/assets/4b65a6c7-25bd-4635-a01d-f0c82ad86d9d",
		link: "https://github.com/JuanLopez2004/CSCI-467",
	},
	{
		title: 'More Projects',
		description: 'Click View to View More Projects',
		imageSrc: 'https://github.com/user-attachments/assets/1ac938b0-ca98-41f3-8e78-f1ff30dad132',
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
						title="Full-Stack Developer & Software Engineer"
						content="I'm a Computer Science graduate with a passion for full-stack development and creating scalable solutions. I hold a B.S. in Computer Science and am pursuing an M.S. in Information Management, specializing in Human-Centered Systems Design & Development."
						content2="I'm experienced in full-stack web development with ReactJS, TypeScript, Next.js, and ASP.NET Core/.NET. I recently completed a Software Engineering internship building and maintaining production applications, where I implemented features, wrote unit tests, and collaborated using modern development tools."
						content3="I'm currently a Software Engineering intern at the Illinois Housing Development Authority (IHDA)."
						content4="I enjoy building practical, efficient apps that connect smoothly with databases and provide great user experiences."
						imageSrc="https://github.com/user-attachments/assets/3b2b3bdf-3205-4b5b-b5dd-b15155783262"
						altText="tuxr"
						link1="https://github.com/JuanLopez2004"
						link2="https://www.linkedin.com/in/juan-lopez-6278bb234/"
						link3="https://www.hackerrank.com/profile/jlopezcs04"
						link4="/Juan%20Lopez%20Resume%202026.pdf"
						whiteBg={false}
					/>
				</section>

				<section style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0', margin: '0' }}>
					<Section
						title="Biography"
						content="I'm a Computer Science graduate from Northern Illinois University with a passion for full-stack development and community impact. "
						content2="I believe in building inclusive, equitable tech communities where everyone can thrive. I'm driven by solving complex problems, mentoring others, and creating solutions that make a real difference. Outside of tech, I'm passionate about college football, gaming, and creating experiences that bring people together."
						imageSrc="https://github.com/user-attachments/assets/d2f55c4d-cea8-4829-99b2-080369f7990b"
						altText="biography"
						whiteBg={false}
					/>
				</section>

				<div id="Experience">
				<section style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0', margin: '0' }}>
						<Section
							title="Experience"
							content="Full-stack developer experienced in ReactJS, TypeScript, Next.js for frontend development and ASP.NET Core, C# for backend systems. Proficient in SQL, HTML, CSS, and modern development workflows."
							content2="Completed a Software Engineering internship at IHDA maintaining production ASP.NET Core applications, implementing bug fixes, writing unit tests, and collaborating with teams using Azure DevOps and Jira. "
							content3="View my full experience, skills, and work history."
							imageSrc="https://github.com/user-attachments/assets/e7a7960c-31c7-4227-8d94-0ad87f3af700"
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
							content="I'm passionate about building inclusive tech communities. I served as Chair of the NIU ACM Chapter, organizing workshops and events. At UIUC, I'm engaged with student organizations focused on tech, professional development, and community impact."
							content2="Beyond leadership, I focus on creating opportunities for students to explore modern technologies, build meaningful projects, and develop professional networks."
							content3="Explore my involvement journey and the impact I've worked to create."
							imageSrc="https://github.com/user-attachments/assets/0618ad7d-81c9-4641-ae11-e87aec32c19b"
							altText="involvement"
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
