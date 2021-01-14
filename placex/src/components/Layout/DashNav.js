import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Container, Segment, SegmentGroup } from "semantic-ui-react";

export default function DashNav() {
	return (
		<>
			<Container style={{ marginTop: "5em" }}>
				<SegmentGroup horizontal size="large">
					<Segment raised textAlign="center">
						Places for Fun
					</Segment>
					<Segment raised textAlign="center">
						<LinkContainer to="/dashboard/page1">
							<Link>Places for Corporate</Link>
						</LinkContainer>
					</Segment>
					<Segment raised textAlign="center">
						Places for Weddings
					</Segment>
					<Segment raised textAlign="center">
						Places for Stays
					</Segment>
				</SegmentGroup>
			</Container>
		</>
	);
}
