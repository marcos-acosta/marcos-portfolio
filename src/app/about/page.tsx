import React from "react";
import styles from "./AboutMe.module.css";
import globalStyles from "../../global.module.css";
import DrummingImage from "/public/images/drumming.jpg";
import Image from "next/image";

const ABOUT_ME_IMAGE_STYLE = {
  height: "70vh",
  width: "auto",
  borderRadius: "1vw",
};

const MUDD_URL =
  "https://www.google.com/maps/place/Harvey+Mudd+College/@34.1060906,-117.711218,17z/data=!3m1!4b1!4m6!3m5!1s0x80c331b99201d84f:0x24fab94d0a391365!8m2!3d34.1060906!4d-117.7086431!16zL20vMDNsY3Y?entry=ttu";
const RESUME_URL =
  "https://docs.google.com/document/d/1_9WK_V2MZsDRiUeYojiAqk3xPaMgX_q9IFnQQc2sWqM/edit?usp=sharing";

export default function AboutMe() {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.verticalAligner}>
        <div className={styles.aboutMeContent}>
          <Image
            style={ABOUT_ME_IMAGE_STYLE}
            src={DrummingImage}
            alt="a picture of me drumming"
            fill={false}
          />
          <div className={styles.aboutMeText}>
            <div className={styles.aboutMeTitle}>About me</div>
            <div className={styles.resumeText}>
              (If you're just looking for a resume,{" "}
              <a
                className={globalStyles.link}
                target="_blank"
                href={RESUME_URL}
              >
                here's one
              </a>
              )
            </div>
            <div className={styles.aboutMeParagraphs}>
              <p>
                My name is Marcos, and my favorite hobbies (in no particular
                order) are programming, playing music, playing games with
                friends, programming games, and scheming. I went to college at{" "}
                <a
                  className={globalStyles.link}
                  target="_blank"
                  href={MUDD_URL}
                >
                  Harvey Mudd College
                </a>
                , where I got my B.S. in Computer Science. Other notable things
                that happened at Mudd include{" "}
                <a className={globalStyles.link} target="_blank">
                  teaching machine learning
                </a>
                , forming a{" "}
                <a className={globalStyles.link} target="_blank">
                  kick-ass band
                </a>
                , and becoming the first class president in college history to
                be{" "}
                <a className={globalStyles.link} target="_blank">
                  impeached
                </a>
                .
              </p>
              <p>
                Right now, I'm based in New York City, working as a Software
                Engineer at{" "}
                <a
                  href="https://duckduckgo.com/"
                  className={globalStyles.link}
                  target="_blank"
                >
                  Google
                </a>{" "}
                applying machine learning to deliver app recommendations on the
                Play Store. And, of course, playing music.
              </p>
              <p>
                Feel free to email me at{" "}
                <a
                  href="mailto:h.marcos.acosta@gmail.com"
                  className={globalStyles.link}
                >
                  h.marcos.acosta@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
