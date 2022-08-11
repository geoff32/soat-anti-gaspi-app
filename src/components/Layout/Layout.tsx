import React from "react";
import { Container } from "..";
import NavMenu from "./NavMenu";
import "./Layout.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="layout">
    <NavMenu />
    <Container className="layout-container">{children}</Container>
  </div>
);

export default Layout;
