import React, { Component } from "react";
import http from "../services/httpService";
import config from "../config.json";
import _ from "lodash";
import LineChart from "./common/lineChart";

class Chart extends Component {
  state = {
    timeSeries: [],
    stateCode: "AN",
    lineCharts: [
      { path: "confirmed", label: "Confirmed", color: "red", data: [] },
      { path: "recovered", label: "Recovered", color: "green", data: [] },
      { path: "tested", label: "Tested", color: "blue", data: [] },
      { path: "deceased", label: "Deceased", color: "black", data: [] },
    ],
  };

  async componentDidMount() {
    const timeSeries = await http.get(config.timeSeries);
    this.setState({ timeSeries });
    const lineCharts = { ...this.state.lineCharts };
    const obj = _(lineCharts)
      .map(
        (item) =>
          (item.data = this.getGraphPoints(
            timeSeries,
            item.path,
            this.state.stateCode,
            10
          ))
      )
      .value();

    this.setState({ lineCharts });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      const { lineCharts, timeSeries } = this.state;
    
      if (prevState.stateCode !== this.props.StateCode) {
        this.setState({ stateCode: this.props.StateCode });
        const obj = _(lineCharts)
          .map(
            (item) =>
              (item.data = this.getGraphPoints(
                timeSeries,
                item.path,
                this.props.StateCode,
                10
              ))
          )
          .value();

        this.setState({ lineCharts });
      }
    }
  }

  getGraphPoints = (timeSeries, path, Statename, NoofDataPoints) => {
    const value = Object.values(timeSeries.data[Statename]);
    const labels = Object.keys(timeSeries.data[Statename]);

    const y = _(value)
      .map((m) => m.total[path])
      .slice(value.length - 10)
      .value();
    const x = _(labels)
      .slice(labels.length - NoofDataPoints)
      .value();

    return { x, y };
  };

  render() {
    return (
      <div>
        <LineChart dataset={this.state.lineCharts[0]} />
        <LineChart dataset={this.state.lineCharts[1]} />
        <LineChart dataset={this.state.lineCharts[2]} />
        <LineChart dataset={this.state.lineCharts[3]} />
      </div>
    );
  }
}

export default Chart;
