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
     
     return(
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
                <input type="text" placeholder="Enter Your email" className="foo-input"/>
                <button className="foo-btn" onClick={handleLocation}><FaLocationDot /> Google map link</button>
                <div className="bottom-icons">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <TfiYoutube />
                </div>
            </div>

        </div>
     )
}
export default Footer;