import Header from '@/components/header';
import Footer from '@/components/footer';
import Background from '@/components/background';
import Section from '@/components/section';

export default function Experience() {
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
          paddingTop: '80px',
        }}
      >

      {/* Education */}
      <div id="Education">
        <section style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0', margin: '0' }}>
          <Section
            title="Education"
            content="B.S. Computer Science | Northern Illinois University, DeKalb, IL | May 2026 | Focus: Software Development | GPA 3.5 Cumulative, Graduated Magna Cum Laude"
            content2="M.S. Information Management | University of Illinois Urbana-Champaign | Expected May 2028 | Focus: Human-Centered Systems Design & Development"
            content3=""
            whiteBg={false}
            imageSrc="https://github.com/user-attachments/assets/94fe4818-5526-4e57-ab61-732b70829a12"
          />
        </section>
      </div>

      {/* Technical Skills */}
      <div id="Skills">
        <section style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0', margin: '0' }}>
          <Section
            title="Technical Skills"
            content="Languages & Frameworks: ReactJS, TypeScript, HTML, CSS, SQL, NodeJS, C++, C#"
            content2="Platforms & Tools: Next.js, ASP.NET Core, .NET 8, GitHub, GitLab, VSCode, Visual Studio, Azure DevOps, Jira, Freshservice ITSM"
            content3="Other: Computer Repair, Computer Imaging, Software & Wi-Fi Troubleshooting, Agile, Communication"
            whiteBg={true}
                        reverse={true}

            imageSrc="https://github.com/user-attachments/assets/4c03b2cd-af20-4bfc-84c7-9577315b257f"
          />
        </section>
      </div>

      {/* ResTech Help Desk */}
      <div id="ResTech Help Desk Technician">
        <section style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0', margin: '0' }}>
          <Section
            title="ResTech Help Desk Technician"
            content="Northern Illinois University, DeKalb, IL | June 2025 – June 2026 | Part-time"
            content2="Provided IT support to 3,000+ students and staff across residence halls and the Student Center. Resolved hardware/software issues, configured devices for secure network access, and maintained enterprise applications through ITSM ticketing. Collaborated with a team of technicians to ensure reliable computing resources and effective troubleshooting."
            altText="restech"
            whiteBg={false}
            reverse={true}
          />
        </section>
      </div>

      {/* Software Engineering Intern */}
      <div id="Software Engineering Intern">
        <section style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0', margin: '0' }}>
          <Section
            title="Software Engineering Intern"
            content="Illinois Housing Development Authority (IHDA), Chicago, IL | June 2026 – August 2026 | Full-time, Hybrid"
            content2="Maintained and enhanced production ASP.NET Core (.NET 8) applications. Implemented bug fixes, wrote unit tests, and resolved production issues. Implemented error logging and exception handling to improve monitoring. Collaborated with developers using Azure DevOps, Jira, and Visual Studio for work management, code reviews, and sprint planning."
            altText="ihda"
            whiteBg={true}
          />
        </section>
      </div>

      </main>

      <Footer />
    </div>
  );
}
