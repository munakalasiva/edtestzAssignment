import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { useHistory } from "react-router-dom";

function CarouselComponent() {

  const history=useHistory();
  const handleApply=()=>{
       history.replace("/careers");
   }
  return (
    <Carousel>
      
      <Carousel.Item>
        <img src="https://png.pngtree.com/thumb_back/fw800/back_pic/03/54/43/65579a13a28934a.jpg" alt="img" style={{height:"90vh"}} className="d-block w-100"/>
        <Carousel.Caption className="custome-caption">
          <div className="wrap">
            <h3 className='custom-heading'>WELCOME TO GLIGNESIS<br/>TECHNOLOGIES <br/>PVT LTD</h3>
            <button class="boton-elegante" onClick={handleApply}>Explore</button>

          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://wallpaperaccess.com/full/2482245.jpg" alt="img" style={{height:"90vh"}} className="d-block w-100"/>
        <Carousel.Caption className="custome-caption">
        <div className="wrap">
            <h3 className='custom-heading'>WELCOME TO GLIGNESIS<br/>TECHNOLOGIES <br/>PVT LTD</h3>
            <button class="boton-elegante" onClick={handleApply}>Explore</button>
        </div>    
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://media.istockphoto.com/vectors/abstract-polygonal-futuristic-concept-background-vector-id1135024469?k=20&m=1135024469&s=612x612&w=0&h=zcEg4ovDzxUhed9aUgJruXtA_sdAqD_63nzX0w5gdMQ=" alt="img" style={{height:"90vh"}} className="d-block w-100"/>
        <Carousel.Caption className="custome-caption">
        <div className="wrap"> 
          <h3 className='custom-heading'>WELCOME TO GLIGNESIS<br/>TECHNOLOGIES <br/>PVT LTD</h3>
          <button class="boton-elegante" onClick={handleApply}>Explore</button>
        </div>  
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselComponent;