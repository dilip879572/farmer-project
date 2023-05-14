import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import './Styles/Home.css'
function Home()
{
    useEffect(()=>{
        AOS.init({
            duration:2000,
        })
    },[])
    return(
        <div >
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
 
  <p>Gallery</p>
  <div className="row" style={{marginLeft:"130px"}}>

    <div className="col-sm-12">
       
  <div className="pic" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="2000">
      
    <img src="./images/v1.jpg" style={{height:"200px"}}></img><br/>
  
  </div>
 
  <div className="pic" data-aos="flip-up"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="2000">
    <img src="./images/v2.jpg" style={{height:"200px"}}></img>
  </div>
  <div className="pic" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="2000">
    <img src="./images/v3.jpg" style={{height:"200px"}}></img>
    </div>
  </div>
  </div>
  
  <div className="row" style={{marginLeft:"130px"}}>
    <div className="col-sm-12">
  <div className="pic" data-aos="zoom-in-up">
    <img src="./images/v2jpg.jpg" style={{height:"200px"}}></img>
  </div>
  <div className="pic" data-aos="zoom-in-up">
    <img src="./images/v3.jpg" style={{height:"200px"}}></img>
  </div>
  <div className="pic" data-aos="zoom-in-up">
    <img src="./images/v56.jpg" style={{height:"200px"}}></img>
    </div>
  </div>
  </div>
  <div className="row" style={{marginLeft:"130px"}}>
    <div className="col-sm-12">
  <div className="pic" data-aos="zoom-in-up">
    <img src="./images/vjpg.jpg" style={{height:"200px" ,with:"300px"}}></img>
  </div>

  <div className="pic" data-aos="zoom-in-up">
    <img src="./images/v9.jpg" style={{height:"200px"}}></img>
  </div>
  <div className="pic" data-aos="zoom-in-up">
    <img src="./images/y.jpg" style={{height:"200px"}}></img>
    </div>
  </div>
  </div>
</div>

 


</div>

         
    )
}
export default Home;