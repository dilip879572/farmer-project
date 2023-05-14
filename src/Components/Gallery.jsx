import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
function Gallery() {
  useEffect(() => {
    AOS.init({
        duration: 2000,
    })
}, [])
  return (
    <div>
     <center>
                <span style={{ color: "green", fontFamily: "bold", fontSize: "30px", wordSpacing:"20px"}}>GALLERY</span>  <br />
                <span style={{ color: "red", fontFamily: "impact", fontSize: "50px" }}>Organic produce to  <br />
                Customer  </span>
            </center>
      <div className='row'>
        <div className='col-sm-3'>
          <img src="./images/r1.jpg"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" style={{height:"320px",width:"320px",boxShadow:"0px 0px 2px 3px black"}}/>
        </div>
        <div className='col-sm-3'>
          <img src="./images/r2.jpg" data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" style={{height:"320px",width:"320px",boxShadow:"0px 0px 3px 4px black"}}/>
        </div>
        <div className='col-sm-3'>
        <img src="./images/r5.jpg"  data-aos="zoom-out-up" style={{height:"320px",width:"320px",boxShadow:"0px 0px 3px 4px black"}}/>
        </div>
        <div className='col-sm-3'>
        <img src="./images/g4.jpg"  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"  style={{height:"320px",width:"320px",boxShadow:"0px 0px 3px 4px black"}}/>
        </div>
      </div>
      <br/>
      <div className='row'>

      <div className='col-sm-3'>
          <img src="./images/girl.jpeg" 
          
          data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"style={{height:"320px",width:"320px",boxShadow:"0px 0px 2px 3px black"}}/>
        </div>
        <div className='col-sm-3'>
          <img src="./images/P1.jpeg" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" style={{height:"320px",width:"320px",boxShadow:"0px 0px 3px 4px black"}}/>
        </div>
        <div className='col-sm-3'>
        <img src="./images/r6.jpg" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" style={{height:"320px",width:"320px",boxShadow:"0px 0px 3px 4px black"}}/>
        </div>
        <div className='col-sm-3'>
        <img src="./images/r3.jpg" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" style={{height:"320px",width:"320px",boxShadow:"0px 0px 3px 4px black"}}/>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default Gallery;