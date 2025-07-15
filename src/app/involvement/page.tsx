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
				title="Involvement"
				content="I have been very involved with the Computer Science community at NIU since 2023 when I first Joined the NIU Association for Computing Machinery as a member"
				content2="In 2024, I took over Chair duties for ACM in 2024, I inherited an ACM with no structure, and no funding."
				content3="ACM houses two SIGs, SIGmainframe and SIGwebdev. Which meet every week in a 9 week period to host workshops. ACM hosts four Socials, 3 Speakers, and collaborates with the Computer Science Alumni Council"
				content4="We have over 25 Events planned for Fall 2025"
				imageSrc="https://media.licdn.com/dms/image/v2/D5622AQHSGkedllEwnw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1726701744586?e=1755129600&v=beta&t=ceJ7KfFeBRpUjcgNWC7EgVp5qrp5uF8ZVE3b29ylv30"
				altText="Tux"
				whiteBg={true}
			/>
			</section>

            <Blog
				title="My Contributions to ACM"
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
                    image1="https://media.licdn.com/dms/image/v2/D5622AQE0D5fTiL-KMg/feedshare-shrink_800/B56ZW1n1CuGQAk-/0/1742508880901?e=1755129600&v=beta&t=rPC8i4Ph5gDVCiWOVk8kJbQG8GXYkt2INtbyRGOPcUk"
                    image2="https://media.licdn.com/dms/image/v2/D5622AQHTXFkxkZoaBw/feedshare-shrink_800/B56ZW1n1DIHEAk-/0/1742508880892?e=1755129600&v=beta&t=ZGr3A60rYfe4ZqG1OJpVNbF1L5kzFjbqXObjg_b7fCs"
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
                    image1="https://media.licdn.com/dms/image/v2/D5622AQHN07jqkvmsag/feedshare-shrink_2048_1536/B56ZVuO7mFGUAs-/0/1741311169569?e=1755129600&v=beta&t=KB1kmZr_aTeME-U5uwofSNhOD70E5K9sD-_DiUQERuY"
                    image2="https://media.licdn.com/dms/image/v2/D5622AQEwJxEIlXZwhQ/feedshare-shrink_2048_1536/B56ZVuO7mCGUAo-/0/1741311172592?e=1755129600&v=beta&t=zUKoUey1t-ji1t8mY64-d8_HNoi7JE-NKOEP8Kkve-8"
					body1Title="Presentation"
					body1={[
						"NIU Alum, BS 2004, Juan Arreola came to campus to discuss his career journey.", 
						"Juan spoke about his time at NIU, his first employer, the roadblocks he faced in the industry and his current position as a business intelligence architect",
					]}
					body2Title="Aftermath"
                    body2={[
						"ACM had been going through a rough patch at this time, it felt very disorganized and filling out forms for events was exhuasting, confusing, and difficult.",
						"Pizza and Pop was provided with the funding of the Department of Computer Science. 17 Students attended.",
						"The Process to reserve the room, order Pizza and Pop, and with the help of the new Vice-Chair, Douglas Johnson, was overall much easier. ",
						"40 Students attended.",
					]}
					/>

				<Blog
                	title="NIU Alumni Panel"
                    desc="October, 2024"
                    image1="https://media.licdn.com/dms/image/v2/D5622AQHSGkedllEwnw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1726701744586?e=1755129600&v=beta&t=ceJ7KfFeBRpUjcgNWC7EgVp5qrp5uF8ZVE3b29ylv30"
                    image2="https://media.licdn.com/dms/image/v2/D5622AQGKep-rYkc-lg/feedshare-shrink_1280/feedshare-shrink_1280/0/1726701752472?e=1755129600&v=beta&t=CGCjkyjzURx1SDRPAen47ITbTND1flQqjsxqDZRdZQw"
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
