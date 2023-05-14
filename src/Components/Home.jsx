import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import './Styles/Home.css'
function Home() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        })
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 img">
                    <div className="box rgba pt-5" data-aos="zoom-in" data-aos-duration="3000">
                        <center>
                            <span className="display-1 text-warning" style={{ "textShadow": "2px 3px 9px black", "fontFamily": " impact" }}>ORGANIC</span><br />
                            <span className="display-4 text-light fw-bold" style={{  "textShadow": "3px 4px 8px black"}}>$ Vegetables</span><br />
                            <span className=" text-light fs-3" style={{"textShadow": "0px 0px 4px red"}} ><h2>Healthy Life</h2> <br />
                                sed do eiusmod tempor incididunt ut labore et dolore<br />
                                magna diqua UT enim ad minimi verian
                            </span><br />
                            <br />
                          

                        
                        <input type="button" className="w-24 btn btn-danger" value="Export" style={{ "borderRadius": "5px" }} />
                        &nbsp;   &nbsp;
                        <input type="button" className="w-24 btn btn-danger" value="Content" style={{ "borderRadius": "5px" }} />
                        </center>
                    </div>
                </div>
            </div>
           
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

                <p className="text-danger h1 text-center pb-3">
Organic Vegetables

</p>
                <div className="row">
                    <div className="col-sm-4  "><img className="a" data-aos="fade-left" data-aos-duration="1000" src="./images/v3.jpg" /></div>
                    <div className="col-sm-4  "><img className="a" data-aos="flip-up" data-aos-duration="1500" src="./images/v1.jpg" /></div>
                    <div className="col-sm-4  "><img className="a" data-aos="fade-right" data-aos-duration="2000" src="./images/v2.jpg" /></div>
                </div>
                <div className="row">
                    <div className="col-sm-4  "><img className="a" data-aos="zoom-in" data-aos-duration="2500" src="./images/v9.jpg" /></div>
                    <div className="col-sm-4  "><img className="a" data-aos="zoom-in-down" data-aos-duration="3000" src="./images/v66.jpg" /></div>
                    <div className="col-sm-4  "><img className="a" data-aos="zoom-in-left" data-aos-duration="3500" src="./images/v68.jpg" /></div>
                </div>
<p className="text-success h1 fs-1 text-center"style={{ "textShadow": "2px 3px 9px black"}}>Organic Fruits
</p>
                <div className="row">
                    <div className="col-sm-4  "><img className="a" data-aos="zoom-in" data-aos-duration="2500" src="./images/v99jpg.jpg" /></div>
                    <div className="col-sm-4  "><img className="a" data-aos="zoom-in" data-aos-duration="3000" src="./images/v78.jpg" /></div>
                    <div className="col-sm-4  "><img className="a" data-aos="zoom-in" data-aos-duration="3500" src="./images/y.jpg" /></div>
                </div>
            </div>


            <div className="row dilip pb-5">
            <center>
                <span style={{ color: "green", fontFamily: "bold", fontSize: "30px",  }}>ABOUT US</span>  <br />
                <span style={{ color: "red", fontFamily: "impact", fontSize: "50px" }}>Organic produce to  <br />
                Customer  </span>
            </center>

                    <div className="col-sm-5 px-5 " >
                        <img src="./images/about.png" data-aos="zoom-right" height="400px" data-aos-duration="2500" className="about ms-5" />

                    </div>
                    <div className="col-sm-7 about1">
                        <p className="display-5" style={{ "textShadow": "3px 4px 8px black" }}>We Produce Organic Food For Your Family</p>
                        <span>Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet magna
                            Which is why this read is going to be greatParagraph Writing: Take a wild guess as to what will you say to describe a paragraph? From whatever you may know so far, many students describe paragraphs ason.
                        </span>
                        &nbsp;   &nbsp;
                        &nbsp;   &nbsp;
                        <br />
                        <br />
                        <br />
                        <button className="btn btn-danger bt">Click Me</button>
                    </div>

                </div>





                <div className="row">
                  <div className="col-sm-12">
 <center>
 <span style={{color:"green",fontSize:"30px",fontFamily:"import"}}>PRODUCTS</span><br/>
                 
                 <span style={{color:"red",fontFamily:"impact",fontSize:"40px"}}>
          Our Fresh & Organic <br/>
          Products
</span>
 </center>
                  </div>
                </div>
                <marquee  duration="left"  behavior="alternate" onmouseover="stop()" onmouseout="start()" >
                <div className="row box5">
                  <div className="col-sm-2">
                  <img src="./images/v3.png"/>
                  <span></span>
                  </div>
                  <div className="col-sm-3">
                  <img src="./images/v3.png"/>
               
                  </div>
                  <div className="col-sm-3">
                  <img src="./images/v3.png"/>
                  </div>
                  <div className="col-sm-3">
                  <img src="./images/v3.png"/>
                  </div>
                
                </div>
                </marquee>
                <br/>
                <center>
                <span style={{ color: "green", fontFamily: "bold", fontSize: "30px",  }}>CONTACT US</span>  <br />
                <span style={{ color: "red", fontFamily: "impact", fontSize: "50px" }}>Please Feel Free To<br />
                    Contact Us</span>
            </center>
            <div className="row">
                <div className="col-sm-1  "></div>
                <div className="col-sm-5 bg-warning pt-4">
                    <div className="row">
                        <div className="col-sm-6">
                            <input type="text" placeholder="Enter your name..." className="form-control mb-3"/>
                        </div>
                        <div className="col-sm-6">
                        <input type="text" placeholder="Enter your name..." className="form-control mb-3"/>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-12">
                        <input type="text" placeholder="Enter your name..." className="form-control mb-3"/>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-12">
                        <textArea placeholder="Enter your name..." className="form-control mb-3"></textArea>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-12">
                        <button className="form-control mb-3 btn btn-danger">Save</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5 ">

                
    
                    <img src="./images/n.jpg" data-aos="zoom-in" data-aos-duration="2500" style={{height:"300px",width:"500px" ,  boxShadow:"0px 3px 4px 4px black",}}/>
               
                    </div>
                <div className="col-sm-1 "></div>
            
            </div>
            <br/>
            <center>
                <span style={{ color: "green", fontFamily: "bold", fontSize: "30px",wordSpacing:"20px"  }}>GALLERY</span>  <br />
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
          <img src="./images/P1.jpeg"  style={{height:"320px",width:"320px",boxShadow:"0px 0px 3px 4px black"}}/>
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
export default Home;