import React, { useState, useEffect } from 'react';
import './signin.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signin = ({handleSignInSuccess}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [datas, setDatas] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    axios.get("http://localhost:3000/data")
      .then((res) => {
        console.log("Data fetched successfully", res);
        setDatas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      const user = datas.find((user) => user.email === email && user.password === password);
      if (user) {
        
        var nameUser= user.name
        handleSignInSuccess(nameUser)
        navigate("/shop");
        console.log('Login successful for user:', nameUser);
      } else {
        alert('Login failed. Invalid email or password.');
      }
    } else {
      alert('Please provide both email and password.');
    }
  };

  return (
    <div>
      <div className="sign_cont">
        <div className="signin_page">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="signin_fields">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="submit_cont">
              <p>Forgot Password?</p>
              <button type="submit">Submit</button>
            </div>
          </form>

          <p>
            I don't have an account{' '}
            <Link style={{ textDecoration: "none", color: "#ff4141" }} to="/login">
              signup here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
