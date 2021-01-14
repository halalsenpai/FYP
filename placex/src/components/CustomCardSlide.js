import { Slide } from "pure-react-carousel";
import { Card } from "semantic-ui-react";
import React from "react";

export default function CustomCardSlide({ index, content, ...cardProps }) {
	return (
		<Slide index={index}>
			<div style={{ padding: 10 }}>
				<Card fluid raised {...cardProps}></Card>
			</div>
		</Slide>
	);
}
