import React from 'react';
import './category.css';
import { MenItems, WomenItems, KidsItem } from '../components/items';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Category(props) {
  return (
    <div>
      <div className="banner">
        <img src={props.banner} alt="" className='banner_p' />
        <div className="content">
          <h1>FLAT 25% OFFER</h1>
          <p>All brands are available</p>
          <span className='time'>
            <p>12</p>hours <p>45</p>mins
          </span>
          <button className='explore'>
            <Link style={{textDecoration:"none",color:'white'}} to={"/offer"}>Explore</Link>
            <span><FaArrowAltCircleRight /></span>
          </button>
        </div>
      </div>

      {props.category === 'mens' && <MenItems />}
      {props.category === 'womens' && <WomenItems />}
      {props.category === 'kids' && <KidsItem />}
      
    </div>
  );
}

export default Category;
