import React, { useEffect } from 'react'
import { BiCaretRight } from "react-icons/bi";
import AOS from 'aos';
import "aos/dist/aos.css"


const HomeDigital = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  
  
  return (
    <>
      <h2>Digital Marking Agency...</h2>
      <div className='digital-cont'>
        <p>If it is Cyperts then it's all about creating stories of success with digital marketing, website design and mobile app development. We help you create milestones in the world of business sing our technical and creative expertise and your brand.

          Cyperts is a digital marketing agency based in Pune and we also have our office in the UK from where we cater to the digital marketing needs of the European region. As a prominent web development agency and digital marketing agency we have strategized and created tools and techniques which have helped the clients from different industries to achieve success on the digital platform, which has eventually helped them earn laurels in the world of business. Coming to our key aspect of working, or mobile app development division is the best and by far the most effective way to reach out to the maximum audience. Or digital marketing solutions like SEO, SEM, Social Media Marketing etc. along with website development and mobile app development has made us outshine the other digital marketing agencies working in the market.

          Our penchant to offer creatively advanced solutions has made us one of the most popular web development agencies. If you wish to experience result orient digital marketing approach which you can measure, optimize and can guarantee you ROI, its time that you connect with Cyperts today.

        </p>

        <img  data-aos="fade-up-left" src="https://www.cyperts.net/wp-content/uploads/2017/08/Sem-Título-2.png" alt="Digital Marketing Agency..." />

      </div>
      <div className='wraper-btn-left'>
        <div className='style-btn'>

          <div className='btn-style '>
            <a className='btn-wrap' href="http://cyperts.net/about-us/">
              Read More <BiCaretRight />
            </a>
            <div className='slide-col' ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeDigital
