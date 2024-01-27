import React from 'react'
import './newsletter.css'
function newsletter() {
  return (
    <div className='news'>
            <h1>Get Exclusive offers on your Email</h1>
            <p>Subscribe our newsletter and Stay updated</p>
            <div className='mails'>
                <input type="email" placeholder='your Email id' id="" />
                <button>Subscribe</button>
            </div>

    </div>
  )
}

export default newsletter