import React from "react";
import {
	Button,
	ButtonGroup,
	Container,
	Header,
	Image,
	Segment,
} from "semantic-ui-react";
import "../styles/home.css";
import Logo from "../components/imgs/logo-white-icon.svg";
import Iframe from "react-iframe";

export default function home({ history }) {
	return (
		<>
			<Segment inverted textAlign="center" vertical className="masthead">
				<Iframe
					className="ytp-related-title"
					width="100%"
					height="130%"
					title="karachi"
					src="https://www.youtube.com/embed/09IrM-fWd0s?controls=0&autoplay=1&loop=1&playlist=09IrM-fWd0s&modestbranding=1&iv_load_policy=3&start=50&end=90&disablekb=1"
					frameBorder="0"
					allowFullScreen
					styles={{ zIndex: -1 }}
					position="fixed"
				></Iframe>
				<Container>
					<Header as="h1" inverted>
						<Image
							className="logo-size-hotfix"
							size="massive"
							src={Logo}
							style={{ marginBottom: 12 }}
						/>
					</Header>
					<ButtonGroup size="large" widths="equal">
						<Button
							style={{ width: "151.88px", zIndex: 1 }}
							color="green"
							onClick={() => history.push("/dashboard")}
						>
							Find a Place
						</Button>
						<Button.Or style={{ backgroundColor: "green" }} />
						<Button
							style={{ zIndex: 1 }}
							color="green"
							onClick={() => history.push("/List-place")}
						>
							List your Place
						</Button>
					</ButtonGroup>
				</Container>
			</Segment>
		</>
	);
}
