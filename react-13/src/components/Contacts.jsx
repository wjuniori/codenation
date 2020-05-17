import React from "react";
import Contact from "./Contact";
import "./Contacts.scss";

class Contacts extends React.Component {
  render() {
    return (
      <section className="contacts">
        <Contact />
      </section>
    );
  }
}

export default Contacts;
