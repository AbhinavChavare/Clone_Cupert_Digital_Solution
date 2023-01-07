import React from 'react'

const Contact = () => {
  return (
    <div>
      <h2>Contact ....</h2>

      <div className='choose-sec'>

        <form action="/#wpcf7-f1107-o1">
          <div className='contact-cont'>
            <div>
              <input id='fname' placeholder='Your Name'></input></div>
            <div className='contact-email'>
              <input id='email' placeholder='Your Email'></input>
            </div>
          </div>
          <textarea rows={5} placeholder='Your message here...'></textarea>

          <div className='contact-btn'>
            <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
