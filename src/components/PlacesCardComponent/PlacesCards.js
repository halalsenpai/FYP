import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";
import faker from "Faker";
import "./PlacesCards.css";

export default function PlacesCards({ place }) {
	return (
		<div className="cards">
			<Card fluid raised>
				<Image src={faker.Image.abstractImage(500, 350)} wrapped ui={false} />
				<Card.Content>
					<Card.Header>{place.title}</Card.Header>
					<Card.Meta>{place.category}</Card.Meta>
					<Card.Description>{place.description}</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<Link to="/">
						<Icon name="chevron circle right" />
						View Details
					</Link>
				</Card.Content>
			</Card>
		</div>
	);
}
