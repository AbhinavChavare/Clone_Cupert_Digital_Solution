import React, { useState } from 'react'
import NavHeadLinks from './NavHeadLinks'
import "./HeaderNav.css"
import { FaBars,FaTimes } from "react-icons/fa";


const NavHeadLogo = () => {

const [headbg,setHeadbg]=useState(false)
const [animate,setAnimate]=useState(false)
const [togbar,setTogbar]=useState(false)

const Headbgcol=()=>{
  if(window.scrollY>10){
    setHeadbg(true)
  }
  else{
    setHeadbg(false)
  }
  
//   const anima=(anim)=>{
//   if(window.scrollY>anim)
// const [animate,setAnimate]=useState(false)
//   return ;
//   }

}

window.addEventListener("scroll",Headbgcol)
  return (
    
    <>
    <div className='toggle-head'>
    <a  data-scroll="" href="https://www.cyperts.net/" >
      <img src="http://cyperts.net/wp-content/uploads/2017/07/cyperts-logos.png" alt="Cyperts Digital Solutions"/></a>
    {
    togbar?
    <FaTimes onClick={()=>setTogbar(false)} className='iconz'/>:
    <FaBars  onClick={()=> setTogbar(true)} className='iconz'/>
    }

   </div>

    <div className={`${(headbg)?"head-cont bgcol":"head-cont"} ${(togbar)?"togg-bar":"togg-none"}`}>
      <a className="head-logo" data-scroll="" href="https://www.cyperts.net/" >
      <img src="http://cyperts.net/wp-content/uploads/2017/07/cyperts-logos.png" alt="Cyperts Digital Solutions"/></a>
      
      <NavHeadLinks/>

    </div>
    </>
  )
}

export default NavHeadLogo
