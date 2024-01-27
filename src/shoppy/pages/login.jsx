import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
 const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  axios.post("http://localhost:3000/data",formData)
  .then((res)=>{
    console.log(res);
   
  })
  navigate("/shop");
};


  return (
    <div className="login_container">
      <div className="login">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="login_fields">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Continue</button>
        </form>

        <p className="login_acc">
          Already have an Account?{' '}
          <Link style={{ textDecoration: 'none', color: '#ff4141' }} to="/">
            login here
          </Link>
        </p>
        <div className="signin">
          <input type="checkbox" name="" id="" />
          <p>I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
