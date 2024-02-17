import React from "react";
import { PageData, PortfolioPage } from "../page";
import NavbarElement from "./NavbarElement";
import styles from "./Navbar.module.css";

interface NavbarProps {
  pages: PageData[];
  selectedPage: PortfolioPage;
}

export default function Navbar(props: NavbarProps) {
  return (
    <div className={styles.navbarContainer}>
      <div>
        {props.pages.map((pageData) => (
          <div
            className={styles.navbarElementContainer}
            key={pageData.page.toString()}
          >
            <NavbarElement
              isSelected={props.selectedPage === pageData.page}
              keyHook={pageData.key}
              title={pageData.page.toString()}
              callback={pageData.callback}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
