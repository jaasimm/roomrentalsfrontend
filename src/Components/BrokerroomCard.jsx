import React from 'react';
import { FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { IoBedOutline } from "react-icons/io5";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { TbParkingCircleFilled } from "react-icons/tb";
import { ServerUrl } from '../Services/ServerUrl';
import EditRoom from './EditRoom';

function BrokerroomCard({ room }) {
  const cardStyle = {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '1px solid #ddd',
    overflow: 'hidden',
  };

  const imageStyle = {
    height: '200px',
    objectFit: 'cover',
  };

  const columnStyle = {
    border: "1px solid #ddd",
    width:"110px",
    height:"70px",
    padding: '5px'
  };

  const headerStyle = {
    marginBottom: '20px',
  };

  const contentStyle = {
    marginBottom: '10px',
  };

  return (
    <center>
      <div style={cardStyle} className="container">
        <div className="card" style={{ height: '100%' }}>
          <h3 style={headerStyle}>{room.propertytype} in {room.place}, {room.city} for Rent</h3>
          <p>{room.landmark}, {room.place} <a href={room.maplocation}>see on map<FaMapMarkerAlt /></a></p>
          <MDBCarousel showControls showIndicators>
            <MDBCarouselItem itemId={1}>
              <img src={room ? `${ServerUrl}/uploads/${room.roomimagea}` : 'https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg?semt=ais_hybrid'} className='d-block w-100' alt='Room Image A' style={imageStyle} />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2}>
              <img src={room ? `${ServerUrl}/uploads/${room.roomimageb}` : 'https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg?semt=ais_hybrid'} className='d-block w-100' alt='Room Image B' style={imageStyle} />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={3}>
              <img src={room ? `${ServerUrl}/uploads/${room.roomimagec}` : 'https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg?semt=ais_hybrid'} className='d-block w-100' alt='Room Image C' style={imageStyle} />
            </MDBCarouselItem>
          </MDBCarousel>
          <div className="row text-center mt-3" style={contentStyle}>
            <div className="col-6 col-md-3 ms-3" style={columnStyle}>
              <p><FaRupeeSign />{room.rent}</p>
              <p className="text-muted">Rent</p>
            </div>
            <div className="col-6 col-md-3" style={columnStyle}>
              <p><FaRupeeSign />{room.deposit}</p>
              <p className="text-muted">Deposit</p>
            </div>
            <div className="col-6 col-md-3" style={columnStyle}>
              <p><PiBuildingApartmentFill /> {room.propertytype}</p>
              <p className="text-muted">Type</p>
            </div>
            <div className="col-6 col-md-3" style={columnStyle}>
              <p><IoBedOutline /> {room.noofrooms}</p>
              <p className="text-muted">AC (1)</p>
            </div>
            <div className="col-6 col-md-4" style={columnStyle}>
              <p><IoBedOutline /> {room.sqftarea}</p>
              <p className="text-muted">(sqft)</p>
            </div>
          </div>
           <div className="row mt-1"> <div className="col-12 mb-3 text-center"> <EditRoom room={room} /> </div> </div> </div> </div> 
           </center>
    );
    
          
} 
export default BrokerroomCard;
