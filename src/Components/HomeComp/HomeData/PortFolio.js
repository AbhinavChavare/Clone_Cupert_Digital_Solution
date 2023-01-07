import React, { useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import { BiCaretRight } from "react-icons/bi";
import AOS from 'aos';
import "aos/dist/aos.css"

const PortFolio = () => {
	useEffect(() => {
		AOS.init({ duration: 1500 })
	}, [])


	return (
		<div>
			<h2>Portfolio ....</h2>

			<div className='choose-sec'>
				<div data-aos="fade-right" className="portfolio-item">
					<figure>
						<img src="https://www.cyperts.net/wp-content/uploads/2017/03/24support-563x1024.jpg" alt="24 Supports" className="img-responsive" />
						<figcaption>
							<div className='port-item-disp'>
								<a href="https://www.cyperts.net/wp-content/uploads/2017/03/24support-563x1024.jpg"><FaSearch className='port-iconz' /></a>
								<p>24 Supports</p>
							</div>
						</figcaption>
					</figure>
				</div>

				<div data-aos="fade-up" className="portfolio-item port-mar-y-1">
					<figure>
						<img src="https://www.cyperts.net/wp-content/uploads/2017/03/latched-574x1024.jpg" alt="Latched Media" />
						<figcaption>
							<div className='port-item-disp'>
								<a href="https://www.cyperts.net/wp-content/uploads/2017/03/latched-574x1024.jpg"><FaSearch className='port-iconz' /></a>
								<p>Latched Media</p>
							</div>
						</figcaption>
					</figure>
				</div>



				<div data-aos="fade-left" className="portfolio-item port-mar-y-2">
					<figure>
						<img src="https://www.cyperts.net/wp-content/uploads/2017/07/screencapture-shortfilmtheatre-1500889806228-498x1024.png" alt="Shortflim Theater" className="img-responsive" />
						<figcaption>
							<div className='port-item-disp'>
								<a href="https://www.cyperts.net/wp-content/uploads/2017/07/screencapture-shortfilmtheatre-1500889806228-498x1024.png"><FaSearch className='port-iconz' /></a>
								<p>Shortflim Theater</p>
							</div>
						</figcaption>
					</figure>
				</div>
			</div>
			<div className='wraper-btn'>
				<div className='style-btn'>
					<div className='btn-style '>
						<a className='btn-wrap' href="http://cyperts.net/about-us/">
							View PortFolio <BiCaretRight />
						</a>
						<div className='slide-col' ></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PortFolio
