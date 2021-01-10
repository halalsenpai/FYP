import React from "react";
import { Button } from "semantic-ui-react";

export default function Time() {
	return (
		<div style={{ display: "flex", justifyContent: "space-evenly" }}>
			<input type="time" />
			<input type="time" />
			<Button label="SLELECT ALL" />
		</div>
	);
}
