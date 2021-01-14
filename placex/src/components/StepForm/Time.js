import React from "react";
import { Button } from "semantic-ui-react";

export default function Time() {
	const inputStyles = {
		margin:'2px',
		height:'70%'
	
	}
	return (
		<div style={{ display: "flex", justifyContent: "space-evenly", alignItems:'center' }}>
			<input style={inputStyles} type="time" />
			<input style={inputStyles} type="time" />
			<Button style={inputStyles} primary >Select All</Button>
		</div>
	);
}
