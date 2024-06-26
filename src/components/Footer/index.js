import React, { useState } from 'react';
import "./index.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

import { useHistory } from "react-router-dom";

const Footer=()=>{
    const history=useHistory();
    const handleLocation=()=>{
         history.replace("/location");
     }

    const navigatePrivacyPolicy=()=>{
          history.replace("/privacypolicy");
    }  

    const navigateTerms=()=>{
          history.replace("/termsofuse");
    }

    const[mail,setMail]=useState("");
    const handleChange = (event) => {
        const value = event.target.value;
        setMail(value);
        console.log(mail);
      };
     
     return(
        <div className="footer-container">
        <div className="footer">

            <div className="sheet">
                <h1 className="foo-hea">Products</h1>

                <p>POS system</p>
                <p>E-Commerce</p>
                <p>Classifieds</p>
            </div>

            <div className="sheet">
                <h1 className="foo-hea">Services</h1>

                <p>Web-development</p>
                <p>APP development</p>
                <p>UI/UX designing</p>
            </div>

            <div className="sheet">
                <h1 className="foo-hea">Contact us</h1>
                <div className="icon-wrap">
                    <FaLocationDot className="icon"/> 
                    <p>Hi-tech city</p>
                </div>
                <div className="icon-wrap">
                    <IoCall className="icon"/>
                    <p>Call: +918897756444</p>
                </div>
                <div className="icon-wrap">
                      <MdEmail className="icon"/>
                      <p>info@glignesis.com</p>
                </div>
            
            </div>

            <div className="sheet">
                <h1 className="foo-hea">Visit us</h1>
                <input type="text" placeholder="Enter Your email" className="foo-input" value={mail} onChange={handleChange}/>
                <button className="foo-btn" onClick={handleLocation}><FaLocationDot /> Google map link</button>
                <div className="bottom-icons">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <TfiYoutube />
                </div>
            </div>
        </div>
            <div className="footer-para">
                <p>Copyright © GLIGNESIS Technologies Pvt Ltd. All rights reserved</p>
                <p className="para-foo" onClick={navigatePrivacyPolicy}>Privacy Policy</p>
                <p className="para-foo" onClick={navigateTerms}>Terms Of Conditions</p>
            </div>  
        </div>
     )
}
export default Footer;