import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { MDBCarousel, MDBCarouselItem,MDBInput } from 'mdb-react-ui-kit';
import Modal from 'react-bootstrap/Modal';
import { addRoomAPI } from '../Services/Allapi';
import { addRoomContextResponse } from '../ContextAPI/ContextShare';


function Brokerpage() {

const {addRoomContext,setAddRoomContext}=useContext(addRoomContextResponse)
 const[roomdetails,setRoomDetails]=useState({
  place:"",
  city:"",
  landmark:"",
  maplocation:"",
  noofrooms:"",
  sqftarea:"",
  rent:"",
  deposit:"",
  ownerno:"",
  propertytype:"",
  consumerno:"",
  roomimagea:"",
  roomimageb:"",
  roomimagec:""
 })

  const [show, setShow] = useState(false);
  const [preview,setPreview]=useState("")
  const [username,setUsername]=useState()
  useEffect(()=>{
    setUsername(localStorage.getItem("username"))
  },[])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  //roomimagea add
useEffect(()=>{
  if(roomdetails.roomimagea){
  setPreview(URL.createObjectURL(roomdetails.roomimagea))
  }
},[roomdetails.roomimagea])
//roomimagec add
useEffect(()=>{
  if(roomdetails.roomimageb){
  setPreview(URL.createObjectURL(roomdetails.roomimageb))
  }
},[roomdetails.roomimageb])
//roomimagec add
useEffect(()=>{
  if(roomdetails.roomimageb){
  setPreview(URL.createObjectURL(roomdetails.roomimagec))
  }
},[roomdetails.roomimagec])

  

//add room details
  const handleaddRoom=async()=>{
    console.log(roomdetails);
    const{place,city,landmark,maplocation,noofrooms,sqftarea,rent,deposit,ownerno,propertytype,consumerno,roomimagea,roomimageb,roomimagec}=roomdetails
    if(!place||!city||!landmark||!maplocation||!noofrooms||!sqftarea||!rent||!deposit||!ownerno||!consumerno||!propertytype||!roomimagea||!roomimageb||!roomimagec){
      alert("please fill the form")
    }else{
      //api call
      const reqBody=new FormData()
      reqBody.append("place",place)
      reqBody.append("city",city)
      reqBody.append("landmark",landmark)
      reqBody.append("maplocation",maplocation)
      reqBody.append("noofrooms",noofrooms)
      reqBody.append("sqftarea",sqftarea)
      reqBody.append("rent",rent)
      reqBody.append("deposit",deposit)
      reqBody.append("ownerno",ownerno)
      reqBody.append("propertytype",propertytype)
      reqBody.append("consumerno",consumerno)
      reqBody.append("roomimagea",roomimagea)
      reqBody.append("roomimageb",roomimageb)
      reqBody.append("roomimagec",roomimagec)
      
      const token=sessionStorage.getItem("token")
      console.log(token);
      

      if(token){
        const reqHeader={
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        
        try{
          const response=await addRoomAPI(reqBody,reqHeader)
          console.log(response);
          setAddRoomContext(response.data)
          if(response.status==200){
            alert("room added succesfully")
            handleClose()
            setRoomDetails({
              place:"",
              city:"",
              landmark:"",
              maplocation:"",
              noofrooms:"",
              sqftarea:"",
              rent:"",
              deposit:"",
              ownerno:"",
              propertytype:"",
              consumerno:"",
              roomimagea:"",
              roomimageb:"",
              roomimagec:""
              
            })
          }
          else{
            alert(response.data)
          }

        }
      catch(err){
        console.log(err);
        
      }
    }

  }
  }
  return (
    <div className="row ">
        <div  className="row mt-5">
            <div className="col-1 "></div>

            <div  className="col-4">
              <h3 style={{marginTop:"20px"}}>hello {username}</h3>
                <h1 style={{color:"black"}} >Upload & Earn</h1>
                <h5 style={{color:"black"}}>earn just by clicks</h5>
                <Button onClick={handleShow} style={{marginTop:"15px"}} variant="primary">upload home details</Button>

            </div>
            <div className="col-6">
                <img style={{width:"100%"}} src="./phonesearch.png" alt="" />
            </div>
            <div className="col-1"></div>
        </div>
        <center><h2 style={{marginTop:"40px",color:"black"}}>Click a Pic or Refer owner details to earn upto ₹1000 for</h2>
        <h2 style={{color:"black"}}>every property selling we publish.</h2>

        <h3 style={{marginTop:"60px"}}>how can i do it</h3>
        </center>
        <div className="row">
            <div className="col-4 ">
                <img style={{width:"100%"}} src="https://static.vecteezy.com/system/resources/previews/008/377/416/original/real-estate-search-illustration-concept-people-looking-home-on-market-buy-or-rent-house-online-illustration-in-a-flat-style-vector.jpg" alt="" />
            </div>
            <div className="col-8">
               <h2 style={{marginTop:"120px",color:"black"}}>Upload the valid details of the property,home or </h2>
               <h2 style={{color:"black"}}>commercial property and get rewarderd</h2>
               <Button onClick={handleShow} style={{marginTop:"25px"}} variant="primary">upload home details</Button>
               
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-info'>Add Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
          <div className="col">
            <label >
              <input type="file" onChange={e=>setRoomDetails({...roomdetails,roomimagea:e.target.files[0]})} style={{display:"none"}} />
              <img src={preview?preview:"https://i.pinimg.com/originals/87/6d/53/876d5354f8b2283b5c5b3eeafaa2e2a3.png"} alt="" style={{width:"100%", marginTop:"10px"}}/>
            </label>
            <label >
              <input type="file" onChange={e=>setRoomDetails({...roomdetails,roomimageb:e.target.files[0]})} style={{display:"none"}} />
              <img src={preview?preview:"https://i.pinimg.com/originals/87/6d/53/876d5354f8b2283b5c5b3eeafaa2e2a3.png"} alt="" style={{width:"100%", marginTop:"10px"}}/>
            </label>
            <label >
              <input type="file" onChange={e=>setRoomDetails({...roomdetails,roomimagec:e.target.files[0]})} style={{display:"none"}} />
              <img src={preview?preview:"https://i.pinimg.com/originals/87/6d/53/876d5354f8b2283b5c5b3eeafaa2e2a3.png"} alt="" style={{width:"100%", marginTop:"10px"}}/>
            </label>
          </div>
          <div className="col">
            <input onChange={e=>setRoomDetails({...roomdetails,place:e.target.value})}  style={{marginTop:"10px"}} type="text" placeholder='place'/>
            <input onChange={e=>setRoomDetails({...roomdetails,city:e.target.value})} style={{marginTop:"10px"}} type="text" placeholder='city' />
            <input onChange={e=>setRoomDetails({...roomdetails,landmark:e.target.value})}  style={{marginTop:"10px"}} type="text" placeholder='lndmark'/>
            <input onChange={e=>setRoomDetails({...roomdetails,maplocation:e.target.value})} style={{marginTop:"10px"}} type="text" placeholder='map location'/>
            <input onChange={e=>setRoomDetails({...roomdetails,noofrooms:e.target.value})} style={{marginTop:"10px"}} type="text" placeholder='no of rooms'/>
            <input onChange={e=>setRoomDetails({...roomdetails,sqftarea:e.target.value})} style={{marginTop:"10px"}} type="text" placeholder='sq.ft area'/>
            <input onChange={e=>setRoomDetails({...roomdetails,rent:e.target.value})} style={{marginTop:"10px"}} type="text" placeholder='rent'/>
            <input onChange={e=>setRoomDetails({...roomdetails,deposit:e.target.value})}  style={{marginTop:"10px"}} type="text" placeholder='deposit'/>
            <input onChange={e=>setRoomDetails({...roomdetails,ownerno:e.target.value})} style={{marginTop:"10px"}} type="text" placeholder='owner no'/>
            <input onChange={e=>setRoomDetails({...roomdetails,propertytype:e.target.value})} style={{marginTop:"10px"}} type="text" placeholder='room/flat/shop etc..'/>
            <input onChange={e=>setRoomDetails({...roomdetails,consumerno:e.target.value})} style={{marginTop:"10px"}} type="text" placeholder='consumer no'/>
          </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <p>Only allowed the following file types <br /><center><p className='text-info'>.jpg,.jpeg,.png</p></center></p>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleaddRoom}  variant="primary">Add</Button>
          
        </Modal.Footer>
      </Modal>
      
            </div>
        </div>
        <div className="row">
            <div className="col-1"></div>
            <div  className="col-7">
            <h2 style={{marginTop:"120px",color:"black"}}>share the genuine details of the property owners</h2>
               <h2 style={{color:"black"}}> and get rewarderd when listing is sold</h2>
               <Button style={{marginTop:"25px"}} variant="primary">upload owner details</Button>

            </div>
            <div className="col-4 ">
                <img style={{width:"100%"}}  src="./home.png" alt="" />
            </div>
        </div>
        
        <div style={{justifyContent:"center"}} className="row ">
            <h2 style={{textAlign:"center", color:"black",marginBottom:"70px",marginTop:"20px"}}>Their Words Our Pride</h2>
            
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
            <MDBCarousel style={{backgroundColor:"whitesmoke"}} showControls fade>
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
        jasim muhammed <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
      <center>
        <img style={{borderRadius:"100%",width:"60px",height:"60px",}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block ' alt='...' />
        jasim muhammed <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
      <center>
        <img style={{borderRadius:"100%",width:"60px",height:"60px",}} src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block ' alt='...' />
        jasim muhammed <br />⭐⭐⭐⭐⭐ <br />Lorem ipsum dolor sit amet  temporibus esse, quia harum reprehenderit?</center>
      </MDBCarouselItem>
    </MDBCarousel>
            </div>
            </div>

        </div>
    
  )
}

export default Brokerpage