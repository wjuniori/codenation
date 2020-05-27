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
  }

  async componentDidMount() {
    this.setState({
      isLoading: true,
    });

    const resp = await fetch(URL);
    const data = await resp.json();

    this.setState({
      contacts: data,
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

  render() {
    return (
      <React.Fragment>
        <Topbar />

        <Filters />

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
