import React from "react";
import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import "./App.scss";
import { URL } from "./constants";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
    };
  }

  async componentDidMount() {
    const resp = await fetch(URL);
    const data = await resp.json();

    this.setState({
      contacts: data,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />

        <Filters />

        <Contacts contacts={this.state.contacts} />
      </React.Fragment>
    );
  }
}

export default App;
