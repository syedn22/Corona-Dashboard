import React, { Component } from "react";
import Table from "./common/Table";

import jsonData from "../services/dailyStateUpdate";
import { getState } from './../services/indianState';

class CoronaTable extends Component {
  state = {
    data: [],
    columns: [
      { path: "state", label: "State" },
      { path: "total.confirmed", label: "Confirmed" },
      { path: "total.deceased", label: "Deceased" },
      { path: "total.recovered", label: "Recovered" },
      { path: "total.tested", label: "Tested" },
    ],
    sortColumn: { path: "confirmed", order: "asc" },
  };

  handleSort = (sortColumn) => {
    console.log(sortColumn);
  };

    async componentDidMount() {
    const result = await jsonData.getData();
    
    this.setState({data:this.arrayOfObjects(result)});
    }

arrayOfObjects(result){
    const stateData = [];

    for (let key in result.data)
      if (result.data[key].total)
        stateData.push({ state: getState(key), ...result.data[key] });
    return stateData;
}

  render() {
    const { data, columns, sortColumn } = this.state;

    return (
      <Table
        data={data}
        columns={columns}
        sortColumn={sortColumn}
        onSort={this.handleSort}
      />
    );
  }
}

export default CoronaTable;
