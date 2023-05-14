import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Components/Styles/Contact.css';
function Contact() {
    useEffect(() => {
        AOS.init({
            duration: 3000
        })

    }, [])
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 img6">
                    <div className="box1 rgba6 pt-5" data-aos="zoom-in" data-aos-duration="3000">
                        <div className="col-sm-6" style={{ marginTop: "120px" }}>
                            <span className="display-1 text-light ms-5 ml-5" style={{ "textShadow": "2px 3px 9px black", "fontFamily": " impact" }}>CONTENT OS
                            </span><br />
                            <span className=" text-light fs-3 ms-5" style={{ "textShadow": "0px 0px 4px red" }} >
                                <br />

                            </span>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 ml-4">
                                <center>
                                    <button className="btn btn-danger">Home</button>
                                    &nbsp;   &nbsp;
                                    &nbsp;   &nbsp;
                                    <button className="btn btn-danger">CONTENT</button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />

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

        </div>

    )
};
export default Contact;