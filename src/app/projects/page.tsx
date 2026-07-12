import Header from '@/components/header';
import Footer from '@/components/footer';
import Background from '@/components/background';
import Showcase, { Project } from '@/components/showcase';

//Project Section
const projects: Project[] = [
	{
	title: "NIU ACM Website",
	description: "ACM Departmental Website Programmed with ReactJS, TypeScript. Serverside Development with NextJS with nixOS/Bun toolkit",
	imageSrc: "https://github.com/user-attachments/assets/aae54359-7f88-400b-a9a9-77bbd42aba99",
	link: "https://github.com/niu-acm/niu-acm-website",
	website: "https://acm.cs.niu.edu/"
	},
	{
	title: 'GPT2010',
	description: 'Web 2.0 Era ChatGPT buddy. Built with HTML, JS, Node, and CSS for that 2000s. ',
	imageSrc: 'https://github.com/user-attachments/assets/2636d959-f2ea-4a08-b2c3-5f1e823fcee6',
	link: 'https://github.com/JuanLopez2004/gpt2010',
	},
	{
	title: "Portfolio Site",
	description: "This Very Site. Built with TypeScript, ReactJS, and NextJS",
	imageSrc: "https://github.com/user-attachments/assets/42066ff9-499a-4bab-8c61-76a5756cb390",
	link: "https://github.com/JuanLopez2004/Website2",
	website: "https://juanlopezcs.com/"
	},
	{
		title: 'Radishbeet.com',
		description: 'Where I get to be myself! Built with basic HTML/CSS for simplicity.',
		imageSrc: 'https://github.com/user-attachments/assets/d0f1bcee-235f-499b-9ccb-43dd3d5f4a6a',
		link: 'https://github.com/JuanLopez2004/radishbeet',
	},
	{
	title: "Android Themed HTML/CSS Website",
	description: "HTML/CSS Website built with an Android Theme",
	imageSrc: "https://github.com/user-attachments/assets/8e947683-4f46-49c8-81a9-738d9b38279e",
	link: "https://github.com/JuanLopez2004/COMS359-Website",
	website: "https://juanlopezdemo.w3spaces.com/index.html"
	},
	{
	title: "Ryan's Parts Commerce Website",
	description: "Junior Year Software Eng Project built in ReactJS, NodeJs",
	imageSrc: "https://github.com/user-attachments/assets/4b65a6c7-25bd-4635-a01d-f0c82ad86d9d",
	link: "https://github.com/JuanLopez2004/CSCI-467",
	},
	{
	title: "goosefm Website",
	description: "Online Radio Station Website built in NextJS. Themed after DeKalb and Geese",
	imageSrc: "https://github.com/user-attachments/assets/63367ab2-da72-41b9-b97a-05e1b249d11c",
	link: "https://github.com/JuanLopez2004/goosefm",
	website: "https://goosefm.net/"
	},
	{
	title: "1st Personal Website",
	description: "My Original Website from 2023 to 2025, multiple versions all in HTML/CSS",
	imageSrc: "https://github.com/user-attachments/assets/394f237c-df98-431c-8540-9e76b505ec47",
	link: "https://github.com/JuanLopez2004/FirstPortfolio",
	website: "https://web.archive.org/web/20250620044839/https://juanlopezcs.com/"
	},
	{
	title: "Karaoke Site",
	description: "Sophomore Year Databases Project built in HTML/CSS/PHP. Themed after John Winans",
	imageSrc: "https://github.com/user-attachments/assets/b68587bf-42ab-47f1-ba44-4e189bedc164",
	link: "https://github.com/JuanLopez2004/466Project",
	website: "https://students.cs.niu.edu/~z1952526/homepage.php"
	},
	{
    title: "GooseBot",
	description: "General Discord Bot built with DiscordPY",
	imageSrc: "https://github.com/user-attachments/assets/d5e0ed99-b383-48fa-9284-2132bb02e9bc",
	link: "https://github.com/JuanLopez2004/discord-goosebot",
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
	imageSrc: "https://github.com/user-attachments/assets/5d09c75c-4096-48fc-8c2d-576b78e3dbe6",
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
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            width: '100%',
            maxWidth: '100vw',
            overflowX: 'hidden',
        }}>
            <Background />
            <Header />

            <main style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '80px',
            }}>
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