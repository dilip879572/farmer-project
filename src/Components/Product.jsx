import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Components/Styles/product.css';

function Product() {
    useEffect(() => {
        AOS.init({
            duration: 3000
        })

    }, [])
    return (
        
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 img5">
    <div className="box1 rgba3 pt-5" data-aos="zoom-in" data-aos-duration="3000">
        <div className="col-sm-6">
    <span className="display-1 text-light ms-5" style={{ "textShadow": "2px 3px 9px black", "fontFamily": " impact"  }}>Our Products
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
        <button className="btn btn-danger">PRODUCTS</button>
        </center>
        </div>
</div>    
    </div>
                    </div>
                </div>
                <br/>
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
               

                <div className="row">
                    <div className="col-sm-4  "><img className="a" data-aos="zoom-in" data-aos-duration="2500" src="./images/v99jpg.jpg" /></div>
                    <div className="col-sm-4  "><img className="a" data-aos="zoom-in" data-aos-duration="3000" src="./images/v78.jpg" /></div>
                    <div className="col-sm-4  "><img className="a" data-aos="zoom-in" data-aos-duration="3500" src="./images/v68.jpg" /></div>
                </div>
                
               <div className="row m-3">
                <center> 
                    <span style={{color:"red",fontFamily:"import",fontSize:"30px"}}>FEATURES</span>  
                </center>
              <br/>
                <div className="col-sm-6 product">
                  <span style={{fontFamily:"import",fontSize:"20px"}}>
                    <span style={{color:"green",fontFamily:"import",fontSize:"40px", marginLeft:"50px"}}> OUR  PRODUCT </span>
           
                    <br/>
                    Dairy Farming ek bohot hi bada aur profitable business hai jisse agar aap mehnat ke saath kare toh aap ismein kaafi munafa kama sakte hain. India mein dairy farm kholna ek bohot accha business option hai kyunki – 
                  </span>
                  <br/>
                  <br/>
                  <button style={{color:"black",marginLeft:"360px",backgroundColor:"red",height:"40px",boxShadow:"0px 0px 3px 4px black"}}>Content me</button>
                   </div>
                <div className="col-sm-6">
                <img src="./images/r.jpg"    data-aos="zoom-in" data-aos-duration="3500"   style={{height:"300px",boxShadow:"0px 0px 2px 3px black"}}/>
                </div>
               </div>
                    </div>
          
    )
};
export default Product;