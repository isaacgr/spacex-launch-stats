import React, { Component } from "react";
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Launches from "./components/Launches";
import "./App.css";
import logo from "./logo.png";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 200, display: "block", margin: "auto" }}
          />
          <Launches />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
