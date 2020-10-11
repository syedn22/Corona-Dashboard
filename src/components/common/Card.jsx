import React from "react";

const Card = ({ label, data, color = "primary" }) => {
  return (
    <React.Fragment>
      <div
        className={"mb-3 card border-" + color}
        style={{ width: 300, margin: 20 }}
      >
        <div className="card-header">{label}</div>
        <div className={"card-body text-" + color}>
          <h5 className="card-title">{data}</h5>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
