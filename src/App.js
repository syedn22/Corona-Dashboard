import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import CoronaTable from "./components/coronaTable";
import Navbar from "./components/common/Navbar";
import LineChart from "./components/common/lineChart";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <div className="row">
          <div className="col-sm m-5">
            <Switch>
              <Route path="/dashboard" component={CoronaTable} />
            </Switch>
          </div>
          <div className="col-sm m-5">
            <LineChart/>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
