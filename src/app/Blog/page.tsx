import Header from '@/components/header';
import Footer from '@/components/footer';
import Background from '@/components/background';
import Blog from '@/components/blog';

/**
  <Blog
            title="Blog Post 1"
            desc="12/04/2003"
            image1="https://i.imgur.com/XPv0jQR.jpeg"
            image2="https://i.imgur.com/XPv0jQR.jpeg"
            image3="https://i.imgur.com/XPv0jQR.jpeg"
            body1="It started with a foggy morning drive..."
            body2="We hiked through breathtaking trails..."
            body3="The sunset from the peak was unforgettable."
            link1="https://example.com/photo-gallery"
            link2="https://example.com/blog-full"
            link3="https://example.com/map"
			link1Label='Hello'
		/>
 */
export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '40px',
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
          paddingTop: '100px', 
        }}
      >
      
	    <Blog
        title="NIU Linux Users Group"
        desc="7/14/2025"
        image1="https://web.archive.org/web/20050305132752im_/http://niulug.org/images/logo.jpg"
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
