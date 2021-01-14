import React from "react";
import { Checkbox } from "semantic-ui-react";
import "./formstyles.css";
import Time from "./Time";

export default function Hourdiv(props) {
  console.log(props.days.name);

  function toggle(x, y) {
    x(!y);
  }
  return (
    <div>
      <div className="hour_div">
        <div className="toggle-div">
          <span>{props.days.name}</span>
          <Checkbox
            toggle
            onChange={() => toggle(props.days.setDay, props.days.day)}
          />
        </div>

        {props.days.day ? <Time /> : null}
      </div>
    </div>
  );
}
