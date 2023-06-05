import React from "react";
import styles from "./category.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h2 className={styles.title}>What is Lorem Ipsum?</h2>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/websites.jpg"
            width={600}
            height={400}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h2 className={styles.title}>What is Lorem Ipsum?</h2>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/websites.jpg"
            width={600}
            height={400}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h2 className={styles.title}>What is Lorem Ipsum?</h2>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/websites.jpg"
            width={600}
            height={400}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
