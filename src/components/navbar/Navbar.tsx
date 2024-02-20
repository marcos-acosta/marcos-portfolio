"use client";

import React, { useState } from "react";
import NavbarElement from "./NavbarElement";
import styles from "./Navbar.module.css";
import useKeyboardControl, { KeyboardHook } from "react-keyboard-control";
import { useRouter } from "next/navigation";

export enum PortfolioPage {
  HOME = "home",
  ABOUT_ME = "about",
  CODING = "coding",
  MUSIC = "music",
  PICTURES = "pictures",
  WRITING = "writing",
}

export interface PageMenuData {
  pageName: string;
  pageHref: string;
  keyhook: string;
  callback: () => void;
}

export default function Navbar() {
  const router = useRouter();

  const PAGES: PageMenuData[] = [
    {
      pageName: "home",
      pageHref: PortfolioPage.HOME,
      keyhook: "h",
      callback: () => router.push(`/${PortfolioPage.HOME}`),
    },
    {
      pageName: "about me",
      pageHref: PortfolioPage.ABOUT_ME,
      keyhook: "a",
      callback: () => router.push(`/${PortfolioPage.ABOUT_ME}`),
    },
    {
      pageName: "coding",
      pageHref: PortfolioPage.CODING,
      keyhook: "c",
      callback: () => router.push(`/${PortfolioPage.CODING}`),
    },
    {
      pageName: "music",
      pageHref: PortfolioPage.MUSIC,
      keyhook: "m",
      callback: () => router.push(`/${PortfolioPage.MUSIC}`),
    },
    {
      pageName: "pictures",
      pageHref: PortfolioPage.PICTURES,
      keyhook: "p",
      callback: () => router.push(`/${PortfolioPage.PICTURES}`),
    },
    {
      pageName: "writing",
      pageHref: PortfolioPage.WRITING,
      keyhook: "w",
      callback: () => router.push(`/${PortfolioPage.WRITING}`),
    },
  ];

  const keyboardHooks: KeyboardHook[] = PAGES.map((pageData) => ({
    keyboardEvent: { key: pageData.keyhook },
    callback: pageData.callback,
  }));
  useKeyboardControl(keyboardHooks);

  return (
    <div className={styles.navbarContainer}>
      <div>
        {PAGES.map((page) => (
          <div className={styles.navbarElementContainer} key={page.pageName}>
            <NavbarElement {...page} />
          </div>
        ))}
      </div>
    </div>
  );
}
