import { useHistory } from "react-router-dom";
import "./index.css"

const Services=()=>{

    const history=useHistory();
    const navigatePOS=()=>{
         history.replace("/moreaboutpos");
     }
    
    return(
        
            <div className="bg-container">
                <h1 className="head">OUR PRODUCTS</h1>
                 <div className="adj">
                 <div className="card">
                     <h1 className="sub-head">CLASSIFIEDS</h1>
                     <p>"Classifieds by Glignesis Technologies:Your trusted platform for seamless, secure buying and selling. User-friendly interface and seller ratings ensure a smooth marketplace experience."</p>
                     <button className="button">Disable</button>
                 </div>

                 <div className="card">
                     <h1 className="sub-head">ScanBreezePOS</h1>
                     <p>"Glignesis Technologies' ScanBreezePOS System: Your reliable solution for efficient and secure transactions. Streamlined interface and robust features guarantee a seamless point-of-sale experience."</p>
                     <button className="button" onClick={navigatePOS}>READ MORE</button>
                 </div>

                 <div className="card">
                     <h1 className="sub-head">E-COMMERCE</h1>
                     <p>"Glignesis Technologies' E-commerce Website: Your go-to destination for seamless online shopping. Intuitive interface and secure transactions for a hassle-free experience."</p>
                     <button className="button">Disable</button>
                 </div>
                 </div>
            </div>

         
    )
    
}
export default Services;