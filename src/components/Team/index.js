
import "./index.css";

const Team=()=>{
    return(
          <div className="team-cont">
              <h1>OUR TEAM</h1>
              <p className="team-para">"Meet our accomplished team at Glignesis Technologies, dedicated to innovation and excellence. With expertise spanning diverse domains, we deliver solutions that drive success."endisse vel, sed quam nulla mauris iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.</p>
             <div className="cards-cont">
              <div className="image-container">
                   <img src="https://glignesis.com/images/md.JPG" alt="img" className="image"/>
                   <h1 className="overlay-text">SATHYA SAI CHARAN<br/>FOUNDER & DIRECTOR</h1>
                   
              </div>

              

              <div className="image-container">
                   <img src="https://glignesis.com/images/kriti.jpg" alt="img" className="image"/>
                   <h1 className="overlay-text">KRITI<br/>CO-FOUNDER& DIRECTOR</h1>
                   
              </div>

              <div className="image-container">
                   <img src="https://glignesis.com/images/sivq.jpg" alt="img" className="image"/>
                   <h1 className="overlay-text">SHIVA SAI TEJA<br/>FLUTTER DEVELOPER</h1>
              </div>

              <div className="image-container">
                   <img src="https://glignesis.com/images/ravi.JPG" alt="img" className="image"/>
                   <h1 className="overlay-text">RAVI TEJA MEKALA<br/>BACK-END</h1>
              </div>

              <div className="image-container">
                   <img src="https://glignesis.com/images/sigguu.jpg" alt="img" className="image"/>
                   <h1 className="overlay-text">SIDDU PALITHYA<br/>WEB DEVELOPER</h1>
              </div>

              <div className="image-container">
                   <img src="https://glignesis.com/images/sharmishta.jpg" alt="img" className="image"/>
                   <h1 className="overlay-text">SHARMISHTA<br/>BACK END</h1>
              </div>

              

          </div> 
          
          </div>
      )
}
export default Team;