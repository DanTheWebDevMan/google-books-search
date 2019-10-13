import React, { Component } from "react";
import "./App.css";
import Saved from "./pages/saved";
import Search from "./pages/search";
import Nav from "./components/nav";
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Router>
          <Container>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              transition={Zoom}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggable={false}
              pauseOnHover
            />
            <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/bookshelf" component={Saved} />
              <Route exact path="/books/:id" component={null} />
              <Route component={null} />
            </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
