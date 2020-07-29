import React from "react";
import AppNavbar from "./components/AppNavbar";
import SuperMarkets from "./components/superMarkets";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <SuperMarkets />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
