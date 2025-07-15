import Header from '@/components/header';
import Footer from '@/components/footer';
import Background from '@/components/background';
import Blog from '@/components/blog';

export default function Home() {
  return (
    <div className="container">
      <Background />
      <Header />

      <main>
        <Blog
          title="NIU Linux Users Group"
          desc="7/14/2025"
          image1="https://web.archive.org/web/20050305132752im_/http://niulug.org/images/logo.jpg"
          body1={[
            "The NIU Linux Users group was a linux club that was active in the mid 2000s at NIU",
            "They created their own website and had weekly meetings in coffee shops. Sometimes being Java Coffee and The House Cafe.",
            "They would have meetings where they would give out Linux ISOs on burnt RW CDs. A cool organization that once was."
          ]}
          link1="https://web.archive.org/web/20050305132752/http://niulug.org/"
          link1Label="linux users group wayback"
        />
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        main {
          flex: 1;
          max-width: 900px;
          margin: 0 auto;
          padding: 100px 1rem 2rem; /* top padding for header offset */
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        img {
          max-width: 100%;
          height: auto;
          display: block;
          border-radius: 6px;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          main {
            padding: 80px 0.75rem 1.5rem;
          }
        }
        @media (max-width: 480px) {
          main {
            padding: 70px 0.5rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}
