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
                     <p>"Classifieds by Glignesis <br/>Technologies:Your trusted platform<br/> for seamless, secure buying and <br/>selling. User-friendly interface and <br/>seller ratings ensure a smooth<br/> marketplace experience."</p>
                     <button className="button">READ MORE</button>
                 </div>

                 <div className="card">
                     <h1 className="sub-head">POS APPLICATION</h1>
                     <p>"Glignesis Technologies' POS System:<br/> Your reliable solution for efficient and <br/>secure transactions. Streamlined <br/>interface and robust features <br/>guarantee a seamless point-of-sale <br/>experience."</p>
                     <button className="button" onClick={navigatePOS}>READ MORE</button>
                 </div>

                 <div className="card">
                     <h1 className="sub-head">E-COMMERCE</h1>
                     <p>"Glignesis Technologies' E-commerce<br/> Website: Your go-to destination for <br/>seamless online shopping. Intuitive <br/>interface and secure transactions for <br/>a hassle-free experience."</p>
                     <button className="button btn1">READ MORE</button>
                 </div>
                 </div>
            </div>

         
    )
    
}
export default Services;