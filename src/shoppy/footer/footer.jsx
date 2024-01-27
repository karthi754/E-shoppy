import React from 'react'
import './footer.css'
import Logo from '../images/logo.png'
import {FaInstagram,FaFacebook,FaWhatsapp} from 'react-icons/fa'
function footer() {
  return (
    <div className='footer_cont'>
         <div className="footer">
            <img className='logopic' src={Logo} alt="" />
            <h2>SHOPPER</h2>
         </div>
         <div className="contact">
            <ul>
                <li>Company</li>
                <li> products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
         </div>
         <div className="logos">
           <span>
            <FaInstagram/>
          </span>
            <span>
                <FaFacebook/>
            </span>
            <span>
                <FaWhatsapp/>
            </span>
            
         </div>
         <hr />
         <div className="copyright">
            Copyright @ 2023 -  All Right Reserved
         </div>
    </div>
  )
}

export default footer