import React from "react";
import Topbar from "./components/Topbar";
import Container from "./components/Container";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Topbar />

        <Container>
          <Filters />
        </Container>

        <Container>
          <Contacts />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
