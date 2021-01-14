import React, { useState } from 'react'
import Hourdiv from './Hourdiv';

export default function HoursTest(props) {
    const [isMonday, setIsMonday] = useState(false);
	const [isTuesday, setisTuesday] = useState(false);
	const [isWednesday, setisWednesday] = useState(false);
	const [isThursday, setisThursday] = useState(false);
	const [isFriday, setisFriday] = useState(false);
	const [isSaturday, setisSaturday] = useState(false);
    const [isSunday, setisSunday] = useState(false);
    
    const days = [
        {name:'Monday', setDay:setIsMonday, day:isMonday , id:1},
        {name:'Tuesday', setDay:setisTuesday, day:isTuesday , id:2},
        {name:'Wednesday', setDay:setisWednesday, day:isWednesday , id:3},
        {name:'Thursday', setDay:setisThursday, day:isThursday , id:4},
        {name:'Friday', setDay:setisFriday, day:isFriday , id:5},
        {name:'Saturday', setDay:setisSaturday, day:isSaturday , id:6},
        {name:'Sunday', setDay:setisSunday, day:isSunday , id:7}
    ]

    return (
        <div>
           {days.map((day)=>(<Hourdiv days={day} key={days.id}/>))} 
        </div>
    )
}
