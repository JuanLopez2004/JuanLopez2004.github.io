"use client";
import React, { useState } from "react";
import styles from '../styles/Blog.module.css';

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
        {bodyTitle && <h3 className={styles.blogBodyTitle}>{bodyTitle}</h3>}
        {Array.isArray(body)
          ? body.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
          : <p>{body}</p>}
      </>
    );
  };

  return (
    <>

      <div className={styles.blogContainer}>
        <div className={styles.blogTitle}>{title}</div>
        <div className={styles.blogDesc}>{desc}</div>

        <div className={styles.blogSection}>
          {!image1Error && image1 && (
            <img
              src={image1}
              alt="Blog Image 1"
              onError={() => setImage1Error(true)}
            />
          )}
          <div className={styles.blogBody}>{renderBody(body1, body1Title)}</div>
        </div>

        {body2 && (
          <div className={styles.blogSection}>
            {!image2Error && image2 && (
              <img
                src={image2}
                alt="Blog Image 2"
                onError={() => setImage2Error(true)}
              />
            )}
            <div className={styles.blogBody}>{renderBody(body2, body2Title)}</div>
          </div>
        )}

        {body3 && (
          <div className={styles.blogSection}>
            {!image3Error && image3 && (
              <img
                src={image3}
                alt="Blog Image 3"
                onError={() => setImage3Error(true)}
              />
            )}
            <div className={styles.blogBody}>{renderBody(body3, body3Title)}</div>
          </div>
        )}

        <div className={styles.blogLinks}>
          {link1 && <a href={link1}>{link1Label || "Link 1"}</a>}
          {link2 && <a href={link2}>{link2Label || "Link 2"}</a>}
          {link3 && <a href={link3}>{link3Label || "Link 3"}</a>}
        </div>
      </div>
    </>
  );
}