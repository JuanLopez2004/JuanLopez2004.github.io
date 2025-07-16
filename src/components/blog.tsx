"use client";
import React, { useState } from "react";

type BlogPostProps = {
  title: string;
  desc: string;
  image1?: string;
  image2?: string;
  image3?: string;
  body1: string | string[];
  body2?: string | string[];
  body3?: string | string[];
  body1Title?: string;
  body2Title?: string;
  body3Title?: string;
  link1?: string;
  link2?: string;
  link3?: string;
  link1Label?: string;
  link2Label?: string;
  link3Label?: string;
};

export default function BlogPostContainer({title, desc, image1, image2, image3, body1, body2, body3, body1Title, body2Title, body3Title, link1, link2, link3, link1Label, link2Label, link3Label, }: BlogPostProps) {
  const [image1Error, setImage1Error] = useState(false);
  const [image2Error, setImage2Error] = useState(false);
  const [image3Error, setImage3Error] = useState(false);

  const renderBody = (
    body: string | string[] | undefined,
    bodyTitle?: string
  ) => {
    if (!body) return null;
    return (
      <>
        {bodyTitle && <h3 className="blog-body-title">{bodyTitle}</h3>}
        {Array.isArray(body)
          ? body.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
          : <p>{body}</p>}
      </>
    );
  };

  return (
    <>
      <style>{`
        .blog-container {
			background: #fff;
			border-radius: 12px;
			box-shadow: 0 4px 12px rgba(0,0,0,0.1);
			max-width: 1100px;
			width: 1000px;
			margin: 2rem auto;
			padding: 2rem;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			z-index: 1;
        }

        .blog-title {
			font-size: 1.5rem;
			font-weight: bold;
        }

        .blog-desc {
			font-size: 1rem;
			font-family: Arial, Helvetica, sans-serif;
        }

        .blog-section {
			display: flex;
			align-items: flex-start;
			gap: 1rem;
			font-size: 1.2rem;
			font-family: Arial, Helvetica, sans-serif;
			flex-wrap: wrap;
        }

        .blog-section img {
			max-width: 260px;
			height: 215px;
			flex-shrink: 0;
        }

        .blog-body {
			flex: 1;
			min-width: 300px;
			padding: 0;
			margin: 0;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
        }

        .blog-body p {
          	margin-bottom: 0.1rem;
        }

        .blog-body p:first-of-type {
        	margin-top: 0;
        }

        .blog-body-title {
			font-size: 1.2rem;
			font-weight: 600;
			margin-bottom: 0.3rem;
			margin-top: 0;
        }

        .blog-links {
        	gap: 1rem;
          	display: flex;
          	align-items: flex-start;
        }

            @media (max-width: 700px) {
          .blog-container {
            width: 100%;
            max-width: 100vw;
            padding: 1rem;
          }
          .blog-section {
            flex-direction: column;
            align-items: stretch;
            gap: 0.5rem;
            font-size: 1rem;
          }
          .blog-section img {
            max-width: 100%;
            height: auto;
            margin-bottom: 0.5rem;
          }
          .blog-body {
            min-width: 0;
          }
          .blog-title {
            font-size: 1.1rem;
          }
          .blog-desc {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <div className="blog-container">
        <div className="blog-title">{title}</div>
        <div className="blog-desc">{desc}</div>

        <div className="blog-section">
          {!image1Error && image1 && (
            <img
              src={image1}
              alt="Blog Image 1"
              onError={() => setImage1Error(true)}
            />
          )}
          <div className="blog-body">{renderBody(body1, body1Title)}</div>
        </div>

        {body2 && (
          <div className="blog-section">
            {!image2Error && image2 && (
              <img
                src={image2}
                alt="Blog Image 2"
                onError={() => setImage2Error(true)}
              />
            )}
            <div className="blog-body">{renderBody(body2, body2Title)}</div>
          </div>
        )}

        {body3 && (
          <div className="blog-section">
            {!image3Error && image3 && (
              <img
                src={image3}
                alt="Blog Image 3"
                onError={() => setImage3Error(true)}
              />
            )}
            <div className="blog-body">{renderBody(body3, body3Title)}</div>
          </div>
        )}

        <div className="blog-links">
          {link1 && <a href={link1}>{link1Label || "Link 1"}</a>}
          {link2 && <a href={link2}>{link2Label || "Link 2"}</a>}
          {link3 && <a href={link3}>{link3Label || "Link 3"}</a>}
        </div>
      </div>
    </>
  );
}