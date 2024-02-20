import { combineClassNames } from "@/util";
import styles from "./NavbarElement.module.css";
import globalStyles from "../global.module.css";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageMenuData, PortfolioPage } from "./Navbar";

const removeLeadingSlash = (url: string) =>
  url.indexOf("/") >= 0 ? url.substring(url.indexOf("/") + 1) : url;

export default function NavbarElement(props: PageMenuData) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isSelected =
    (isHomePage && props.pageHref === PortfolioPage.HOME.toString()) ||
    props.pageHref === removeLeadingSlash(pathname);

  return (
    <div className={styles.navbarElementContainer}>
      <div
        className={combineClassNames(
          styles.navbarKeyDisplay,
          isSelected && styles.selected
        )}
      >
        {props.keyhook}
      </div>
      <Link href={props.pageHref} className={globalStyles.noStyleLink}>
        <div
          className={combineClassNames(
            styles.navbarTitle,
            isSelected && styles.selected
          )}
        >
          {props.pageName}
        </div>
      </Link>
    </div>
  );
}
