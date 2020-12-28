import React from "react";

const PeriodicButton = ({ onClick }) => {
  return (
    <div>
      <button type="button" className="btn" onClick={() => onClick(7)}>
        Last 7 days
      </button>
      <button type="button" className="btn " onClick={() => onClick(10)}>
        Last 10 days
      </button>
      <button type="button" className="btn " onClick={() => onClick(30)}>
        past 1 month
      </button>
    </div>
  );
};

export default PeriodicButton;
