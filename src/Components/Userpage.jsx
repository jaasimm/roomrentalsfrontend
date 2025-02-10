import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaTruckArrowRight } from "react-icons/fa6";
import { BiSolidIdCard } from "react-icons/bi";
import { TbHomeHeart } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { RiBardFill } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { GrDocumentText } from "react-icons/gr";
import { userpageRoomAPI } from '../Services/Allapi';
import RoomCard from './RoomCard';
import Search from './Search';

function Userpage() {
  const[searchKey,setSearchkey]=useState()
  const[roomDetails,setRoomDetails]=useState("")

const getuserpageroom=async()=>{
  const response=await userpageRoomAPI(searchKey)
  console.log(response);
  setRoomDetails(response.data)
  }
console.log(roomDetails);


useEffect(()=>{
   getuserpageroom()
},[searchKey])

const handleRoomSelection = (roomId, userId) => { 
  sessionStorage.setItem('selectedRoomId', roomId); 
  sessionStorage.setItem('selectedUserId', userId); 
  console.log('Room ID:', roomId, 'User ID:', userId); 
};




  return (
    <div>
      <div id='inputt' className="row">
        <div  className="row">
            <h4 style={{marginLeft:"80px", marginTop:"120px"}}>welcome user</h4>
            <h1 style={{textAlign:"center"}}>Discover your perfect space </h1>
            <h6 style={{textAlign:"center",color:"black", marginTop:"10px"}}>"Browse through our extensive listings of rooms, apartments, PG accommodations, and commercial properties to find the perfect fit for your needs and budget."</h6>
            <h6 style={{textAlign:"center",color:"black"}}>Use our advanced search and filter options to find the perfect space for your needs."</h6>
           <center> <input style={{width:"300px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} onChange={e=>setSearchkey(e.target.value)} type="text" placeholder='search by location'/>
           </center></div>
        <div  style={{height:"210px"}} className="row mt-3">
        
        </div></div>
        <center>
          <div className='row'>
            {
              roomDetails.length>0?roomDetails.map(room=>(
                <div className="col" key={room._id} onClick={() => handleRoomSelection(room._id, room.userId)}>
                  <RoomCard room={room}/>
                </div>

              )):"no rooms"
            }
          </div>
        </center>
        <center>
        <div className="row">
            <h2 style={{textAlign:"center",marginTop:"60px"}}>Why choosing us</h2>
            <hr />
            <div className="col"><TbHomeHeart  style={{fontSize:"75px",color:"grey"}}/>
            <h6 style={{marginTop:"10px"}}>Easy Shortlisting</h6>
            <p style={{color:"grey"}}>avoid travel for <br /> finding your dream space</p>
            </div>
            <div className="col"><RiSecurePaymentLine style={{fontSize:"75px",color:"grey"}} />
            <h6 style={{marginTop:"10px"}}>100% secure</h6>
            <p style={{color:"grey"}}>speed & secure <br />payment methods</p>
            </div>
            <div className="col"><GrDocumentText style={{fontSize:"70px",color:"grey"}} />
            <h6 style={{marginTop:"10px"}}>Rental agreement</h6>
            <p style={{color:"grey"}}>Assistance in rental <br /> agreement&paper works</p>
            </div>
            <div className="col"><img src="./nobroker.png" alt="" />
            <h6 style={{marginTop:"10px"}}>Avoid brokers</h6>
            <p style={{color:"grey"}}>we connect you direct <br /> to the owner</p>
            </div>
        </div>
        </center><hr />
        <center>
        <div className="row">
            <h2 style={{textAlign:"center",marginTop:"30px",marginBottom:"30px"}}>Our Upcoming Features</h2>
            <hr />
            <div className="col"><h1><FaTruckArrowRight /></h1>
            <h6 style={{marginTop:"10px"}}>Packing & shifting</h6>
            <p style={{color:"grey"}}>avoid travel for <br /> finding your dream space</p>
            </div>
            <div className="col"><h1><BiSolidIdCard /></h1>
            <h6 style={{marginTop:"10px"}}>Rent payment</h6>
            <p style={{color:"grey"}}>speed & secure <br />online payment</p>
            </div>
            <div style={{marginTop:"10px"}} className="col"><h6 ><FaHome style={{fontSize:"40px"}} /> <span><RiBardFill /></span>
            </h6>
            <h6 style={{marginTop:"10px"}}>House cleaning</h6>
            <p style={{color:"grey"}}>complete cleaning <br /> solution  </p>
            </div>
            <div className="col"><h1><GrMoney /></h1>
            <h6 style={{marginTop:"10px"}}>lease property</h6>
            <p style={{color:"grey"}}>Deposit money <br /> live without rent </p>
            </div>
        </div>
        </center><hr />
        <div id='carousel' className="row">
        <div  style={{justifyContent:"center"}} className="row ">
            <h2 style={{textAlign:"center", color:"",marginBottom:"70px",marginTop:"20px"}}>Their Words Our Pride</h2>
            
            <div className="col-3">
            <MDBCarousel showControls fade>
      <MDBCarouselItem itemId={1}>
      <center>
        <img style={{borderRadius:"100%",width:"60px",height:"60px",}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block ' alt='...' />
         muhammed afsal <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
      <center>
        <img style={{borderRadius:"100%",width:"60px",height:"60px",}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block ' alt='...' />
        jasim  <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
      <center>
        <img style={{borderRadius:"100%",width:"60px",height:"60px",}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block ' alt='...' />
        vishnu <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
      </MDBCarouselItem>
    </MDBCarousel>
            </div>
            

            <div className="col-3">
            <MDBCarousel showControls fade>
      <MDBCarouselItem itemId={1}>
      <center>
        <img style={{borderRadius:"100%",width:"60px",height:"60px",}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block ' alt='...' />
        siraj ksa <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}> <center>
        <img style={{borderRadius:"100%",width:"60px",height:"60px",}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block ' alt='...' />
        zabin ahmed <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
      <center>
        <img style={{borderRadius:"100%",width:"60px",height:"60px",}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block ' alt='...' />
        anandhu narayanan <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
      </MDBCarouselItem>
    </MDBCarousel>
            </div>
            <div className="col-3">
            <MDBCarousel showControls fade>
      <MDBCarouselItem itemId={1}>
      <center>
        <img style={{borderRadius:"100%",width:"60px",height:"60px",}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block ' alt='...' />
        roshni <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
      <center>
        <img style={{borderRadius:"100%",width:"60px",height:"60px",}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block ' alt='...' />
        vimal kumar <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
      <center>
        <img style={{borderRadius:"100%",width:"60px",height:"60px",}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block ' alt='...' />
        sooryanarayanan <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
      </MDBCarouselItem>
    </MDBCarousel>
            </div>

            
        </div>
        <div style={{justifyContent:"center",marginTop:"20px"}} className="row ">
           
            
           <div className="col-3">
           <MDBCarousel style={{backgroundColor:""}} showControls fade>
     <MDBCarouselItem itemId={1}>
       <center>
       <img style={{borderRadius:"100%",width:"60px",height:"60px",}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block ' alt='...' />
       jjoseph mathew <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
      
     </MDBCarouselItem>
     <MDBCarouselItem itemId={2}>
     <center>
       <img style={{borderRadius:"100%",width:"60px",height:"60px",}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block ' alt='...' />
       haseem <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
     </MDBCarouselItem>
     <MDBCarouselItem itemId={3}>
     <center>
       <img style={{borderRadius:"100%",width:"60px",height:"60px",}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block ' alt='...' />
       anna sebastin <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
     </MDBCarouselItem>
   </MDBCarousel>
           </div>
           

           <div className="col-3">
           <MDBCarousel showControls fade>
     <MDBCarouselItem itemId={1}>
     <center>
       <img style={{borderRadius:"100%",width:"60px",height:"60px",}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block ' alt='...' />
       paul verghese <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
     </MDBCarouselItem>
     <MDBCarouselItem itemId={2}>
     <center>
       <img style={{borderRadius:"100%",width:"60px",height:"60px",}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block ' alt='...' />
       shamil <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
     </MDBCarouselItem>
     <MDBCarouselItem itemId={3}>
     <center>
       <img style={{borderRadius:"100%",width:"60px",height:"60px",}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block ' alt='...' />
       faheem <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
     </MDBCarouselItem>
   </MDBCarousel>
           </div>
           <div className="col-3">
           <MDBCarousel showControls fade>
     <MDBCarouselItem itemId={1}>
     <center>
       <img style={{borderRadius:"100%",width:"60px",height:"60px",}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block ' alt='...' />
       karthik <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
     </MDBCarouselItem>
     <MDBCarouselItem itemId={2}>
     <center>
       <img style={{borderRadius:"100%",width:"60px",height:"60px",}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block ' alt='...' />
       ajmal <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
     </MDBCarouselItem>
     <MDBCarouselItem itemId={3}>
     <center>
       <img style={{borderRadius:"100%",width:"60px",height:"60px",}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block ' alt='...' />
       arun kumar <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
     </MDBCarouselItem>
   </MDBCarousel>
           </div>
           </div>
           </div>
    </div>
  )
}

export default Userpage