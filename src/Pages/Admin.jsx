import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { FaRupeeSign } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { TbParkingCircleFilled } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import { MdDelete } from "react-icons/md";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

function Admin() {
  return (
    <div>
         <center>
    <div style={{ width:"800px",marginBottom:"50px"}}>
      <div style={{border:"1px solid black"}} className="row">
        <h3>Office Space in Kalasipalya, Bangalore for Rent</h3>
        <p>Kalasipalya Main Rd, , Shri Ayyappa Swamy Temple  <a href="">see on map<FaMapMarkerAlt /></a></p>
        <div style={{textAlign:"center"}} className="row">
          <div style={{border:"1px solid black"}} className="col-3">
            <p style={{marginTop:"10px"}}><FaRupeeSign />25000</p>
            <p style={{marginTop:"-10px"}}>Rent (negotiable)</p>
          </div>
          <div style={{border:"1px solid black"}} className="col-3">
            <p style={{marginTop:"10px"}}><FaRupeeSign />75000</p>
            <p style={{marginTop:"-10px"}}>Deposit (negotiable)</p>
          </div>
          <div style={{border:"1px solid black"}} className="col-3">
            <p style={{marginTop:"10px"}}><PiBuildingApartmentFill /> home</p>
            <p style={{marginTop:"-10px"}}>type </p>
          </div>
          <div style={{border:"1px solid black"}} className="col-3">
            <p style={{marginTop:"10px"}}><IoBedOutline  /> 3bhk</p>
            <p style={{marginTop:"-10px"}}>AC (1)</p>
          </div>
        </div>
        <div  className="col-5 p-5">
        <MDBCarousel  showControls showIndicators>
      <MDBCarouselItem  itemId={1}>
        <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      
    </MDBCarousel>

        </div>
        <div  className="col-7 ">
          <div  className="row mt-4">
            <div style={{border:"1px solid black",textAlign:"center",marginLeft:"60px"}} className="col-5">
            <p style={{marginTop:"10px"}}><IoBedOutline  /> 1500sq.ft</p>
            <p style={{marginTop:"-10px"}}>(sqft)</p>
            </div>
            <div style={{border:"1px solid black",textAlign:"center"}} className="col-5">
            <p style={{marginTop:"10px"}}><IoBedOutline  /> furnished</p>
            <p style={{marginTop:"-10px"}}>(status)</p>
            </div>
          </div>
          <div className="row">
            <div style={{border:"1px solid black",textAlign:"center",marginLeft:"60px"}} className="col-5">
            <p style={{marginTop:"10px"}}><TbParkingCircleFilled />Available</p>
            <p style={{marginTop:"-10px"}}>(parking)</p>
            </div>
            <div style={{border:"1px solid black",textAlign:"center"}} className="col-5">
            <p style={{marginTop:"10px"}}><IoBedOutline  /> 3bhk</p>
            <p style={{marginTop:"-10px"}}>AC (1)</p>
            </div>
          </div>
          <div style={{justifyContent:'space-evenly'}}  className="row mt-3 ms-1 mb-3">
            
            <Button style={{width:"100px"}} variant="primary"> <FaPhone /> </Button>
            <Button style={{width:"100px"}} variant="danger"> <MdDelete /> </Button>
            <Button style={{width:"100px"}} variant="success"> <IoChatbubbleEllipsesSharp /></Button>
           
          </div>

        </div>
      </div>
    </div></center>
    </div>
  )
}

export default Admin