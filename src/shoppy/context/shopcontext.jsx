import React, { createContext, useState } from 'react';
import productData from '../productdetails';

export const ShopContext = createContext(null);

const defaultCart = () => {
  const cart = {};
  for (let index = 0; index < productData.length; index++) {
    cart[productData[index].id] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(defaultCart());

  const addToCart = (item) => {
    setCartItems((prev) => ({ ...prev, [item.id]: prev[item.id] + 1 }));
  };

  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const clearCart = (item) => {
    setCartItems((prev)=>({...prev,[item]:prev[item]*0}));
  }

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };
  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((totalAmount, itemId) => {
      if (cartItems[itemId] > 0) {
        const itemInfo = productData.find((product) => product.id === itemId);
        if (itemInfo) {
          totalAmount += (itemInfo.offerprice * cartItems[itemId]);
        }
      }
      return totalAmount;
    }, 0);
  };
  

  const getGrandTotal = () => {
     return Object.keys(cartItems).reduce((grandTotal,itemId)=>{
      if(cartItems[itemId]>0){
        const discItem =productData.find((product)=>product.id === itemId);
        grandTotal+=(discItem.offerprice*cartItems[itemId])+discItem.delivery;

      }
      return grandTotal;
     },0)
  
    
  };
  

  const ContextValue = {
    productData,
    cartItems,
    removeToCart,
    addToCart,
    getTotalCartItems,
    getTotalCartAmount,
    clearCart,
    getGrandTotal
  };

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
