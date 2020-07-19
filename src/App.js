import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import YoutubePlaylist from "./components/YoutubePlaylist";

import Dashboard from "./components/dashboard";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main>
          <Switch>
            <Route path="/dashboard" render={() => <Dashboard />} />
            <Route path="/youtube" render={() => <YoutubePlaylist />} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
