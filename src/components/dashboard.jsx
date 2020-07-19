import React, { Component } from "react";
import LineChart from "./common/lineChart";
import CoronaTable from "./coronaTable";
// import YoutubePlaylist from "./YoutubePlaylist";
import http from "../services/httpService";
import config from "../config.json";
import { getState } from "./../services/indianState";

class Dashboard extends Component {
  state = {
    data: [],
    timeSeries: [],
  };
  async componentDidMount() {
    const result = await http.get(config.data);
    const timeSeries = await http.get(config.timeSeries);
    this.mapTimeSeriesData(timeSeries);
    this.setState({ data: this.mapStateName(result) });
  }

  mapStateName(result) {
    const stateData = [];

    for (let key in result.data)
      if (result.data[key].total)
        stateData.push({ key, state: getState(key), ...result.data[key] });
    return stateData;
  }

  mapTimeSeriesData(timeSeries) {
    const stateData = [];

    for (let key in timeSeries.data)
      if (timeSeries.data[key])
        stateData.push({ key, state: getState(key), ...timeSeries.data[key] });
  }

  render() {
    const { data } = this.props;
    
    return (
      <div className="row">
        <div className="col-sm m-5">
          <CoronaTable data={data}></CoronaTable>
        </div>
        <div className="col-sm m-5">
          <LineChart />
        </div>
      </div>
    );
  }
}

export default Dashboard;
