import { FaRupeeSign } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import "./index.css";
const MorePOS=()=>{
      return(
        <div className="posContainer">
          <div className="content">
              <h1 className="subs-head">WELCOME TO SCAN BREEZE POS</h1>
              <p>Scan breeze POS is the next-generation point-of-sale sysytem designed to streamline your retail operations and enhance your customer experiance.Whether you run a small boutique or a large retail chain, our innovative solution provides all the tools you need to manage your business efficiently.</p>
          </div>

          <div className="content">
              <h1 className="subs-head">GET STARTED TODAY</h1> 
              <p>Experience the power of Scan breeze POS and take your retail business to the next level.Contact us for a free demo and see how our system can revolutionize your operations. </p>
          </div>

        <div className="wrap-cards">
            <div className="subscription-card">
                <h1 class="title">Join Our Subscription Program!</h1>
                <h1><FaRupeeSign />3000</h1> 
                <p>/Month</p>
                <button>
                    <span class="transition"></span>
                    <span class="gradient"></span>
                    <span class="label">Subscribe</span>
                </button>

            </div>

            <div className="subscription-card">
                <h1 class="title">Join Our Subscription Program!</h1>
                <h1><FaRupeeSign />15000</h1> 
                <p>/6Month</p>
                <button>
                    <span class="transition"></span>
                    <span class="gradient"></span>
                    <span class="label">Subscribe</span>
                </button>

            </div>
            
            <div className="subscription-card">
                <h1 class="title">Join Our Subscription Program!</h1>
                <h1><FaRupeeSign />25000</h1> 
                <p>/Year</p>
                <button>
                    <span class="transition"></span>
                    <span class="gradient"></span>
                    <span class="label">Subscribe</span>
                </button>

            </div>
        </div> 

        <div className="content">
            <h1 className="subs-head">KEY FEATURES</h1>
            <p><FaCheck /> QR Code Scanning</p>
            <p><FaCheck /> Inventory Management</p>
            <p><FaCheck /> Sales Analytics</p>
            <p><FaCheck /> User-Friendly Interface</p>
            <p><FaCheck /> Customer Relationship Management(CRM)</p>
            <p><FaCheck /> Multi-Store Management</p>
            <p><FaCheck /> Secure Payments</p>    
                
            
        </div>
        
    </div>
      )
}
export default MorePOS