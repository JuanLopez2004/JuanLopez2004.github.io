import Header from '@/components/header';
import Footer from '@/components/footer';
import Background from '@/components/background';
import Showcase, { Project } from '@/components/showcase';

//Project Section
const projects: Project[] = [
  {
    title: "GooseBot",
	description: "General Discord Bot built with DiscordPY",
	imageSrc: "https://github.com/user-attachments/assets/d5e0ed99-b383-48fa-9284-2132bb02e9bc",
	link: "https://github.com/JuanLopez2004/discord-goosebot",
	},
	{
	title: "Ryan's Parts Commerce Website",
	description: "Junior Year Software Eng Project built in ReactJS, NodeJs",
	imageSrc: "https://github.com/user-attachments/assets/ad1ddeb6-1282-49fb-9efd-58b04bc92201",
	link: "https://github.com/JuanLopez2004/CSCI-467",
	},
	{
	title: "NIU ACM Website",
	description: "ACM Departmental Website Programmed with ReactJS, TypeScript. Serverside Development with NextJS with nixOS/Bun toolkit",
	imageSrc: "https://github.com/user-attachments/assets/e77bebf6-1547-4f26-9528-994a539eab14",
	link: "https://github.com/niu-acm/niu-acm-website",
	},
	{
	title: "Portfolio Site",
	description: "This Very Site. Built with TypeScript, ReactJS, and NextJS",
	imageSrc: "https://github.com/user-attachments/assets/2579a930-412d-4c14-9ad9-99885d3e4e6a",
	link: "https://github.com/JuanLopez2004/Website2",
	},
	{
	title: "Android Themed HTML/CSS Website",
	description: "HTML/CSS Website built with AN Android Theme",
	imageSrc: "https://github.com/user-attachments/assets/5962ede9-e2fb-4892-b7bc-27ab4103670f",
	link: "https://github.com/JuanLopez2004/COMS359-Website",
	},
	{
	title: "goosefm Website",
	description: "Online Radio Station Website built in NextJS. Themed after DeKalb and Geese",
	imageSrc: "https://github.com/user-attachments/assets/93945744-4979-4b3a-a346-441405bae935",
	link: "https://github.com/JuanLopez2004/goosefm",
	},
	{
	title: "1st Personal Website",
	description: "My Original Website from 2023 to 2025, multiple versions all in HTML/CSS",
	imageSrc: "https://github.com/user-attachments/assets/cbc2447a-7c3e-47e6-85f2-dab83f1cefa2",
	link: "https://github.com/JuanLopez2004/FirstPortfolio",
	website: "https://web.archive.org/web/20250620044839/https://juanlopezcs.com/"
	},
	{
	title: "Karaoke Site",
	description: "Sophomore Year Databases Project built in HTML/CSS/PHP. Themed after John Winans",
	imageSrc: "https://github.com/user-attachments/assets/9d4b04bb-75d1-4595-9be1-d2dad4c73ce9",
	link: "https://github.com/JuanLopez2004/466Project",
	website: "https://students.cs.niu.edu/~z1952526/homepage.php"
	},
	{
	title: "Heart Disease Mortality Prediction Grad Course Project",
	description: "NIU CSCI 490 Data Mining Course Project. Built in Python with Pandas, Sklearn, Matplotlib",
	imageSrc: "https://github.com/user-attachments/assets/f856ae4f-557b-420f-9659-3e25fa0c6884",
	link: "https://github.com/JuanLopez2004/CSCI490-Project-Data-Mining",
	},
	{
	title: "RenPy Dusky Dating Sim",
	description: "Dating Sim built in RenPy Engine. Features multiple endings and routes.",
	imageSrc: "https://github.com/user-attachments/assets/1ac938b0-ca98-41f3-8e78-f1ff30dad132",
	link: "https://github.com/JuanLopez2004/Dusky-Sim",
	},
	{
	title: "Grocery List with Database App",
	description: "Developed for CSCI 322 Android. Programmed in Java. Database with SQlite. Themed after the Nostalgia Critic",
	imageSrc: "https://github.com/user-attachments/assets/c2164037-44b8-47f4-b903-aa22bea6cf2a",
	link: "https://github.com/JuanLopez2004/GroceryAppList",
	},
	{
	title: "American Football App",
	description: "Android App whose Sole Purpose is to play 1999's midwest emo classic 'never meant'",
	imageSrc: "https://github.com/user-attachments/assets/e33f1cd1-d1c7-4a1c-8664-8130faa19d5a",
	link: "https://github.com/JuanLopez2004/AmericanFootballApp",
	},
	/*
	{
	title: "1st Portfolio Site",
	description: "My Original Website from 2023 to 2025, multiple versions all in HTML/CSS",
	imageSrc: "",
	link: "https://github.com/JuanLopez2004/project-three",
	},

	*/
];

export default function Home() {
    return (
        	<div style={{ 
			minHeight: "100vh", 
			display: "flex", 
			flexDirection: "column", 
			position: "relative" 
		}}>

          <main style={{
          	flex: 1,
          	display: 'flex',
          	flexDirection: 'column',
          	paddingTop: '120px', 
        	}}
      	></main>

          <Background />
          <Header />

            
          <main style={{ flex: 1 }}>
          {/* main content goes here */}
                
                
          {/* Showcase Section */}
          <div id="Projects">
          	<section style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          	<Showcase projects={projects} />
          	</section>
          </div>

          </main>
		<Footer />
        </div>
    );
}