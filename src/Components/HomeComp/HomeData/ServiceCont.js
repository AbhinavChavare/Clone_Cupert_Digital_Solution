import React from 'react'
import { BiDesktop } from "react-icons/bi";
import { AiFillAndroid } from "react-icons/ai";
import { FaGlobeAsia } from "react-icons/fa";

const ServiceCont = () => {
  return (
    <>
      <h2>Our Services ...</h2>
      <div className='choose-sec'>
        <div className='choose-cont'>
        <div className='flex-center'>
          <BiDesktop className='sliiconz' />
          </div>
          <h5>Website Development</h5>
          <p>Our developers are well-versed in their domain knowledge and will always deliver the best static or dynamic website with mobile friendliness</p>
          <a href="http://www.cyperts.net/website-development/">Read More...</a>
        </div>
        <div className='choose-cont  chos-mar-y-1'>
        <div className='flex-center'>
          <AiFillAndroid className='sliiconz' />
          </div>
          <h5>Mobile App Development</h5>
          <p>We are expert in iOS App Development and Android App Development.We offer best and affordable mobile app development services globally.</p>
          <a href="https://www.cyperts.net/mobile-app-development/">Read More...</a>
        </div>
        <div className='choose-cont  chos-mar-y-2'>
        <div className='flex-center'>
          <FaGlobeAsia className='sliiconz' />
          </div>
          <h5>Digital Marketing</h5>
          <p>Success of any organization lies in its online marketing strategy. We focus on Omni-channel approach to get more conversion rate on your website.</p>
          <a href="http://www.cyperts.net/digital-marketing/">Read More...</a>
        </div>
      </div>
    </>
  )
}

export default ServiceCont
