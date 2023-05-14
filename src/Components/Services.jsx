import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Components/Styles/About.css';
import '../Components/Styles/service.css';
import Slider from "./slider";
function Services() {
    useEffect(() => {
        AOS.init({
            duration: 3000
        })

    }, [])
    return (
        
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 img4">
    <div className="box1 rgba2 pt-5" data-aos="zoom-in" data-aos-duration="3000">
        <div className="col-sm-6">
    <span className="display-1 text-light ms-5" style={{ "textShadow": "2px 3px 9px black", "fontFamily": " impact"  }}>Our Services
</span><br />
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
        <button className="btn btn-danger">SERVICES</button>
        </center>
        </div>
    
</div>

        
    </div>
                    </div>
                </div>
                <br/>
               
                <div className="row ">
                  <div className="col-sm-4 s1" data-aos="fade-right">
                  <span style={{color:"green",fontFamily:"import",fontSize:"20px" }}>SERVICES
</span><br/>
<span className="display-5" style={{fontFamily:"import"}}>Organic Farm<br/>
   Services
</span>
<br/>
<br/>
<span>Tempor erat elitr at rebum at at clita. Diam dolor <br/>
  diam ipsum et tempor sit. Clita erat<br/>
   ipsum et lorem et sit sed stet labore
</span>
<br/>

<br/>
<button className="b">Content</button>
                  </div>
                  <div className="col-sm-4 "  data-aos="zoom-out" style={{background:'url("./images/v6.png")',height:"350px",width:"340px",borderRadius:"10px",backgroundSize:"100% 100%",marginLeft:"50px",borderRadius:"5px",boxShadow:"0px 0px 2px 2px black"}}> 
                    <div className="row">
                        <div className="col-sm-12 "style={{background:'rgba(0,0,0,.4)',height:"150px",marginTop:"200px",borderRadius:"5px"}}> 
                        <center>
                            <span style={{fontSize:"35px",fontFamily:"import",color:"white",marginLeft:"15px","textShadow": "0px 0px 9px black"}}>Fresh Vegetables
</span><br/>
                          <span style={{color:"red",fontFamily:"import",fontSize:"17px","textShadow": "0px 0px 6px black"}}> Labore justo vero ipsum sit clita <br/>
                          erat lorem magna clita nonumy  <br/>
                          dolor magna dolor vero </span> 
                            </center>
                        
                        </div>
                
                    </div>
                    </div>
                    <div className="col-sm-4 "  data-aos="zoom-out-up" style={{background:'url("./images/v68.jpg")',height:"350px",width:"340px",borderRadius:"10px",backgroundSize:"100% 100%",marginLeft:"50px",borderRadius:"5px",boxShadow:"0px 0px 3px 2px black"}}> 
                    <div className="row">
                        <div className="col-sm-12 "style={{background:'rgba(0,0,0,.4)',height:"150px",marginTop:"200px",borderRadius:"5px"}}> 
                        <center>
                            <span style={{fontSize:"35px",fontFamily:"import",color:"white",marginLeft:"15px","textShadow": "0px 0px 9px black"}}>Fresh Fruits
</span><br/>
                          <span style={{color:"red",fontFamily:"import",fontSize:"17px","textShadow": "0px 0px 6px black"}}> Labore justo vero ipsum sit clita 
                          <br/>erat lorem magna clita nonumy <br/>
                          dolor magna dolor vero

</span> 
                            </center>
                        
                        </div>
                
                    </div>
                    </div>
                </div>
                <br/>
                <div className="row ">
                <div className="col-sm-4 "data-aos="zoom-in"  style={{background:'url("./images/dilip.jpg")',height:"350px",width:"340px",borderRadius:"10px",backgroundSize:"100% 100%",marginLeft:"50px",borderRadius:"5px",boxShadow:"0px 0px 3px 2px black"}}> 
                    <div className="row">
                        <div className="col-sm-12 "style={{background:'rgba(0,0,0,.4)',height:"150px",marginTop:"200px",borderRadius:"5px"}}> 
                        <center>
                            <span style={{fontSize:"35px",fontFamily:"import",color:"white",marginLeft:"15px","textShadow": "0px 0px 9px black"}}>Fresh Fruits
</span><br/>
                          <span style={{color:"red",fontFamily:"import",fontSize:"17px","textShadow": "0px 0px 6px black"}}> Labore justo vero ipsum sit clita 
                          <br/>erat lorem magna clita nonumy <br/>
                          dolor magna dolor vero

</span> 
                            </center>
                        
                        </div>
                
                    </div>
                    </div>
                    <div className="col-sm-4 " style={{background:'url("./images/v56.jpg")',height:"350px",width:"340px",borderRadius:"10px",backgroundSize:"100% 100%",marginLeft:"50px",borderRadius:"5px",boxShadow:"0px 0px 3px 2px black"}}> 
                    <div className="row">
                        <div className="col-sm-12 "style={{background:'rgba(0,0,0,.4)',height:"150px",marginTop:"200px",borderRadius:"5px"}}> 
                        <center>
                            <span style={{fontSize:"35px",fontFamily:"import",color:"white",marginLeft:"15px","textShadow": "0px 0px 9px black"}}>Fresh Fruits
</span><br/>
                          <span     data-aos="fade-down-left" style={{color:"red",fontFamily:"import",fontSize:"17px","textShadow": "0px 0px 6px black"}}> Labore justo vero ipsum sit clita 
                          <br/>erat lorem magna clita nonumy <br/>
                          dolor magna dolor vero

</span> 
                            </center>
                        
                        </div>
                
                    </div>
                    </div>
                    <div className="col-sm-4 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"         style={{background:'url("./images/v68.jpg")',height:"350px",width:"340px",borderRadius:"10px",backgroundSize:"100% 100%",marginLeft:"50px",borderRadius:"5px",boxShadow:"0px 0px 3px 2px black"}}> 
                    <div className="row">
                        <div className="col-sm-12 "style={{background:'rgba(0,0,0,.4)',height:"150px",marginTop:"200px",borderRadius:"5px"}}> 
                        <center>
                            <span style={{fontSize:"35px",fontFamily:"import",color:"white",marginLeft:"15px","textShadow": "0px 0px 9px black"}}>Fresh Fruits
</span><br/>
                          <span style={{color:"red",fontFamily:"import",fontSize:"17px","textShadow": "0px 0px 6px black"}}> Labore justo vero ipsum sit clita 
                          <br/>erat lorem magna clita nonumy <br/>
                          dolor magna dolor vero

</span> 
                            </center>
                        
                        </div>
                
                    </div>
                    </div>
                </div>
                <br/>
               
                <div className="row">
                    <div className="col-sm-12 img3">
                       <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6 mt-5 pt-3">
                            <Slider/>
                        </div>
                        <div className="col-sm-3"></div>
                       </div>
                    </div>
                </div>
                </div>
    )
};
export default Services;