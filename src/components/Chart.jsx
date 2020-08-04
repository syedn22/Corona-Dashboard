import React, { Component } from "react";
import http from "../services/httpService";
import config from "../config.json";
import _ from "lodash";
import LineChart from "./common/lineChart";
import PeriodicButton from "./common/periodicButton";

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
    NoofDataPoints: 7,
  };

  async componentDidMount() {
    const timeSeries = await http.get(config.timeSeries);
    this.setState({ timeSeries });
    const lineCharts = { ...this.state.lineCharts };
    const { NoofDataPoints, stateCode } = this.state;
    const obj = _(lineCharts)
      .map(
        (item) =>
          (item.data = this.getGraphPoints(
            timeSeries,
            item.path,
            stateCode,
            NoofDataPoints
          ))
      )
      .value();

    this.setState({ lineCharts });
  }

  changeNumberofDataPoints = (data) => {
    this.setState({ NoofDataPoints: data });
    console.log(data, this);
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps || this.state !== prevState) {
      const { lineCharts, timeSeries, NoofDataPoints } = this.state;

      if (
        prevState.stateCode !== this.props.stateCode ||
        this.state.NoofDataPoints !== prevState.NoofDataPoints
      ) {
        this.setState({ stateCode: this.props.stateCode });
        const obj = _(lineCharts)
          .map(
            (item) =>
              (item.data = this.getGraphPoints(
                timeSeries,
                item.path,
                this.props.stateCode,
                NoofDataPoints
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
      .slice(value.length - NoofDataPoints)
      .value();
    const x = _(labels)
      .slice(labels.length - NoofDataPoints)
      .value();

    return { x, y };
  };

  render() {
    return (
      <div>
        <PeriodicButton
          onClick={this.changeNumberofDataPoints}
        ></PeriodicButton>
        <LineChart dataset={this.state.lineCharts[0]} />
        <LineChart dataset={this.state.lineCharts[1]} />
        <LineChart dataset={this.state.lineCharts[2]} />
        <LineChart dataset={this.state.lineCharts[3]} />
      </div>
    );
  }
}

export default Chart;
