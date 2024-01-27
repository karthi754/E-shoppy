import React, { useContext} from 'react';
import { ShopContext } from '../context/shopcontext';
import { FaTrash, FaRupeeSign } from 'react-icons/fa';
import './cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { productData, cartItems, removeToCart, addToCart, getTotalCartAmount, clearCart } = useContext(ShopContext);
 

  return (
    <div className="cartitems">
      <div className="cart1">
        <table className="cartitems_format_main">
          <thead>
            <tr>
              <th>Product</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product) => {
              if (cartItems[product.id] > 0) {
                return (
                  <tr key={product.id}>
                    <td>
                      <img src={product.image} className="productimg" alt={product.name} />
                    </td>
                    <td>
                      <p>{product.name}</p>
                    </td>
                    <td>
                      <p className="cost"><FaRupeeSign/>{product.offerprice}</p>
                    </td>
                    <td>
                      <button className='add' onClick={() => addToCart(product)}>+</button>
                      <span className="count">{cartItems[product.id]}</span>
                      <button className='minas' onClick={() => removeToCart(product.id)}>-</button>
                    </td>
                    <td><FaRupeeSign/>{(product.offerprice * cartItems[product.id])}</td>
                    <td>
                      <span className="remove" onClick={() => clearCart(product.id)}>
                        <FaTrash />
                      </span>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
     <div className="check_down">
     <div className="cart_down">
        <div className="cartItem_total">
          <h1>Cart Total</h1>
          <hr />
          <div>
            <div className="total_item">
              <h3>Sub Total</h3>
              <p><FaRupeeSign/>{getTotalCartAmount()}</p>
            </div>
            <hr />
          </div>
          <div className="shiping">
            <h3>Shipping fee</h3>
            <p>Free</p>
          </div>
          <hr />
          <div className="cart_total_items">
            <h3>Total</h3>
            <h3><FaRupeeSign/>{getTotalCartAmount()}</h3>
          </div>

          <button ><Link to={"/order"} style={{textDecoration:"none",color:"#ddd"}}>Check out</Link></button>
        </div>
      </div>
            
        
      
     </div>
    </div>
  );
};

export default Cart;
