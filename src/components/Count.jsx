import React, { useEffect, useState } from "react";
import { useContext } from "react";

import Card from "./common/Card";
import DataContext from "../context/DataContext";

export default function Count(props) {
  const States = useContext(DataContext);
  const [StateCode, setStateCode] = useState(null);
  const [active, setActive] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [death, setDeath] = useState(0);

  useEffect(() => {
    setStateCode(props.selectedState);
    for (let State of States) {
      if (State.key === StateCode) {
        setActive(State.total.confirmed);
        setRecovered(State.total.recovered);
        setDeath(State.total.deceased);
      }
    }
  }, [props, States, StateCode]);

  return (
    <div className="row m-4">
      <Card label="active" data={active} />
      <Card label="recovered" data={recovered} color="success" />
      <Card label="dead" data={death} color="dark" />
    </div>
  );
}
