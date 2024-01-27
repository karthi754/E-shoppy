import React, { useState, useEffect, useContext } from 'react';
import './item.css';
import { FaStar, FaRupeeSign } from 'react-icons/fa';
import productData from '../productdetails'; 
import { ShopContext } from '../context/shopcontext';

export const MenItems = () => { 
  const [productList, setProductList] = useState([]);
  const { addToCart } = useContext(ShopContext);

  useEffect(() => {
    const menProducts = productData.filter(item => item.category === 'men');
    setProductList(menProducts);
  }, []);

  return (
    <div>
       <div className="head">
      <p>Exclusive...!! </p>
       <p>Products for Mens</p>
       <hr />
      </div>
      <div className="product">
        {productList.map((item, index) => (
          <div className='cards' key={index}>
            <img src={item.image} alt={item.name} />
            <p className='Pname'>{item.name}</p>
            <span className='rating'>{item.ratings}<FaStar /><p> Ratings</p></span>
            <div className='Pr_price'>
              <p><span><FaRupeeSign/></span>{item.offerprice}</p>
             
              <s><span><FaRupeeSign/></span>{item.orginalPrize}</s>
            </div>
            <div className="cart">
              <button className='cart_btn' onClick={() => addToCart(item)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};




export const WomenItems =()=>{
const [productList, setProductList] = useState([]);
const {addToCart}=useContext(ShopContext)
  useEffect(() => {
    const womenProducts = productData.filter(item => item.category === 'womens');
    setProductList(womenProducts);
  }, []);
    return(
      <div>
         <div className="head">
      <p>Exclusive...!! </p>
       <p>Products for Womens</p>
       <hr />
      </div>
      <div className="product">
        {productList.map((item, index) => (
          <div className='cards' key={index}>
            <img src={item.image} alt={item.name} />
            <p className='Pname'>{item.name}</p>
            <span className='rating'>{item.ratings}<FaStar /><p> Ratings</p></span>
            <div className='Pr_price'>
              <p><span><FaRupeeSign/></span>{item.offerprice}</p>
              
              <s><span><FaRupeeSign/></span>{item.orginalPrize}</s>
            </div>
            <div className="cart">
              <button className='cart_btn' onClick={() => addToCart(item)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}

export const KidsItem=()=>{
  const [productList, setProductList] = useState([]);
  const {addToCart}=useContext(ShopContext)

  useEffect(() => {
    const kidsProducts = productData.filter(item => item.category === 'kids');
    setProductList(kidsProducts);
  }, []);

  return(
    <div>
        <div className="head">
      <p>Exclusive...!! </p>
       <p>Products for Kids</p>
       <hr />
      </div>
    <div className="product">
      {productList.map((item, index) => (
        <div className='cards' key={index}>
          <img src={item.image} alt={item.name} />
          <p className='Pname'>{item.name}</p>
          <span className='rating'>{item.ratings}<FaStar /><p> Ratings</p></span>
          <div className='Pr_price'>
            <p><span><FaRupeeSign/></span>{item.offerprice}</p>
           
            <s><span><FaRupeeSign/></span>{item.orginalPrize}</s>
          </div>
          <div className="cart">
            <button className='cart_btn' onClick={() => addToCart(item)}>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export const OfferItems=()=>{
  const [productList, setProductList] = useState([]);
  const {addToCart}=useContext(ShopContext)

  useEffect(() => {
    const offerProducts = productData.filter(item => item.category === 'offer');
    setProductList(offerProducts);
  }, []);

  return(
    <div>
      <div className="head">
      <p>Exclusive...!! </p>
       <p>Offers for you</p>
       <hr />
      </div>
    <div className="product">

      {productList.map((item, index) => (
        <div className='cards' key={index}>
          <img src={item.image} alt={item.name} />
          <p className='Pname'>{item.name}</p>
          <span className='rating'>{item.ratings}<FaStar /><p> Ratings</p></span>
          <div className='Pr_price'>
            <p><span><FaRupeeSign/></span>{item.offerprice}</p>
           
            <s><span><FaRupeeSign/></span>{item.orginalPrize}</s>
          </div>
          <div className="cart">
            <button className='cart_btn' onClick={() => addToCart(item)}>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export const LatestItems=()=>{
  const [productList, setProductList] = useState([]);
  const {addToCart}=useContext(ShopContext)

  useEffect(() => {
    const offerProducts = productData.filter(item => item.category === 'latest');
    setProductList(offerProducts);
  }, []);

  return(
    <div>
      <div className="head">
      
      <p>Latest Collections...!  </p>
       <hr />
      </div>
    <div className="product">
      {productList.map((item, index) => (
        <div className='cards' key={index}>
          <img src={item.image} alt={item.name} />
          <p className='Pname'>{item.name}</p>
          <span className='rating'>{item.ratings}<FaStar /><p> Ratings</p></span>
          <div className='Pr_price'>
            <p><span><FaRupeeSign/></span>{item.offerprice}</p>
           
            <s><span><FaRupeeSign/></span>{item.orginalPrize}</s>
          </div>
          <div className="cart">
            <button className='cart_btn' onClick={() => addToCart(item)}>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}