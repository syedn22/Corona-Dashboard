import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import CoronaTable from "./components/coronaTable";
import Navbar from "./components/common/Navbar";
import LineChart from "./components/common/lineChart";
import jsonData from "./services/dailyStateUpdate";
import { getState } from "./services/indianState";
import { getTimeData } from "./services/timeSeries";
import { get } from "lodash";

class App extends Component {
  state = {
    data: [],
    timeSeries: [],
  };

  async componentDidMount() {
    const result = await jsonData.getData();
    const timeSeries = await getTimeData();
    this.mapTimeSeriesData(timeSeries);
    this.setState({ data: this.mapStateName(result) });
    // console.log(this.state.data);
  }

  mapStateName(result) {
    const stateData = [];

    for (let key in result.data)
      if (result.data[key].total)
        stateData.push({ key,state: getState(key), ...result.data[key] });
    return stateData;
  }

  mapTimeSeriesData(timeSeries) {
    const stateData = [];

    for (let key in timeSeries.data)
      if (timeSeries.data[key])
        stateData.push({key, state: getState(key), ...timeSeries.data[key] });
    console.log(stateData);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main>
          <div className="row">
            <div className="col-sm m-5">
              <Switch>
                <Route
                  path="/dashboard"
                  render={() => <CoronaTable data={this.state.data} />}
                />
              </Switch>
            </div>
            <div className="col-sm m-5">
              <LineChart />
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
