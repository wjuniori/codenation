import React from "react";
import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import "./App.scss";
import { URL } from "./constants";
import Loading from "./components/Loading";
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
      contacts: this.contactsAll,
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

  updateStateFilter = (contacts) => {
    this.setState({
      contacts,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Topbar />

        <Filters
          contacts={this.contactsAll}
          updateStateFilter={this.updateStateFilter}
        />

        {this.state.isLoading ? (
          <Loading />
        ) : (
          <Contacts contacts={this.state.contacts} />
        )}
      </React.Fragment>
    );
  }
}

export default App;
