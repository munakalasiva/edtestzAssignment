import React, { useState } from 'react';
import "./index.css";
import { useHistory } from "react-router-dom";

const Apply = () => {
  // State variables to store form data
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [graduation, setGraduation] = useState('');
  const [gender, setGender] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [resume, setResume] = useState('');
 
  const [jobPosition, setJobPosition] = useState('');
  
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here (e.g., sending data to backend)
    console.log('Form submitted:', { fullName, email, phoneNumber, graduation,gender, resume, jobPosition, yearsOfExperience, additionalInfo, agreeToTerms });
    // Reset form fields if needed
    // setFullName('');
    // setEmail('');
    // ...
  };

  const history=useHistory();
  const handleApplication=()=>{

      history.replace("/careers");
  }

  return (
    <div className="apy-container">
      <h2 className="heading">Job Application</h2>
      <form onSubmit={handleSubmit}>
        <div className="label-wrap">
            <label>Full Name<span className="star">*</span></label>
            <input className="apy-input" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>
        <br />
        
        <div className="label-wrap">
            <label>Email<span className="star">*</span></label>
            <input className="apy-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <br />
        
        <div className="label-wrap">
            <label>Phone Number<span className="star">*</span></label>
            <input className="apy-input" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <br />

        <div className="label-wrap">
            <label>Year Of Graduation<span className="star">*</span></label>
            <select className="apy-input select"  value={graduation} onChange={(e) => setGraduation(e.target.value)} required >
                  <option value="select year">select year</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  
            </select>
        </div>    
        <br />
        
        <div className="label-wrap">
            <label>Gender<span className="star">*</span></label>
            <select className="apy-input select" value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                
            </select>
          </div>
        <br />
        
        <div className="label-wrap">
            <label>Experiance in years<span className="star">*</span></label>
            <select className="apy-input select" value={yearsOfExperience} onChange={(e) => setYearsOfExperience(e.target.value)} required>
                <option value="">Select </option>
                <option value="fresher">Fresher</option>
                <option value="0-1">0-1</option>
                <option value="above one">Above one</option>
                
            </select>
          </div>
        <br />
        
        <div className="label-wrap">
        <label>Resume<span className="star">*</span></label>
        <input className="apy-input" type="file" accept=".pdf" onChange={(e) => setResume(e.target.files[0])} required />
        </div>
        <br />

    
        <div className="label-wrap">
            <label>Job Position<span className="star">*</span></label>
            <select className="apy-input select" value={jobPosition} onChange={(e) => setJobPosition(e.target.value)} required>
                <option value="">Select a position</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Fullstack Developer</option>
                
            </select>
          </div>  
        <br />
        
        <div className="label-wrap">
            <label>Additional Information<span className="star">*</span></label>
            <textarea  className="apy-input" value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} required />
        </div>    
        <br />
        
        <div className="checkbox">
            
            <input type="checkbox" checked={agreeToTerms} onChange={(e) => setAgreeToTerms(e.target.checked)} required />
            <label>I agree to the terms and conditions<span className="star">*</span></label>
        </div>
        <br />
        
        <button type="button" className="cancel-btn" onClick={handleApplication}>Cancel</button>
        <button type="submit" className="sub-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default Apply;
