import React, { Component } from "react";
import CoronaTable from "./coronaTable";
import http from "../services/httpService";
import config from "../config.json";
import { getState } from "./../services/indianState";
import Chart from "./Chart";
import Count from "./Count";
import DataContext from "./../context/DataContext";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  state = {
    data: [],
    selectedState: "AN",
  };
  async componentDidMount() {
    const result = await http.get(config.data);
    this.setState({
      data: this.mapStateName(result),
    });
  }

  handleChangeState = (StateCode) => {
    this.setState({ selectedState: StateCode });
  };

  mapStateName(result) {
    const stateData = [];

    for (let key in result.data)
      if (result.data[key].total)
        stateData.push({ key, state: getState(key), ...result.data[key] });
    return stateData;
  }

  render() {
    const { data, selectedState } = this.state;
    return (
      <DataContext.Provider value={data}>
        <header className="header">
          <img src="https://img.icons8.com/wired/50/000000/coronavirus.png" />
          {"    COVID-19 INDIA STATISTICS   "}
          <img src="https://img.icons8.com/wired/50/000000/coronavirus.png" />
        </header>
        <main>
          <Count selectedState={selectedState}></Count>
          <hr className="rounded" />
          <div className="row">
            <div className="column">
              <CoronaTable data={data} onClick={this.handleChangeState} />
            </div>
            <div className="column">
              <Chart stateCode={selectedState} />
            </div>
          </div>
        </main>
        <footer className="footer">
          <div>
            {"STAY HOME "}
            <img src="https://img.icons8.com/metro/26/000000/home.png" />
            {". SAVE LIVES "}
            <img src="https://img.icons8.com/ios-filled/50/000000/hand-holding-heart.png" />
            .
          </div>
          <a href="https://github.com/syedn22/Corona-Dashboard">
            <img src="https://img.icons8.com/fluent-systems-filled/48/000000/github.png" />
          </a>
        </footer>
      </DataContext.Provider>
    );
  }
}

export default Dashboard;
