import { combineClassNames } from "@/util";
import styles from "./NavbarElement.module.css";
import globalStyles from "../global.module.css";
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
          props.isSelected && styles.selected
        )}
      >
        {props.keyHook}
      </div>
      <button onClick={props.callback} className={globalStyles.noStyleButton}>
        <div
          className={combineClassNames(
            styles.navbarTitle,
            props.isSelected && styles.selected
          )}
        >
          {props.title}
        </div>
      </button>
    </div>
  );
}
