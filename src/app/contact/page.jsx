import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" fill={true} alt="" className={styles.img} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <textarea
            placeholder="Message"
            cols="30"
            rows="10"
            className={styles.textarea}
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
