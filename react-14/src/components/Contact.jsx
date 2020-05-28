import React from "react";
import "./Contact.scss";
import { formatDate } from "../utils";

class Contact extends React.Component {
  render() {
    return (
      <article data-testid="contact" className="contact">
        <span className="contact__avatar">
          <img src={this.props.contact.avatar} alt={this.props.contact.name} />
        </span>
        <span className="contact__data">{this.props.contact.name}</span>
        <span className="contact__data">{this.props.contact.phone}</span>
        <span className="contact__data">{this.props.contact.country}</span>
        <span className="contact__data">
          {this.props.contact.id === "-1"
            ? this.props.contact.admissionDate
            : formatDate(this.props.contact.admissionDate)}
        </span>
        <span className="contact__data">{this.props.contact.company}</span>
        <span className="contact__data">{this.props.contact.department}</span>
      </article>
    );
  }
}

export default Contact;
