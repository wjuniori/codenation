import React from "react";
import Container from "./Container";
import "./Filters.scss";
import { sortByProperty } from "../utils";

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
  }

  handleChangeSearch = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  handleClickSearch = (event) => {
    event.preventDefault();

    let contactsFiltered;

    if (this.state.search) {
      contactsFiltered = this.props.contactsAll.filter((contact) => {
        return contact.name
          .toLocaleLowerCase()
          .includes(this.state.search.toLocaleLowerCase());
      });
    } else {
      contactsFiltered = this.props.contactsAll;
    }

    this.props.updateStateFilter(
      contactsFiltered.sort((objA, objB) =>
        sortByProperty(objA, objB, document.querySelector(".is-selected").name)
      )
    );
  };

  handleClickSort = (event) => {
    event.preventDefault();
    document.querySelector(".is-selected").classList.remove("is-selected");
    event.target.classList.add("is-selected");

    this.props.updateStateFilter(
      this.props.contacts.sort((objA, objB) =>
        sortByProperty(objA, objB, event.target.name)
      )
    );
  };

  render() {
    return (
      <Container id="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              value={this.state.search}
              onChange={this.handleChangeSearch}
            />

            <button
              className="filters__search__icon"
              onClick={this.handleClickSearch}
            >
              <i className="fa fa-search" />
            </button>
          </div>

          <button
            className="filters__item is-selected"
            name="name"
            onClick={this.handleClickSort}
          >
            Nome <i className="fas fa-sort-down" />
          </button>

          <button
            className="filters__item"
            name="country"
            onClick={this.handleClickSort}
          >
            País <i className="fas fa-sort-down" />
          </button>

          <button
            className="filters__item"
            name="company"
            onClick={this.handleClickSort}
          >
            Empresa <i className="fas fa-sort-down" />
          </button>

          <button
            className="filters__item"
            name="department"
            onClick={this.handleClickSort}
          >
            Departamento <i className="fas fa-sort-down" />
          </button>

          <button
            className="filters__item"
            name="admissionDate"
            onClick={this.handleClickSort}
          >
            Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </Container>
    );
  }
}

export default Filters;
