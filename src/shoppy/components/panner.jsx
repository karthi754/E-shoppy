import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import './panner.css'
import Model from '../images/model.png'
import { Link } from 'react-router-dom'
function panner() {
    const username = localStorage.getItem('username')
  return (
    <div>
        <div className="panner_container">
            <div className="panner_left">
                <h2>Haii {username}...!!!</h2>
                <div className="contant">
                    <p>NEW COLLECTIONS</p>
                    <p>For everyone</p>
                </div>
                
                <div className="latest">
                   <Link to={"/latest"} style={{textDecoration:"none",color:"white"}}> Latest Collections <FaArrowAltCircleLeft/></Link>
                </div>
            </div>
            <div className="panner_right">
                <img src={Model} className='model' alt="" />
            </div>
        </div>



    </div>
  )
}

export default panner