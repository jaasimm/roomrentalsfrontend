import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaTruckArrowRight } from "react-icons/fa6";
import { BiSolidIdCard } from "react-icons/bi";
import { TbHomeHeart } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { RiBardFill } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { GrDocumentText } from "react-icons/gr";
function Aboutus() {
  return (
    <div >
        
        <div    className="row " >
            <p style={{textAlign:"center",fontSize:"50px", marginTop:"80px",fontWeight:"bold"}}>About Us</p>
            <p style={{textAlign:"center", textIndent:""}}>At RoomRentals, we focus on bridging the gap between room seekers and property brokers. Our platform allows users to effortlessly search for rooms that match their budget while enabling brokers to showcase their listings with ease. Experience a seamless room rental process with RoomRentals.</p>
        </div>
        <center>
        <div className="row mt-5">
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

export default Aboutus