import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";
import loginImg from "../../11668754_20945760.jpg"
import "./index.css";


const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const history=useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }

    try {
      const response = await axios.post('https://myapi-4.onrender.com/users/', {
        id: Date.now(),  // Generating a unique ID for the user
        username,
        password,
      });

      if (response.status === 201 || response.status === 200) {
        setSuccess('Registration successful!');
        
        history.replace("/login");
      } else {
        setError('Registration failed.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const navigateLogin=()=>{
    history.replace("/login")
  }

  return (
    <div className="signup-container">
      
      <img
          src={loginImg}
          className="login-website-logo"
          alt="website logo"
        />
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="signup-adj">
          <h1>Sign Up</h1>
          <div className="navigation">
            <p>Already have an account?</p>
            <button type="button" onClick={navigateLogin}>sign in</button>
        </div>
        </div>  
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;