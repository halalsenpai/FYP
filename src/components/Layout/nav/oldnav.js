import React from "react";
import {
	Navbar,
	Nav,
	Form,
	FormControl,
	Button,
	Container,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Menu } from "semantic-ui-react";
import logo from "../imgs/logo-white.svg";
import Signedin from "../Signedin";

export default function navbarcomp() {
	return (
		<div>
			<Navbar bg="primary" variant="dark">
				<Container fluid="sm md">
					<LinkContainer to="/">
						<Navbar.Brand>
							<img
								alt=""
								src={logo}
								height="32"
								className="d-inline-block align-top"
							/>
						</Navbar.Brand>
					</LinkContainer>
					<Form inline className="w-100 justify-content-center flex-nowrap">
						<FormControl
							type="text"
							placeholder="Search for Places"
							className="mr-sm-2 w-75"
						/>
						<Button variant="outline-light">Search</Button>
					</Form>
					<Nav className="ml-auto">
						<LinkContainer to="/about">
							{/* <Nav.Link>Home</Nav.Link> */}
							<Menu.Item>Home</Menu.Item>
						</LinkContainer>
						<Signedin />
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
}
