import React from "react";
import Container from "./Container";
import Contact from "./Contact";
import "./Contacts.scss";

class Contacts extends React.Component {
  render() {
    const mockUserData = {
      id: "-1",
      avatar: "",
      name: "Nome",
      phone: "Telefone",
      country: "País",
      admissionDate: "Admissão",
      company: "Empresa",
      department: "Departamento",
    };
    const { contacts } = this.props;
    contacts.splice(0, 0, mockUserData);

    return (
      <Container id="contacts">
        <section className="contacts">
          {contacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </section>
      </Container>
    );
  }
}

export default Contacts;
