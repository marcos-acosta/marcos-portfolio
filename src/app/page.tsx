"use client";

import { useState } from "react";
import useKeyboardControl, { KeyboardHook } from "react-keyboard-control";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Navbar from "./navbar/Navbar";

export enum PortfolioPage {
  HOME = "home",
  ABOUT_ME = "about me",
  CODING = "coding",
  MUSIC = "music",
  PICTURES = "pictures",
  WRITING = "writing",
}

export interface PageData {
  page: PortfolioPage;
  key: string;
  component: JSX.Element;
  callback: () => void;
}

const MAIN_WINDOW_COMPONENT_MAP: { [key: string]: JSX.Element } = {
  [PortfolioPage.HOME.toString()]: <Home />,
  [PortfolioPage.ABOUT_ME.toString()]: <AboutMe />,
};

export default function Controller() {
  const [portfolioPage, setPortfolioPage] = useState(PortfolioPage.HOME);

  const PAGE_DATA: PageData[] = [
    {
      page: PortfolioPage.HOME,
      key: "h",
      component: <Home />,
      callback: () => setPortfolioPage(PortfolioPage.HOME),
    },
    {
      page: PortfolioPage.ABOUT_ME,
      key: "a",
      component: <AboutMe />,
      callback: () => setPortfolioPage(PortfolioPage.ABOUT_ME),
    },
  ];

  const keyboardHooks: KeyboardHook[] = PAGE_DATA.map((pageData) => ({
    keyboardEvent: { key: pageData.key },
    callback: pageData.callback,
  }));
  useKeyboardControl(keyboardHooks);

  return (
    <div>
      <Navbar pages={PAGE_DATA} selectedPage={portfolioPage} />
      {MAIN_WINDOW_COMPONENT_MAP[portfolioPage.toString()]}
    </div>
  );
}
