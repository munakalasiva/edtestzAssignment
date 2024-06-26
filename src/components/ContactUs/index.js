import React, { useState } from 'react';
import "./index.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="bg-cont">
    <h1>GET IN TOUCH</h1>  
    <div className="form"> 
    <form onSubmit={handleSubmit}>
      <div>
       
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='NAME'
          className="input-field"
        />
      </div>
      <div>
        
        <input
          type="text"
          name="email"
          placeholder='EMAIL'
          value={formData.email}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div>
        
        <input
          type="tel"
          name="phonenumber"
          placeholder='PHONE NUMBER'
          value={formData.phonenumber}
          onChange={handleChange}
          className="input-field"
          pattern="[0-9]*"
        />
      </div>
      <div>
        
        <textarea
          
          name="message"
          placeholder='MESSAGE'
          value={formData.message}
          onChange={handleChange}
          className='input-field msg'
        />
      </div>
      <button type="submit" className="btn">SUBMIT</button>
    </form>
    </div> 
    </div>
  );
};

export default ContactUs;
