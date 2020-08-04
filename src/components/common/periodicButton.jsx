import React from "react";

const PeriodicButton = ({onClick}) => {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => onClick(7)}
      >
        Last 7 days
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => onClick(10)}
      >
        Last 10 days
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => onClick(30)}
      >
        past 1 month
      </button>
    </div>
  );
};

export default PeriodicButton;
