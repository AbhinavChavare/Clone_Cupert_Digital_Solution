import React, { useEffect } from 'react'
import ChooseCont from './ChooseCont'
import Contact from './Contact'
import "./HomeData.css"
import HomeDigital from './HomeDigital'
import PortFolio from './PortFolio'
import ServiceCont from './ServiceCont'
import AOS from 'aos';
import "aos/dist/aos.css"
import Aos from 'aos'


const HomeCont = () => {
  useEffect(()=>{
    
    AOS.init({duration:1500})
    Aos.refresh()
},[])


  return (
    <div className='datasa'>

      <section data-aos="fade-up" >
        <ChooseCont />
      </section>

      <section  data-aos="fade-up" >
        <HomeDigital />
      </section>

      <section  data-aos="fade-up" >
        <ServiceCont />
      </section>

      <section  data-aos="fade-up" >
        <PortFolio />
      </section>

      <section  data-aos="fade-up" >
        <Contact />
      </section>


      
    </div>
  )
}

export default HomeCont
