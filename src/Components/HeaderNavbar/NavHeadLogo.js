import React, { useState } from 'react'
import NavHeadLinks from './NavHeadLinks'
import "./HeaderNav.css"
import { RxCross1 } from "react-icons/rx";
import {RiBarChartHorizontalLine } from "react-icons/ri";


const NavHeadLogo = () => {

const [headbg,setHeadbg]=useState(false)
const [togbar,setTogbar]=useState(false)

const Headbgcol=()=>{
  if(window.scrollY>10){
    setHeadbg(true)
  }
  else{
    setHeadbg(false)
  }

}

window.addEventListener("scroll",Headbgcol)
  return (
    
    <>
    <div className='toggle-head'>
    <a  data-scroll="" href="https://www.cyperts.net/" >
      <img src="https://blockchainerz.com/wp-content/uploads/2020/10/BC-3-1.png" className='logo-img' alt="Cyperts Digital Solutions"/></a>

    {
    togbar?
    <RxCross1 onClick={()=>setTogbar(false)} className='iconz'/>:
    <RiBarChartHorizontalLine  onClick={()=> setTogbar(true)} className='iconz'/>
    }

   </div>

    <div className={`${(headbg)?"head-cont bgcol":"head-cont"} ${(togbar)?"togg-bar":"togg-none"}`}>
      <a className="head-logo" data-scroll="" href="https://www.cyperts.net/" >
      <img src="https://blockchainerz.com/wp-content/uploads/2020/10/BC-3-1.png" alt="Cyperts Digital Solutions" style={{widht:"300px"}} /></a>
      
      <NavHeadLinks/>

    </div>
    </>
  )
}

export default NavHeadLogo
