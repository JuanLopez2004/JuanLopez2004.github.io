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
			border-radius: clamp(8px, 2vw, 12px);
			box-shadow: 0 4px 12px rgba(0,0,0,0.1);
			max-width: min(1100px, 95vw);
			width: 100%;
			margin: clamp(1rem, 3vw, 2rem) auto;
			padding: clamp(1rem, 4vw, 2rem);
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			gap: clamp(1rem, 2.5vw, 1.5rem);
			z-index: 1;
        }

        .blog-title {
			font-size: clamp(1.25rem, 3.5vw, 1.5rem);
			font-weight: bold;
        }

        .blog-desc {
			font-size: clamp(0.9rem, 2.5vw, 1rem);
			font-family: Arial, Helvetica, sans-serif;
        }

        .blog-section {
			display: flex;
			align-items: flex-start;
			gap: clamp(0.5rem, 2vw, 1rem);
			font-size: clamp(1rem, 2.8vw, 1.2rem);
			font-family: Arial, Helvetica, sans-serif;
			flex-wrap: wrap;
        }

        .blog-section img {
			max-width: min(260px, 40vw);
			height: auto;
			aspect-ratio: 260/215;
			flex-shrink: 0;
			border-radius: 8px;
			object-fit: cover;
        }

        .blog-body {
			flex: 1;
			min-width: min(300px, 100%);
			padding: 0;
			margin: 0;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
        }

        .blog-body p {
          	margin-bottom: clamp(0.05rem, 0.5vw, 0.1rem);
        }

        .blog-body p:first-of-type {
        	margin-top: 0;
        }

        .blog-body-title {
			font-size: clamp(1.1rem, 2.8vw, 1.2rem);
			font-weight: 600;
			margin-bottom: clamp(0.2rem, 0.8vw, 0.3rem);
			margin-top: 0;
        }

        .blog-links {
        	gap: clamp(0.5rem, 2vw, 1rem);
          	display: flex;
          	align-items: flex-start;
          	flex-wrap: wrap;
        }

        .blog-links a {
          	padding: clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 2.5vw, 1.5rem);
          	background-color: #4856a3;
          	color: white;
          	text-decoration: none;
          	border-radius: 6px;
          	font-weight: 600;
          	font-size: clamp(0.9rem, 2.2vw, 1rem);
          	transition: all 0.3s ease;
        }

        .blog-links a:hover {
          	background-color: #3d4a8f;
          	transform: translateY(-2px);
        }

        /* Responsive breakpoints */
        @media (max-width: 768px) {
          .blog-container {
            margin: 1rem auto;
            padding: 1rem;
          }
          .blog-section {
            flex-direction: column;
            align-items: stretch;
            gap: 0.75rem;
          }
          .blog-section img {
            max-width: 100%;
            margin-bottom: 0.5rem;
          }
          .blog-body {
            min-width: 0;
          }
        }

        @media (max-width: 480px) {
          .blog-container {
            padding: 0.75rem;
            margin: 0.5rem auto;
          }
          .blog-section {
            gap: 0.5rem;
          }
          .blog-links {
            flex-direction: column;
            gap: 0.5rem;
          }
          .blog-links a {
            text-align: center;
            width: 100%;
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