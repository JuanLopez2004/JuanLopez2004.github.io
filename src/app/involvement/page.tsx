import Header from '@/components/header';
import Footer from '@/components/footer';
import Background from '@/components/background';
import Blog from '@/components/blog';
import Hero from '@/components/hero';

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
				title="Involvement"
				content="I have been very involved with the Computer Science community at NIU since 2023 when I first Joined the NIU Association for Computing Machinery as a member"
				content2="In 2024, I took over Chair duties for ACM in 2024, I inherited an ACM with no structure, and no funding."
				content3="ACM houses two SIGs, SIGmainframe and SIGwebdev. Which meet every week in a 9 week period to host workshops. ACM hosts four Socials, 3 Speakers, and collaborates with the Computer Science Alumni Council"
				imageSrc="https://github.com/user-attachments/assets/a4bf10f4-6be5-4a4f-b420-ec1491b0c3db"
				altText="Tux"
				whiteBg={true}
			/>
			</section>

			<Blog
                title="StemFest 2025"
                desc="September 2025"
                image1="https://github.com/user-attachments/assets/ccf8ba70-c95b-4bb5-89d4-dad75da6842f"
                image2="https://github.com/user-attachments/assets/5a7446fd-a803-4708-82b1-fc5c18e7747a"
        		body1Title="Event"
				body1={[
					"NIU ACM hosted a booth during NIU Stemfest 2025", 
					"We showcased various projects, including a time reaction game, a live coding web demo, and a binary puzzle game",
					"Over 60 Students, Families, and Faculty were engaged and interested in computer science as a discipline.",
				]}
				body2Title="Exhibits"
                body2={[
					"ACM Member Brett Williams, showcased his DDS dice rolling game", 
					"Attendees were able to try out the game and the technology behind the arduino based device.",
				]}
           	/>

			<Blog
                title="IBMz Career Connection"
                desc="September 2025"
                image1="https://github.com/user-attachments/assets/214cb342-07f3-4b5f-97e5-9edcc6ebc150"
                image2="https://github.com/user-attachments/assets/43f65a9a-23ab-44b8-a26f-ce9e09b53972"
        		body1Title="Event"
				body1={[
					"NIU ACM participated in the IBMz Career Connection event hosted by IBM and NIU's Computer Science Department",
					"We had a booth where we talked to students about mainframe careers, IBM zSystems, and the resources available to them through IBM Academic Initiative",
				]}
				body2Title="Aftermath"
                body2={[
					"ACM had supported the event, signing in over 173 students",
					"Many students signed up for our mailing list and expressed interest in attending our upcoming events.",
				]}
           	/>

			<Blog
                title="ACM at the Involvement fair!"
                desc="September 2025"
                image1="https://github.com/user-attachments/assets/d854abb8-dd6e-4c0a-a50a-9d290776b868"
        		body1Title="ACM "
				body1={[
					"Doug and Jakobi running the involvement fair booth for ACM!",
					"We had a steady stream of interested students stop by to learn about ACM and what we do on campus.",
					"Many students signed up for our mailing list and expressed interest in attending our upcoming events.",
				]}
           	/>

            <Blog
				title="ACM Summer 2025"
				desc="Served as Treasurer, Chair, and SIGwebdev's Lead Officer through the years of 2023-2026"
				body1Title="Rebuilding ACM"
				body1={[
					"In my first semester as Chair, ACM did not go the best. We had multiple events fall apart due to the lack of documentation or mentoring the previous Chairs had left.",
					"In this semester, I had to create promotional materials, contact potential speakers, schedule them, reserve rooms, budget food and drink, advertise the event, and file work with the department.",
					"After this semester, I had created documentation on how to run ACM for future Chairs. I had created roles, expectations, calendars, planners, and a drive for collaboration."
				]}
				body2Title="Scaling Up"
				body2={[
					"I had created roles, expectations, calendars, planners, and a drive for collaboration.",
					"In the summer, I had grown the ACM board to 9 students.",
					"After splitting duties, I currently am responsible for communicating with our Advisor, scheduling speakers, workshopping social events, reserving venues for social spaces, creating SIGwebdev schedules, coordinating SIGwebdev officers, creating a budget, and expanding ACM."
				]}
				body3Title="Vision for the Future"
				body3={[
					"My vision for ACM is to create a space where students can participate in events that are both engaging and educational.",
					"I want to offer opportunities for students to explore modern frameworks not covered in the NIU curriculum, discover their place in the tech industry, and leave SIG meetings with tangible portfolio projects.", 
					"I also want ACM to be a welcoming environment for students, a place where they can form friendships and build a professional network.",
					"Many NIU students come from disadvantaged backgrounds, and by supporting them, we contribute to a more inclusive and equitable tech community."
				]}
				/>

				<Blog
                	title="ACM Speaker: JJ Frega"
                    desc="March 20th, 2025"
                    image1="https://github.com/user-attachments/assets/e725e215-6183-43af-a93b-ee3a5f28b8f0"
                    image2="https://github.com/user-attachments/assets/d375d3fb-b78b-4f5f-b476-b167aa052cce"
        			body1Title="Presentation"
					body1={[
						"NIU Alum, BS 2006, JJ Frega of J2amIT Consultants came to discuss Appian", 
						"Appian is a low-code software development platform designed to help organizations build and automate business processes and applications. It combines process mining, workflow automation, and robotic process automation (RPA) capabilities into a unified platform.",
						"JJ also gave a short presentation on Mainframe history, COBOL, and his experience as an 11 year COBOL programmer",
					]}
					body2Title="Aftermath"
                    body2={[
						"This ACM presentation was a success.", 
						"The Process to reserve the room, order Pizza and Pop, and with the help of the new Vice-Chair, Douglas Johnson, was overall much easier. ",
						"40 Students attended.",
					]}
           		/>
				
				<Blog
                	title="ACM Speaker: Juan Arreola"
                    desc="March 6th, 2025"
                    image1="https://github.com/user-attachments/assets/f78c6124-3642-4162-8b7a-db2b908ef25d"
                    image2="https://github.com/user-attachments/assets/fd161d8b-3ef0-43f3-afae-4667edc7c1d0"
					body1Title="Presentation"
					body1={[
						"NIU Alum, BS 2004, Juan Arreola came to campus to discuss his career journey.", 
						"Juan spoke about his time at NIU, his first employer, the roadblocks he faced in the industry and his current position as a business intelligence architect",
					]}
					body2Title="Aftermath"
                    body2={[
						"ACM had been going through a rough patch at this time, it felt very disorganized and filling out forms for events was exhuasting, confusing, and difficult.",
						"Pizza and Pop was provided with the funding of the Department of Computer Science. 17 Students attended.",
					]}
					/>

				<Blog
                	title="NIU Alumni Panel"
                    desc="October, 2024"
                    image1="https://github.com/user-attachments/assets/bce08dbf-8860-46d0-8aa6-5a7153e9467d"
                    image2="https://github.com/user-attachments/assets/e1e7b153-9978-4d37-b6be-66c5211c49ac"
                   	body1Title="Presentation"
					body1={[
						"More than 150 students came out to learn about mainframe careers. There was the panel discussion by recent NIU alumni and current students who are working in the mainframe industry.", 
						"ACM volunteered to sign in students",
					]}
					body2Title="Discussion Panel"
                    body2="Former longtime ACM Advisor, NIU Mainframe instructor, and IBM champion Geoffrey Decker introduces the Alum Panel"
           		/>
      </main>
      <Footer />
    </div>
  );
}
