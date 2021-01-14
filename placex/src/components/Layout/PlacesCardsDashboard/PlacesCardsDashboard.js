import React from "react";
import PlacesCards from "../../PlacesCardComponent/PlacesCards";
import "../../PlacesCardComponent/PlacesCards.css";

export default function PlacesCardsDashboard(props) {
	return (
		<div className="cards-div">
			{props.placex.map((place) => (
				<PlacesCards place={place} key={place.id} />
			))}
		</div>
	);
}
