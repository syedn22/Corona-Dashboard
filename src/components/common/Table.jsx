import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ sortColumn, onSort, columns, data, onClick }) => {
  return (
    <React.Fragment>
      <h2>daily stats</h2>
      <table className="table table-bordered table-striped table-sm table-responsive-sm ">
        <TableHeader
          sortColumn={sortColumn}
          onSort={onSort}
          columns={columns}
        />
        <TableBody data={data} columns={columns} onClick={onClick} />
      </table>
    </React.Fragment>
  );
};

export default Table;
