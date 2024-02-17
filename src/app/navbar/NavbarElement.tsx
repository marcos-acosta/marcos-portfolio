import { combineClassNames } from "@/util";
import styles from "./NavbarElement.module.css";
import React from "react";

interface NavbarElementProps {
  isSelected: boolean;
  keyHook: string;
  title: string;
  callback: () => void;
}

export default function NavbarElement(props: NavbarElementProps) {
  return (
    <div className={styles.navbarElementContainer}>
      <div
        className={combineClassNames(
          styles.navbarKeyDisplay,
          props.isSelected && styles.selectedKey
        )}
      >
        {props.keyHook}
      </div>
      <button onClick={props.callback} className={styles.noStyleButton}>
        <div
          className={combineClassNames(
            styles.navbarTitle,
            props.isSelected && styles.selectedTitle
          )}
        >
          {props.title}
        </div>
      </button>
    </div>
  );
}
