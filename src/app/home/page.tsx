import React from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import MuddkartImage from "/public/images/muddkart.jpg";

const SELF_IMAGE_STYLE = {
  width: "18vw",
  height: "18vw",
  borderRadius: "0.8vw",
};

export default function Home() {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.centerer}>
        <div className={styles.nameAndImageContainer}>
          <div className={styles.selfImage}>
            <Image
              src={MuddkartImage}
              alt="a picture of me"
              style={SELF_IMAGE_STYLE}
            />
          </div>
          <div className={styles.nameContainer}>marcos acosta</div>
        </div>
      </div>
    </div>
  );
}
