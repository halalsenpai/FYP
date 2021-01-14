import React, { useState } from "react";
import { Checkbox } from "semantic-ui-react";
import "./formstyles.css";
import Time from "./Time";

export default function Hours() {
	const [isMonday, setIsMonday] = useState(false);
	const [isTuesday, setisTuesday] = useState(false);
	const [isWednesday, setisWednesday] = useState(false);
	const [isThursday, setisThursday] = useState(false);
	const [isFriday, setisFriday] = useState(false);
	const [isSaturday, setisSaturday] = useState(false);
	const [isSunday, setisSunday] = useState(false);
	
	function toggle(x,y) {
		// setIsMonday(!isMonday);
		x(!y)
		
			
	
	}

	

	return (
		<div>
			<div className="hour_div">
				
					<div className='toggle-div' style={{width:'50%' , display:'flex' , justifyContent:'space-between'}}>
						<span>Monday</span>
						<Checkbox toggle onChange={()=>toggle(setIsMonday,isMonday)} />
					</div>
				
				{isMonday ? <Time /> : null}
			</div>
			<div className="hour_div">
				<div className='toggle-div'>
					<span>Tuesday</span>
					<Checkbox toggle onChange={()=>toggle(setisTuesday,isTuesday)} />
				</div>

				{isTuesday ? <Time /> : null}
			</div>
			<div className="hour_div">
			<div className='toggle-div'>
					<span>Wednesday</span>
					<Checkbox toggle onChange={()=>toggle(setisWednesday,isWednesday)} />
			</div>

				{isWednesday ? <Time /> : null}
			</div>
			<div className="hour_div">
		<div className='toggle-div'>
					<span>Thursday</span>
					<Checkbox toggle onChange={()=>toggle(setisThursday,isThursday)} />
		</div>

				{isThursday ? <Time /> : null}
			</div>
			<div className="hour_div">
			<div className='toggle-div'>
					<span>Friday</span>
					<Checkbox toggle onChange={()=>toggle(setisFriday,isFriday)} />
			</div>

				{isFriday ? <Time /> : null}
			</div>
			<div className="hour_div">
				<div className='toggle-div'>
					<span>Saturday</span>
					<Checkbox toggle onChange={()=>toggle(setisSaturday,isSaturday)} />
				</div>

				{isSaturday ? <Time /> : null}
			</div>
			<div className="hour_div">
				<div className='toggle-div'>
					<span>Sunday</span>
					<Checkbox toggle onChange={()=>toggle(setisSunday,isSunday)} />
				</div>

				{isSunday ? <Time /> : null}
			</div>
		</div>
	);
}
