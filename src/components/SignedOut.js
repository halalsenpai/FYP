import React from "react";
import { Menu, Button } from "semantic-ui-react";

export default function SignedOut() {
	return (
		<>
			<Menu.Item position="right">
				<Button basic inverted content="login"></Button>
				<Button
					basic
					inverted
					content="register"
					style={{ marginLeft: "0.5em" }}
				></Button>
			</Menu.Item>
		</>
	);
}
