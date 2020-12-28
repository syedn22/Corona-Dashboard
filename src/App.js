import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Dashboard from "./components/dashboard";

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
      <div className="app">
        <Switch>
          <Route path="/dashboard" render={() => <Dashboard />} />
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </div>
    );
  }
}

export default App;
