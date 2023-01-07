import React from 'react'
import ChooseCont from './ChooseCont'
import Contact from './Contact'
import "./HomeData.css"
import HomeDigital from './HomeDigital'
import PortFolio from './PortFolio'
import ServiceCont from './ServiceCont'

const HomeCont = () => {
  return (
    <div className='datasa'>

      <section >
        <ChooseCont />
      </section>

      <section>
        <HomeDigital />
      </section>

      <section >
        <ServiceCont />
      </section>

      <section >
        <PortFolio />
      </section>

      <section >
        <Contact />
      </section>
    </div>
  )
}

export default HomeCont
