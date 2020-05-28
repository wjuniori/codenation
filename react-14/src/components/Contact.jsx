import React from "react";
import "./Contact.scss";
import { formatDate } from "../utils";

class Contact extends React.Component {
  render() {
    return (
      <article data-testid="contact" className="contact">
        <span className="contact__avatar">
          <img src={this.props.data.avatar} alt={this.props.data.name} />
        </span>
        <span data-testid="contact-name" className="contact__data">
          {this.props.data.name}
        </span>
        <span data-testid="contact-phone" className="contact__data">
          {this.props.data.phone}
        </span>
        <span data-testid="contact-country" className="contact__data">
          {this.props.data.country}
        </span>
        <span data-testid="contact-date" className="contact__data">
          {this.props.data.id === "-1"
            ? this.props.data.admissionDate
            : formatDate(this.props.data.admissionDate)}
        </span>
        <span data-testid="contact-company" className="contact__data">
          {this.props.data.company}
        </span>
        <span data-testid="contact-department" className="contact__data">
          {this.props.data.department}
        </span>
      </article>
    );
  }
}

export default Contact;
