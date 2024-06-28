import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { useHistory } from "react-router-dom";

import image3 from "../../images/man-working-night.jpg";
import image1 from "../../images/html-css-collage-concept-with-person (1).jpg";
import image2 from "../../images/woman-office.jpg";


function CarouselComponent() {

  const history=useHistory();
  const handleApply=()=>{
       history.replace("/careers");
   }

 const navigateExplore=()=>{
       history.replace("/explore");
 }  
  return (
    <Carousel interval={2000} slide={true}>
      
      <Carousel.Item>
        <img src={image1} alt="img" style={{height:"90vh"}} className="d-block w-100 carousel-img"/>
        <Carousel.Caption className="custome-caption">
          <div className="wrap">
            <h3 className='custom-heading'>WELCOME TO GLIGNESIS TECHNOLOGIES PVT LTD</h3>
            <div>
              <p className="home-para">At Glignesis Technologies Pvt. Ltd., we specialize in developing innovative mobile applications and websites that cater to diverse needs. Our expertise lies in crafting our own unique products that push the boundaries of technology and user experience. As a leading third-party platform and software provider, we offer comprehensive solutions that integrate seamlessly into your business operations.</p>
              <div className="btn-sty">
                <button class="boton-elegante" onClick={handleApply}>Careers</button>
                <button class="boton-elegante" onClick={navigateExplore}> Explore</button>
              </div>
            </div>
            

          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={image2} alt="img" style={{height:"90vh"}} className="d-block w-100  carousel-img"/>
        <Carousel.Caption className="custome-caption">
        <div className="wrap">
            <h3 className='custom-heading'>WELCOME TO GLIGNESIS TECHNOLOGIES PVT LTD</h3>
            <div>
              <p className="home-para">At Glignesis Technologies Pvt. Ltd., we specialize in developing innovative mobile applications and websites that cater to diverse needs. Our expertise lies in crafting our own unique products that push the boundaries of technology and user experience. As a leading third-party platform and software provider, we offer comprehensive solutions that integrate seamlessly into your business operations.</p>
              <div className="btn-sty">
                <button class="boton-elegante" onClick={handleApply}>Careers</button>
                <button class="boton-elegante" onClick={navigateExplore}>Explore</button>
              </div>
            </div>
            

          </div>    
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={image3} alt="img" style={{height:"90vh"}} className="d-block w-100 carousel-img"/>
        <Carousel.Caption className="custome-caption">
        <div className="wrap">
            <h3 className='custom-heading'>WELCOME TO GLIGNESIS TECHNOLOGIES PVT LTD</h3>
            <div>
              <p className="home-para">At Glignesis Technologies Pvt. Ltd., we specialize in developing innovative mobile applications and websites that cater to diverse needs. Our expertise lies in crafting our own unique products that push the boundaries of technology and user experience. As a leading third-party platform and software provider, we offer comprehensive solutions that integrate seamlessly into your business operations.</p>
              <div className="btn-sty">
                  <button class="boton-elegante" onClick={handleApply}>Careers</button>
                  <button class="boton-elegante" onClick={navigateExplore}>Explore</button>
              </div>
            </div>
            

          </div> 
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselComponent;