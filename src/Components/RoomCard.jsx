import React, { useContext } from 'react'
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
import Payment from './Payment';
import { FaCartPlus } from "react-icons/fa6";
import ReprtaPrblm from '../Pages/ReprtaPrblm';
import CancelBooking from './CancelBooking';

function RoomCard({room,isDashboard}) {

  const handleSaveRoom = () => {
     const savedRooms = JSON.parse(sessionStorage.getItem('savedRooms')) || [];
      const isRoomSaved = savedRooms.some(savedRoom => savedRoom._id === room._id); 
      if (!isRoomSaved) { 
        savedRooms.push(room);
        localStorage.setItem('savedRooms', JSON.stringify(savedRooms));
         alert("Room saved!"); 
        } 
        else { 
          alert("Room is already saved!");
         } 
        };
        const handleUnsaveRoom = () => { let savedRooms = JSON.parse(localStorage.getItem('savedRooms')) || []; 
          // Remove the room with the matching _id
           savedRooms = savedRooms.filter(savedRoom => savedRoom._id !== room._id);
            localStorage.setItem('savedRooms', JSON.stringify(savedRooms));
             // Update localStorage
            alert("Room unsaved!");
            
            
           };
  return (
    <center>
    <div style={{marginTop:"50px", width:"650px",marginBottom:"50px"}}>
      <div style={{border:"1px solid black"}} className="row ps-5">
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
        <div  className="col-5 ps-1 pt-2">
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
          <div  className="row mt-2">
            <div style={{border:"1px solid black",textAlign:"center",marginLeft:"40px"}} className="col-5">
            <p style={{marginTop:"10px"}}><IoBedOutline  /> {room.sqftarea}</p>
            <p style={{marginTop:"-10px"}}>(sqft)</p>
            </div>
            <div style={{border:"1px solid black",textAlign:"center"}} className="col-5">
            <p style={{marginTop:"10px"}}><IoBedOutline  /> furnished</p>
            <p style={{marginTop:"-10px"}}>(status)</p>
            </div>
          </div>
          <div className="row">
            <div style={{border:"1px solid black",textAlign:"center",marginLeft:"40px"}} className="col-5">
            <p style={{marginTop:"10px"}}><TbParkingCircleFilled />Available</p>
            <p style={{marginTop:"-10px"}}>(parking)</p>
            </div>
            <div style={{border:"1px solid black",textAlign:"center"}} className="col-5">
            <p style={{marginTop:"10px"}}><IoBedOutline  /> 3bhk</p>
            <p style={{marginTop:"-10px"}}>AC (1)</p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', marginBottom: '1rem', width: '100%' }}>
             <div style={{ flexGrow: 1 }}> 
              <Payment /> </div>
             {isDashboard ?
              ( <Button onClick={handleUnsaveRoom} style={{ width: '80px', margin: '0 10px' }} variant="danger"> <FaCartPlus /> - </Button> )
               :
              ( <Button onClick={handleSaveRoom} style={{ width: '80px', margin: '0 10px' }} variant="danger"> <FaCartPlus /> + </Button> )
              
              }
              <a href="https://wa.link/6qjces"> <Button  style={{ width: '80px', margin: '0 10px' }} variant="success"> <IoChatbubbleEllipsesSharp /> </Button></a>
              
                </div>

        </div>
      </div>
    </div></center>
  )
}

export default RoomCard