import React from "react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.centerer}>
        <div className={styles.nameAndImageContainer}>
          <img
            src="/images/muddkart.jpg"
            alt="a picture of me"
            className={styles.selfImage}
          />
          <div className={styles.nameContainer}>marcos acosta</div>
        </div>
      </div>
    </div>
  );
}
