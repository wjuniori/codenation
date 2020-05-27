import React from "react";
import Container from "./Container";
import "./Filters.scss";

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
      contactsFiltered = this.props.contacts.filter((contact) => {
        return contact.name
          .toLocaleLowerCase()
          .includes(this.state.search.toLocaleLowerCase());
      });
    } else {
      contactsFiltered = this.props.contacts;
    }

    this.props.updateStateFilter(contactsFiltered);
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

          <button className="filters__item is-selected">
            Nome <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item">
            País <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item">
            Empresa <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item">
            Departamento <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item">
            Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </Container>
    );
  }
}

export default Filters;
