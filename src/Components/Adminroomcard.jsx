import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { FaRupeeSign } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { TbParkingCircleFilled } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import { MdReport } from "react-icons/md";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { ServerUrl } from '../Services/ServerUrl';
import DeleteRoom from './DeleteRoom';
import EditRoom from './EditRoom';

function Adminroomcard({room}) {
  return (
    <center>
        <div  style={{marginTop:"50px", width:"800px",marginBottom:"50px"}}>
      <div style={{border:"1px solid black"}} className="row">
        <h3>{room.propertytype} in {room.place}, {room.city} for Rent</h3>
        <p>{room.landmark}, {room.place}  <a href={room.maplocation}>see on map<FaMapMarkerAlt /></a></p>
        <div style={{textAlign:"center"}} className="row">
          <div style={{border:"1px solid black"}} className="col-3">
            <p style={{marginTop:"10px"}}><FaRupeeSign />{room.rent}</p>
            <p style={{marginTop:"-10px"}}>Rent</p>
          </div>
          <div style={{border:"1px solid black"}} className="col-3">
            <p style={{marginTop:"10px"}}><FaRupeeSign />{room.deposit}</p>
            <p style={{marginTop:"-10px"}}>Deposit</p>
          </div>
          <div style={{border:"1px solid black"}} className="col-3">
            <p style={{marginTop:"10px"}}><PiBuildingApartmentFill /> {room.propertytype}</p>
            <p style={{marginTop:"-10px"}}>type </p>
          </div>
          <div style={{border:"1px solid black"}} className="col-3">
            <p style={{marginTop:"10px"}}><IoBedOutline  /> {room.noofrooms}</p>
            <p style={{marginTop:"-10px"}}>AC (1)</p>
          </div>
        </div>
        <div  className="col-4 p-3">
        <MDBCarousel  showControls showIndicators>
      <MDBCarouselItem  itemId={1}>
        <img src={room?`${ServerUrl}/uploads/${room.roomimagea}`:'https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg?semt=ais_hybrid'} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={room?`${ServerUrl}/uploads/${room.roomimageb}`:'https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg?semt=ais_hybrid'} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={room?`${ServerUrl}/uploads/${room.roomimagec}`:'https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg?semt=ais_hybrid'} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      
    </MDBCarousel>

    

        </div>
        <div  className="col-7 ">
          <div  className="row mt-4">
            <div style={{border:"1px solid black",textAlign:"center",marginLeft:"60px"}} className="col-5">
            <p style={{marginTop:"10px"}}><IoBedOutline  /> {room.sqftarea}</p>
            <p style={{marginTop:"-10px"}}>(sqft)</p>
            </div>
            <div style={{border:"1px solid black",textAlign:"center"}} className="col-5">
            <p style={{marginTop:"10px"}}><IoBedOutline  /> 3bhk</p>
            <p style={{marginTop:"-10px"}}>AC (1)</p>
            </div>
           
          </div>
         
          <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '1rem', marginBottom: '1rem', textAlign: 'center' }} className="row mt-3 ms-1 mb-3"> 
            <Button style={{ width: '100px' }} variant="primary"><IoChatbubbleEllipsesSharp /></Button> 
            <div style={{ width: '100px' }}> <DeleteRoom room={room} /> </div>
             <div style={{ width: '100px' }}> <EditRoom room={room} /> </div> </div>
          

        </div>
      </div>
    </div></center>
  )
}

export default Adminroomcard