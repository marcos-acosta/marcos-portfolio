import React from "react";
import { PageData, PortfolioPage } from "../page";
import NavbarElement from "./NavbarElement";

interface NavbarProps {
  pages: PageData[];
  selectedPage: PortfolioPage;
}

export default function Navbar(props: NavbarProps) {
  return props.pages.map((pageData) => (
    <NavbarElement
      isSelected={props.selectedPage === pageData.page}
      keyHook={pageData.key}
      title={pageData.page.toString()}
      callback={pageData.callback}
      key={pageData.page.toString()}
    />
  ));
}
