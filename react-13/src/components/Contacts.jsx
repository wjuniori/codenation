import React from "react";
import Container from "./Container";
import Contact from "./Contact";
import "./Contacts.scss";

class Contacts extends React.Component {
  render() {
    const mockUserData = {
      avatar: "",
      name: "",
      phone: "",
      country: "",
      admissionDate: "",
      company: "",
      department: "",
    };

    return (
      <Container id="contacts">
        <section className="contacts">
          <Contact data={mockUserData} />
        </section>
      </Container>
    );
  }
}

export default Contacts;
