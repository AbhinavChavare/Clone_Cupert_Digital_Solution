import React, { useEffect, useState } from 'react'
import "./HomeHeader.css"
import { BsArrowLeft ,BsArrowRight } from "react-icons/bs";
import HomeCont from '../HomeData/HomeCont';

const HomeHeader = () => {

const [show1,setShow1]=useState(false)

useEffect(()=>{
setInterval(() => {
  setTimeout(()=>{
    setShow1(true)

    setTimeout(()=>{
      setShow1(false)
      console.log(show1)
    },4000 )
  },4000 )

},8000);
},[])


  return (
    <>
     <section className='homeheader-cont'>
                <figure className={`${(show1)?"hide":"show"} `}>
                  <img src="https://www.cyperts.net/wp-content/uploads/2017/07/home_loans2_slider_slide1.jpg" className="img-responsive wp-post-image"/ >				
                    <div className="container">
                    <h1 >Dreams to Reality -<span >Creating history</span> from Day 1</h1> 
 <h2 >We can rhyme your content to the tune of audinece. <br/>Click to know more on <span>our success stories.</span></h2>       

              </div>
 <div className='arrow-cont'>
 <BsArrowLeft 
 onClick={()=>setShow1(!show1)} className='arrowicon' />
<BsArrowRight  onClick={()=>setShow1(!show1)}  className='arrowicon' />
</div>
                </figure>

                <figure className={`${(show1)?"show":"hide"} `} >
                  <img src="https://www.cyperts.net/wp-content/uploads/2017/07/slide2-1.jpg" className="img-responsive wp-post-image"/ >				
                  <div className="container">
                    <h1 >Traffic is <span >good</span> but conversion are<span> great</span></h1>
 <h2 >we are the  <span>magician</span> who will reincarnate your brand <br/> presence in the virtual world using <span>white-Hat techniques.</span></h2>       

              </div>
 <div className='arrow-cont'>
 <BsArrowLeft 
 onClick={()=>setShow1(!show1)} className='arrowicon' />
<BsArrowRight  onClick={()=>setShow1(!show1)}  className='arrowicon' />
</div>
                </figure>


                <HomeCont/>
              		
         
                     </section>
    </>
  )
}

export default HomeHeader
