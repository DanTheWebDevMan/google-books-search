import React, { Component } from "react";
import "./App.css";
import Books from "./pages/Books";
import Nav from "./components/nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div>
            <Nav />
            <Books />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
