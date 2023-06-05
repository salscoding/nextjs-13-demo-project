"use client";

import React, { useContext } from "react";
import styles from "./DarkMoodToggle.module.css";
import { ThemeContext } from "../../../context/ThemeContext";

const DarkMoodToggle = () => {
  const { toggleTheme, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggleTheme}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkMoodToggle;
