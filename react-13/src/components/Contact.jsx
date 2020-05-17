import React from "react";
import "./Contact.scss";

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <article className="contact">
          <span className="contact__avatar" />
          <span className="contact__data">Nome</span>
          <span className="contact__data">Telefone</span>
          <span className="contact__data">País</span>
          <span className="contact__data">Admissão</span>
          <span className="contact__data">Empresa</span>
          <span className="contact__data">Departamento</span>
        </article>
        <article className="contact">
          <span className="contact__avatar">
            <img
              src="https://s3.amazonaws.com/uifaces/faces/twitter/shadeed9/128.jpg"
              alt="Daniela Terry"
            />
          </span>
          <span className="contact__data">Daniela Terry</span>
          <span className="contact__data">1-931-065-2122 x879</span>
          <span className="contact__data">Iceland</span>
          <span className="contact__data">08/04/2019</span>
          <span className="contact__data">Rohan - Pagac</span>
          <span className="contact__data">Clothing</span>
        </article>
      </React.Fragment>
    );
  }
}

export default Contact;
