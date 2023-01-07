import React, { useEffect } from 'react'
import { BsSliders } from "react-icons/bs";
import { GrDiamond } from "react-icons/gr";
import { FaCogs } from "react-icons/fa";
// import AOS from 'aos';
// import "aos/dist/aos.css"

const ChooseCont = () => {
	// useEffect(() => {
	// 	AOS.init({ duration: 1500 })
	// }, [])

	return (
		<>
			<h2>Why Choose Us...</h2>
			<div className='choose-sec'>
				<div data-aos="fade-right" className='choose-cont'>
					<div className='flex-center'>
						<BsSliders className='sliiconz' />
					</div>

					<h5>User Centric Websites</h5>
					<p>Professional and modern website designs that are business appealing to potential customers. Creates memorable brands that will stand above everything.</p>
					<a href="http://cyperts.net/services/">Read More...</a>
				</div>
				<div data-aos="fade-up" className='choose-cont chos-mar-y-1'>
					<div className='flex-center'>
						<GrDiamond className='sliiconz' />
					</div>

					<h5>Most Engaging Apps.</h5>
					<p>Aims at developing user engaging products. Performance oriented and customer centric mobile app development service with Android and iOS platforms.</p>
					<a href="http://cyperts.net/services/">Read More...</a>
				</div>
				<div data-aos="fade-left" className='choose-cont chos-mar-y-2'>
					<div className='flex-center'>
						<FaCogs className='sliiconz' />
					</div>
					<h5>User Centric Websites</h5>
					<p>Professional and modern website designs that are business appealing to potential customers. Creates memorable brands that will stand above everything.</p>
					<a href="http://cyperts.net/services/">Read More...</a>
				</div>
			</div>
		</>
	)
}

export default ChooseCont
