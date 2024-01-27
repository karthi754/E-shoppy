import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './shoppy/navbar/navbar';
import Shop from './shoppy/pages/shop';
import Category from './shoppy/pages/category';
import Cart from './shoppy/pages/cart';
import Footer from './shoppy/footer/footer';
import Male from './shoppy/images/male.png';
import Female from './shoppy/images/female.png';
import Kids from './shoppy/images/kids.png';
import Buyproduct from './shoppy/pages/buyproduct';
import Login from './shoppy/pages/login';
import Signin from './shoppy/pages/signin';
import { OfferItems, LatestItems } from './shoppy/components/items';
import Place from './shoppy/pages/place';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const handleSignInSuccess = (userName) => {
    console.log(userName);
    setIsAuthenticated(true);
    localStorage.setItem("username",userName)
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/" element={<Signin handleSignInSuccess={handleSignInSuccess}  />} />
          <Route path="/shop" element={isAuthenticated ? <Shop /> : <Navigate to="/" />} />
          <Route path="/mens" element={isAuthenticated ? <Category banner={Male} category="mens" /> : <Navigate to="/" />} />
          <Route path="/womens" element={isAuthenticated ? <Category banner={Female} category="womens" /> : <Navigate to="/" />} />
          <Route path="/kids" element={isAuthenticated ? <Category banner={Kids} category="kids" /> : <Navigate to="/" />} />
          <Route path="/cart" element={isAuthenticated ? <Cart /> : <Navigate to="/" />} />
          <Route path="/login" element={ <Login /> } />
          <Route path="/offer" element={isAuthenticated ? <OfferItems /> : <Navigate to="/" />} />
          <Route path="/latest" element={isAuthenticated ? <LatestItems /> : <Navigate to="/" />} />
          <Route path="/order" element={isAuthenticated?<Buyproduct/>:<Navigate to="/" />}/>
          <Route path='/empty' element={isAuthenticated?<Buyproduct/>: <Navigate to="/" />}/>
          <Route path='/place' element={<Place/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
