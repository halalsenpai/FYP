import React, { useState } from "react";
import { Button, Checkbox, Container, Header } from "semantic-ui-react";
import "./formstyles.css";
import Hours from "./Hours";

export default function BuisnessHours({ formData, setForm, navigation }) {
	const [isToggle, setToggle] = useState(true);
	function toggled() {
		setToggle(!isToggle);
	}

	return (
		<>
			<Container style={{ marginTop: "5em" }}>
				<h1 style={{ textAlign: "center" }}>Buisness Hours</h1>
				<Container style={{ width: "400px" }}>
					<Container
						style={{ display: "flex", justifyContent: "space-between" }}
					>
						<Header as="h3">Always Open</Header>
						<Checkbox
							toggle
							defaultChecked={isToggle}
							onChange={toggled}
							checked={isToggle}
						/>
					</Container>
					<Container
						style={{ display: "flex", justifyContent: "space-between" }}
					>
						<Header as="h3">Open Specific Hours</Header>
						<Checkbox toggle checked={!isToggle} onChange={toggled} />
					</Container>
				</Container>
				{!isToggle ? <Hours /> : null}
				<Button.Group fluid>
					<Button secondary onClick={navigation.previous}>
						Back
					</Button>
					<Button positive onClick={navigation.next}>
						Next
					</Button>
				</Button.Group>
			</Container>
		</>
	);
}
