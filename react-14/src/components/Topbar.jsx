import React from "react";
import { ReactComponent as LogoSvg } from "../assets/img/logo.svg";
import Container from "./Container";
import "./Topbar.scss";

class Topbar extends React.Component {
  render() {
    return (
      <header data-testid="topbar" className="topbar">
        <Container id="topbar__container">
          <a href="/" className="topbar__logo">
            <LogoSvg alt="Logo Instagram" />
          </a>
        </Container>
      </header>
    );
  }
}

export default Topbar;
