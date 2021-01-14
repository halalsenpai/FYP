import React from "react";

import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import Logo from "../../imgs/logo-white-icon.svg";
import SignedOut from "../../SignedOut";
import SignedIn from "../../SignedIn";

export default function Navbar() {
	return (
		<>
			<Menu
				stackable
				secondary
				fixed="top"
				style={{ backgroundColor: "#0275d8" }}
			>
				<Container>
					<NavLink to="/">
						<Menu.Item header>
							<img
								src={Logo}
								alt="logo"
								style={{ height: "25px", width: "auto" }}
							/>
						</Menu.Item>
					</NavLink>
					<Menu.Item>
						<Button positive inverted content="List your Place"></Button>
					</Menu.Item>
					<SignedIn />
					<SignedOut />
				</Container>
			</Menu>
		</>
	);
}
