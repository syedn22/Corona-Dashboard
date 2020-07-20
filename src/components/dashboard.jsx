import React, { Component } from "react";
import CoronaTable from "./coronaTable";
import http from "../services/httpService";
import config from "../config.json";
import { getState } from "./../services/indianState";
import Chart from "./Chart";

class Dashboard extends Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    const result = await http.get(config.data);
    this.setState({
      data: this.mapStateName(result),
    });
  }

  mapStateName(result) {
    const stateData = [];

    for (let key in result.data)
      if (result.data[key].total)
        stateData.push({ key, state: getState(key), ...result.data[key] });
    return stateData;
  }

  render() {
    const { data } = this.state;
    return (
      <div className="row">
        <div className="col-sm">
          <CoronaTable data={data}></CoronaTable>
        </div>
        <div className="col-sm">
          <Chart />
        </div>
      </div>
    );
  }
}

export default Dashboard;
