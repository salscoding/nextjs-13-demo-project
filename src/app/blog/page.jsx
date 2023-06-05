import React from "react";
import styles from "./blog.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/1" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/websites.jpg"
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>What is Lorem Ipsum?</h2>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </Link>
      <Link href="/blog/1" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/websites.jpg"
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>What is Lorem Ipsum?</h2>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </Link>
      <Link href="/blog/1" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/websites.jpg"
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>What is Lorem Ipsum?</h2>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </Link>
      <Link href="/blog/1" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/websites.jpg"
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>What is Lorem Ipsum?</h2>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </Link>
      <Link href="/blog/1" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/websites.jpg"
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>What is Lorem Ipsum?</h2>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
