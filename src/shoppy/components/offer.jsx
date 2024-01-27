import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import './offers.css'
import offers from '../images/offer.png'
import { Link } from 'react-router-dom'
const offer = () => {
  return (
    <div className='offer_main'>
            <div className="offer_cont">
                <div className="offer_left">
                    <h1>Exclusive...!! </h1>
                    <h1>Offers for you</h1>
                    <p>ONLY ON BEST SELLER PRODUCT</p>
                    <button> <Link to={"/offer"} style={{textDecoration:"none",color:"white"}}>Check now <FaArrowAltCircleLeft/></Link></button>
                </div>
                <div className="offer_right">
                    <img src={offers} alt="" />
                </div>
            </div>

    </div>
  )
}

export default offer