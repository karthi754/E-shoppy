import React from 'react'
import './buy.css'
import { useContext } from 'react'
import { ShopContext } from '../context/shopcontext'
import { FaRupeeSign } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Buyproduct = () => {
  const navigate =useNavigate();
 
  const {productData, cartItems, getTotalCartAmount, getGrandTotal,getTotalCartItems}= useContext(ShopContext);
   const buyalert=()=>{
    if(getTotalCartItems>0){
      alert("your product will be place");
      navigate('/shop');
     
    }
  }
  return (
    <div>
       <div className="buyproducts">
        <div className="detail_box">
            {productData.map((item,index)=>{
              if(cartItems[item.id]>0){
                return(
                  <div className="card_box" key={index}>
                   <div className="product_image">
                   <img src={item.image} alt="" />
                   </div>
  
                  <div>
                  <div className="name1">
                    <p>{item.name}</p>
                   </div>
                   <div className="price">
                    <p><FaRupeeSign/>{item.offerprice}</p>
                   </div>
                   <div className="pra">
                   <p>All issue easy returns allowed</p>
                   </div>
                   <hr />
                   <div className="qtty">
                    <p>Qty :</p>
                    <p>{cartItems[item.id]}</p>
                   </div>
                  </div>
                  </div>
                  
                  )
              }
              return null;
             
            })}
           <div className="qty_count">
            <p>Total Quantity : </p>
            <p>{getTotalCartItems()}</p>
           </div>
        </div>
       
            <div className="adderss_detail">
              <div className="address_box">
              <div className="headt">
              <p>Price Details</p>
              </div>
                <div className="total">
                 
                  <p>Total product price</p>
                  <p><FaRupeeSign/>{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="grd_total">
                  <p>Order Total</p>
                  <p><FaRupeeSign/>{getGrandTotal()}</p>
                </div>
              </div>
              <div className="quote">
                <button onClick={()=>buyalert()}>Place Order</button>
              </div>
            </div>
            </div>
    </div>
  )
}

export default Buyproduct