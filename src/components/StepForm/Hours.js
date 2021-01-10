import React, { useState } from "react";
import { Checkbox } from "semantic-ui-react";
import "./formstyles.css";
import Time from "./Time";

export default function Hours() {
	const [isMonday, setIsMonday] = useState(false);

	function toggle() {
		setIsMonday(!isMonday);
	}

	return (
		<div>
			<div className="hour_div">
				<div>
					<span>Monday</span>
					<Checkbox toggle onChange={toggle} />
				</div>
				{isMonday ? <Time /> : null}
			</div>
			<div className="hour_div">
				<span>Monday</span>
				<Checkbox toggle onChange={toggle} />

				{isMonday ? <Time /> : null}
			</div>
			<div className="hour_div">
				<span>Monday</span>
				<Checkbox toggle onChange={toggle} />

				{isMonday ? <Time /> : null}
			</div>
			<div className="hour_div">
				<span>Monday</span>
				<Checkbox toggle onChange={toggle} />

				{isMonday ? <Time /> : null}
			</div>
			<div className="hour_div">
				<span>Monday</span>
				<Checkbox toggle onChange={toggle} />

				{isMonday ? <Time /> : null}
			</div>
			<div className="hour_div">
				<span>Monday</span>
				<Checkbox toggle onChange={toggle} />

				{isMonday ? <Time /> : null}
			</div>
			<div className="hour_div">
				<span>Monday</span>
				<Checkbox toggle onChange={toggle} />

				{isMonday ? <Time /> : null}
			</div>
		</div>
	);
}
