import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import YoutubePlaylist from "./components/YoutubePlaylist";
import Dashboard from "./components/dashboard";
import YoutubePlayer from "./components/common/YoutubePlayer";

import http from "./services/httpService";
import config from "./config.json";
import "./App.css";


class App extends Component {
  state = {};

  async componentDidMount() {
    const timeSeries = await http.get(config.timeSeries);
    this.setState({ timeSeries });
  }

  render() {
    return (
      <div>
        
          <Navbar />
          <main>
            <Switch>
              <Route path="/youtube/:id" component={YoutubePlayer} />
              <Route path="/youtube" render={() => <YoutubePlaylist />} />
              <Route path="/dashboard" render={() => <Dashboard />} />
            </Switch>
          </main>
      </div>
    );
  }
}

export default App;
