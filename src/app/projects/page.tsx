import Header from '@/components/header';
import Footer from '@/components/footer';
import Background from '@/components/background';
import Showcase, { Project } from '@/components/showcase';

//Project Section
const projects: Project[] = [
  {
    	title: "GooseBot",
	description: "General Discord Bot built with DiscordPY",
	imageSrc: "https://i.ibb.co/C5YhCYnN/Picsart-25-06-17-02-56-28-663.jpg",
	link: "https://github.com/JuanLopez2004/discord-goosebot",
	},
	{
	title: "Ryan's Parts Commerce Site",
	description: "Junior Year Software Eng Project built in ReactJS, NodeJs",
	imageSrc: "https://i.imgur.com/SvVdlsC.png",
	link: "https://github.com/JuanLopez2004/CSCI-467",
	},
	{
	title: "NIU ACM Website",
	description: "ACM Departmental Website Programmed with ReactJS, TypeScript. Serverside Development with NextJS with nixOS/Bun toolkit",
	imageSrc: "https://i.imgur.com/bscMhK0.png",
	link: "https://github.com/niu-acm/niu-acm-website",
	},
	{
	title: "2nd Portfolio Site",
	description: "This Very Site. Built with TypeScript, ReactJS, and NextJS",
	imageSrc: "https://images.pling.com/img/00/00/04/47/10/1114759/44869-1.jpg",
	link: "https://github.com/JuanLopez2004/Website2",
	},
	{
	title: "1st Portfolio Site",
	description: "My Original Website from 2023 to 2025, multiple versions all in HTML/CSS",
	imageSrc: "https://i.imgur.com/wEkKF4w.png",
	link: "https://github.com/JuanLopez2004/FirstPortfolio",
	website: "https://web.archive.org/web/20250620044839/https://juanlopezcs.com/"
	},
	{
	title: "Karaoke Site",
	description: "Sophomore Year Databases Project built in HTML/CSS/PHP. Themed after John Winans",
	imageSrc: "https://students.cs.niu.edu/~z1952526/winans.PNG",
	link: "https://github.com/JuanLopez2004/466Project",
	website: "https://students.cs.niu.edu/~z1952526/homepage.php"
	},
	{
	title: "Grocery App List with Database",
	description: "Developed for CSCI 322 Android. Programmed in Java. Database with SQlite. Themed after the Nostalgia Critic",
	imageSrc: "https://i.imgur.com/hiP4l5T.png",
	link: "https://github.com/JuanLopez2004/GroceryAppList",
	},
	{
	title: "American Football App",
	description: "Android App whose Sole Purpose is to play 1999's midwest emo classic 'never meant'",
	imageSrc: "https://i.imgur.com/8Ecn1TF.png",
	link: "https://github.com/JuanLopez2004/AmericanFootballApp",
	},
	{
	title: "NIU QB Handbook Wiki App",
	description: "Fun little exercise. Programmed in Java on Android Studio ",
	imageSrc: "https://i.imgur.com/GZuSR2Z.jpeg",
	link: "https://github.com/JuanLopez2004/NIUQBhandbook",
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