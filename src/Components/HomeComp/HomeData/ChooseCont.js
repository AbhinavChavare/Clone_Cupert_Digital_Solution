import React from 'react'
import { BsSliders } from "react-icons/bs";
import { GrDiamond } from "react-icons/gr";
import { FaCogs } from "react-icons/fa";

const ChooseCont = () => {
	return (
		<>
			<h2>Why Choose Us...</h2>
			<div className='choose-sec'>
				<div className='choose-cont'>
					<BsSliders className='sliiconz' />
					<h5>User Centric Websites</h5>
					<p>Professional and modern website designs that are business appealing to potential customers. Creates memorable brands that will stand above everything.</p>
					<a href="http://cyperts.net/services/">Read More...</a>
				</div>
				<div className='choose-cont chos-mar-y-1'>
					<GrDiamond className='sliiconz' />
					<h5>Most Engaging Apps.</h5>
					<p>Aims at developing user engaging products. Performance oriented and customer centric mobile app development service with Android and iOS platforms.</p>
					<a href="http://cyperts.net/services/">Read More...</a>
				</div>
				<div className='choose-cont chos-mar-y-2'>
					<FaCogs className='sliiconz' />
					<h5>User Centric Websites</h5>
					<p>Professional and modern website designs that are business appealing to potential customers. Creates memorable brands that will stand above everything.</p>
					<a href="http://cyperts.net/services/">Read More...</a>
				</div>
			</div>
		</>
	)
}

export default ChooseCont
