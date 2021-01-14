import React from "react";
import PropTypes from "prop-types";
import { Button, Container } from "semantic-ui-react";
import { Dot } from "pure-react-carousel";

export default function CustomDotGroup(slides1, size) {
	CustomDotGroup.defaultProps = {
		size: "mini",
	};
	CustomDotGroup.propTypes = {
		slides1: PropTypes.number.isRequired,
		size: PropTypes.string,
	};

	return (
		<>
			<Container textAlign="center">
				<Button.Group size="mini">
					{[...Array(slides1.slides1).keys()].map((slide) => (
						<Button as={Dot} key={slide} icon="circle" slide={slide} />
					))}
				</Button.Group>
			</Container>
		</>
	);
}
