import React from "react";
import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import "./App.scss";
import { URL } from "./constants";
import Loading from "./components/Loading";
import { sortByProperty } from "./utils";
// import wrongData from "./data/wrongData.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      isLoading: false,
    };

    this.contactsAll = [];
  }

  async componentDidMount() {
    this.setState({
      isLoading: true,
    });

    const resp = await fetch(URL);
    this.contactsAll = await resp.json();

    this.setState({
      contacts: this.contactsAll.sort((objA, objB) =>
        sortByProperty(objA, objB, "name")
      ),
      isLoading: false,
    });

    //Para testar o ErrorBoundary
    // setTimeout(() => {
    //   this.setState({
    //     contacts: wrongData,
    //     isLoading: false,
    //   });
    // }, 2000);
  }

  handleClick = (contacts) => {
    this.setState({
      contacts,
    });
  };

  render() {
    return (
      <div data-testid="app" className="app">
        <Topbar />

        <Filters
          contactsAll={this.contactsAll}
          contacts={this.state.contacts}
          onClick={this.handleClick}
        />

        {this.state.isLoading ? (
          <Loading />
        ) : (
          <Contacts contacts={this.state.contacts} />
        )}
      </div>
    );
  }
}

export default App;
