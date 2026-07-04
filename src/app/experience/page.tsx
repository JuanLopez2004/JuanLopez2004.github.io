import Header from '@/components/header';
import Footer from '@/components/footer';
import Background from '@/components/background';
import Blog from '@/components/blog';

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
          paddingTop: '80px',
        }}
      >
      
	    <Blog
        title="NIU Linux Users Group"
        desc="7/14/2025"
        image1="https://github.com/user-attachments/assets/7c04836c-301b-4cc4-8292-0ccd8acf30ed"
        body1={[
            "The NIU Linux Users group was a linux club that was active in the mid 2000s at NIU",
            "They created their own website and had weekly meetings in coffee shops. Sometimes being Java Coffee and THe House Cafe.",
            "They would have meetings where they would give out Linux ISOs on burnt RW CDs. A cool organization that once was."
        ]}
        link1='https://web.archive.org/web/20050305132752/http://niulug.org/'
        link1Label='linux users group wayback '
        />
        

      
      </main>

      <Footer />
    </div>
  );
}
