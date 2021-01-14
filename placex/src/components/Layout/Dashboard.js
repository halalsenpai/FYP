import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Button, Container, Grid, Header } from "semantic-ui-react";
import DashCarousel from "./DashCarousel";
import DashNav from "./DashNav";
import heroBanner from "../imgs/hero-banner.svg";
import PlacesCardsDashboard from "./PlacesCardsDashboard/PlacesCardsDashboard";
import { userData } from "../../Api/userData";

export default function Dashboard() {
	const divStyle = {
		backgroundImage: "url( " + heroBanner + ")",
		backgroundColor: "#404040",
		height: "350px",
		color: "#008fff",
		marginTop: "2em",
		backgroundSize: "cover",
		backgroundPosition: "center center",
		backgroundRepeat: '"norepeat", "repeat"',
	};
	return (
		<>
			<DashNav />

			<Jumbotron fluid style={divStyle}>
				<Container
					style={{
						textShadow: "0 0 100px #0096FF, 0 0 150px #0000FF",
						fontFamily: "Lucida Console",
						fontSize: "20px",
					}}
				>
					<h1>Looking for a place to Work?</h1>
					<p>Come check out exclusive deals on Workspaces</p>
				</Container>
			</Jumbotron>
			<Container>
				<Grid stackable divided>
					<Grid.Row>
						<Grid.Column width={10}>
							<DashCarousel />
						</Grid.Column>
						<Grid.Column width={6}>
							{" "}
							<div
								style={{
									width: "100%",
									backgroundColor: "#F2F2F2",
									height: "400px	",
								}}
							></div>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={16} style={{ marginLeft: "2em" }}>
							{" "}
							<Header as="h2" style={{ marginTop: "1em" }}>
								Top Rated Places{" "}
								<Button color="blue" inverted primary floated="right">
									List All
								</Button>
							</Header>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<PlacesCardsDashboard placex={userData} />
			</Container>
		</>
	);
}
