import React, { Component } from "react";
import CoronaTable from "./coronaTable";
import http from "../services/httpService";
import config from "../config.json";
import { getState } from "./../services/indianState";
import Chart from "./Chart";
import Count from "./Count";
import DataContext from "./../context/DataContext";

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
          {"COVID-19 INDIA STATISTICS" }
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
        <footer className="footer"></footer>
      </DataContext.Provider>
    );
  }
}

export default Dashboard;
