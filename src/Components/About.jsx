import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Components/Styles/About.css';


function About() {
    useEffect(() => {
        AOS.init({
            duration: 3000
        })

    }, [])
    return (
        
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 img1">
    <div className="box1 rgba1 pt-5" data-aos="zoom-in" data-aos-duration="3000">
        <div className="col-sm-6">
    <span className="display-1 text-light ms-5" style={{ "textShadow": "2px 3px 9px black", "fontFamily": " impact"  }}>ABOUT  US</span><br />
    <span className=" text-light fs-3 ms-5" style={{"textShadow": "0px 0px 4px red"}} >
    Farmers are responsible for all crops and<br/>
    &nbsp;   &nbsp; livestock that are needed for us to <br/>
   
  

<br />
                              <br />
                                
                            </span>
                            </div>
<div className="row">
    <div className="col-sm-6">
        <center>
        <button className="btn btn-danger">Home</button>
        &nbsp;   &nbsp;
                        &nbsp;   &nbsp;
        <button className="btn btn-danger">About</button>
        </center>
        </div>
    
</div>

        
    </div>
                    </div>
                </div>
                <div className="row dilip pb-5">
                    <center><h1>About us</h1></center>

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
                <div className="row"  style={{marginLeft:"90px"}}>
                    
                    <div className="col-sm-4 " style={{background:'url("./images/farmer.jpg")',height:"250px",width:"320px",borderRadius:"10px",backgroundSize:"100% 100%",marginLeft:"50px",borderRedius:"5px"}}> 
                    <div className="row">
                        <div className="col-sm-12 "style={{background:'rgba(0,0,0,.4)',height:"100px",marginTop:"150px",borderRadius:"0px 0px 10px 10px"}}>
                            <center>
                            <span style={{fontSize:"35px",fontFamily:"import",color:"white",marginLeft:"15px","textShadow": "0px 0px 9px black"}}>Farmer Name</span><br/>
                          <span style={{color:"red",fontFamily:"import",fontSize:"27px","textShadow": "0px 0px 6px black"}}> Designation </span> 
                            </center>
                            
                            </div>
                      
                    </div>
                    </div>
                    <div className="col-sm-4 " style={{background:'url("./images/farmer.jpg")',height:"250px",width:"320px",borderRadius:"10px",backgroundSize:"100% 100%",marginLeft:"50px",borderRedius:"5px"}}> 
                    <div className="row">
                        <div className="col-sm-12 "style={{background:'rgba(0,0,0,.4)',height:"100px",marginTop:"150px",borderRadius:"0px 0px 10px 10px"}}> 
                        <center>
                            <span style={{fontSize:"35px",fontFamily:"import",color:"white",marginLeft:"15px","textShadow": "0px 0px 9px black"}}>Farmer Name</span><br/>
                          <span style={{color:"red",fontFamily:"import",fontSize:"27px","textShadow": "0px 0px 6px black"}}> Designation </span> 
                            </center>
                        
                        </div>
                
                    </div>
                    </div>
                    <div className="col-sm-4 " style={{background:'url("./images/farmer2.jpg")',height:"250px",width:"320px",borderRadius:"10px",backgroundSize:"100% 100%",marginLeft:"50px",borderRedius:"5px"}}> 
                    <div className="row">
                        <div className="col-sm-12 "style={{background:'rgba(0,0,0,.4)',height:"100px",marginTop:"150px",borderRadius:"0px 0px 10px 10px"}}>
                            <center>
                            <span style={{fontSize:"35px",fontFamily:"import",color:"white",marginLeft:"15px","textShadow": "0px 0px 9px black"}}>Farmer Name</span><br/>
                          <span style={{color:"red",fontFamily:"import",fontSize:"27px","textShadow": "0px 0px 6px black"}}> Designation </span> 
                            </center> 
                        </div>
                      
                    </div>
                    </div>
                
                     </div><br/><br/>
                 
            </div>
       
    )
}
export default About;