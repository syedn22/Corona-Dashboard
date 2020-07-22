import React, { Component } from "react";
import Table from "./common/Table";

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

  render() {
    const { columns, sortColumn } = this.state;
    const { data, onClick } = this.props;

    return (
      <Table
        data={data}
        columns={columns}
        sortColumn={sortColumn}
        onSort={this.handleSort}
        onClick={onClick}
      />
    );
  }
}

export default CoronaTable;
