import React from "react";
import "../../Style/Card.css";

const Card = ({ label, data, color = "primary" }) => {
  return (
    <React.Fragment>
      <div className={"box box-"+color} style={{ width: 300, margin: 20 }}>
        <h1>{label}</h1>
        <hr/>
        <h5 className="card-title">{data}</h5>
      </div>
    </React.Fragment>
  );
};

export default Card;
