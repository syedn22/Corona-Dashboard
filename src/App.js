import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import YoutubePlaylist from "./components/YoutubePlaylist";
import Dashboard from "./components/dashboard";
import YoutubePlayer from "./components/common/YoutubePlayer";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/youtube/:id" component={YoutubePlayer} />
            <Route path="/youtube" render={() => <YoutubePlaylist />} />
            <Route path="/dashboard" render={() => <Dashboard />} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
