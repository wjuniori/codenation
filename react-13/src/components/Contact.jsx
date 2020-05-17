import React from "react";
import "./Contact.scss";

class Contact extends React.Component {
  render() {
    return (
      <article data-testid="contact" className="contact">
        <span className="contact__avatar">
          <img src={this.props.data.avatar} alt={this.props.data.name} />
        </span>
        <span className="contact__data">{this.props.data.name}</span>
        <span className="contact__data">{this.props.data.phone}</span>
        <span className="contact__data">{this.props.data.country}</span>
        <span className="contact__data">{this.props.data.admissionDate}</span>
        <span className="contact__data">{this.props.data.company}</span>
        <span className="contact__data">{this.props.data.department}</span>
      </article>
    );
  }
}

export default Contact;
