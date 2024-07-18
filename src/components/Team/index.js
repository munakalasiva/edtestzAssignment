
import React from 'react';
import  pic1 from "../../cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign.jpg";
import pic2 from "../../pleasant-looking-caucasian-female-with-long-hair-wearing-yellow-casual-shirt-having-good-mood-looking-happily-camera.jpg";
import pic3 from "../../young-bearded-man-with-striped-shirt.jpg";

import "./index.css";

const Team=()=>{
    return(
          <div className="team-cont">
              <h1>OUR TEAM</h1>
              <p className="team-para">"Meet our accomplished team at Glignesis Technologies, dedicated to innovation and excellence. With expertise spanning diverse domains, we deliver solutions that drive success."endisse vel, sed quam nulla mauris iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.</p>
             <div className="team-cards">
              <div className="image-container">
                   <img src={pic1} alt="img" className="image"/>
                   <h1 className="overlay-text">John abraham<br/>FOUNDER & DIRECTOR</h1>
                   
              </div>

              

              <div className="image-container">
                   <img src={pic2} alt="img" className="image"/>
                   <h1 className="overlay-text">Lusi frista<br/>CO-FOUNDER& DIRECTOR</h1>
                   
              </div>

              <div className="image-container">
                   <img src={pic3} alt="img" className="image"/>
                   <h1 className="overlay-text">David fereri<br/>FLUTTER DEVELOPER</h1>
              </div>

              
              <div className="image-container">
                   <img src={pic3} alt="img" className="image"/>
                   <h1 className="overlay-text">mike vegista<br/>BACK END</h1>
              </div>

              <div className="image-container">
                   <img src={pic1} alt="img" className="image"/>
                   <h1 className="overlay-text">Watson mitti<br/>WEB DEVELOPER</h1>
              </div>

              <div className="image-container">
                   <img src={pic2} alt="img" className="image"/>
                   
                   <h1 className="overlay-text">rose mavasi<br/>BACK-END</h1>
              </div>

          </div> 
          
          </div>
      )
}
export default Team;