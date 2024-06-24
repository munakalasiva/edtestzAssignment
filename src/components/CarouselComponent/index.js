import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { useHistory } from "react-router-dom";

function CarouselComponent() {

  const history=useHistory();
  const handleApply=()=>{
       history.replace("/careers");
   }

 const navigateExplore=()=>{
       history.replace("/explore");
 }  
  return (
    <Carousel>
      
      <Carousel.Item>
        <img src="https://img.freepik.com/free-photo/look-this-group-young-people-casual-clothes-working-modern-office_146671-16519.jpg?t=st=1719220900~exp=1719224500~hmac=9d5be5a756aeee2bc63a3ef1ec6f7ccb4bf6e1aa493e5e533478f82aec70f335&w=1060" alt="img" style={{height:"90vh"}} className="d-block w-100"/>
        <Carousel.Caption className="custome-caption">
          <div className="wrap">
            <h3 className='custom-heading'>WELCOME TO GLIGNESIS<br/> TECHNOLOGIES<br/> PVT LTD</h3>
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
      <img src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241221.jpg?t=st=1719221655~exp=1719225255~hmac=fae1a70bb6a000cd02c3c882a4e9c78cd807743795096c88cdac37e62739be27&w=1060" alt="img" style={{height:"90vh"}} className="d-block w-100"/>
        <Carousel.Caption className="custome-caption">
        <div className="wrap">
            <h3 className='custom-heading'>WELCOME TO GLIGNESIS<br/> TECHNOLOGIES<br/> PVT LTD</h3>
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
      <img src="https://img.freepik.com/free-photo/person-working-html-computer_23-2150038840.jpg?t=st=1719220027~exp=1719223627~hmac=c0186cea0647bd872e03bdcc532a69721cb1b28e416ce9a456a433d18fbbb964&w=1060" alt="img" style={{height:"90vh"}} className="d-block w-100"/>
        <Carousel.Caption className="custome-caption">
        <div className="wrap">
            <h3 className='custom-heading'>WELCOME TO GLIGNESIS<br/> TECHNOLOGIES<br/> PVT LTD</h3>
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