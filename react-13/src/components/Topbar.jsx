import React from "react";
import { ReactComponent as LogoSvg } from "../assets/img/logo.svg";
import Container from "./Container";
import "./Topbar.scss";

class Topbar extends React.Component {
  render() {
    return (
      <header className="topbar">
        <Container>
          <a href="/" className="topbar__logo">
            <LogoSvg alt="Logo Instagram" />
          </a>
        </Container>
      </header>
    );
  }
}

export default Topbar;
