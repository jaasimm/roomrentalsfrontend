import React, { useEffect } from 'react'
import { FaEdit } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { MDBCarousel, MDBCarouselItem,MDBInput } from 'mdb-react-ui-kit';
import Modal from 'react-bootstrap/Modal';
import { editroomAPI } from '../Services/Allapi';
import { ServerUrl } from '../Services/ServerUrl';

function EditRoom({room}) {
     const[token,setToken]=useState("")
     const[roomdetails,setRoomDetails]=useState({
      id:room._id,
      place:room.place,
      city:room.city,
      landmark:room.landmark,
      maplocation:room.maplocation,
      noofrooms:room.noofrooms,
      sqftarea:room.sqftarea,
      rent:room.rent,
      deposit:room.deposit,
      ownerno:room.ownerno,
      propertytype:room.propertytype,
      consumerno:room.consumerno,
      roomimagea:room.roomimagea,
      roomimageb:room.roomimageb,
      roomimagec:room.roomimagec
     })
    
      const [show, setShow] = useState(false);
      const [previews, setPreviews] = useState({});
      

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

//edit function
  const handleeditRoom=async()=>{
    console.log(roomdetails);
    const{id,place,city,landmark,maplocation,noofrooms,sqftarea,rent,deposit,ownerno,propertytype,consumerno,roomimagea,roomimageb,roomimagec}=roomdetails
   
      //api call
      const reqBody=new FormData()
      reqBody.append("id",id)
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
      if (roomimagea instanceof File) reqBody.append("roomimagea", roomimagea); 
      if (roomimageb instanceof File) reqBody.append("roomimageb", roomimageb); 
      if (roomimagec instanceof File) reqBody.append("roomimagec", roomimagec);
      
      const token=sessionStorage.getItem("token")
      console.log(token);
      setToken(token)
      

      if(token){
        const reqHeader={
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        
        try{
          const response=await editroomAPI(id,reqBody,reqHeader)
          console.log(response);
          //setAddRoomContext(response.data)
          if(response.status===200){
            alert(response.data.message  || "aded succesfully")
            handleClose()
        
          }
          else{
            alert(response.data.message || "something fishy")
          }

        }
      catch(err){
        console.log(err);
        
      }
    }

  }
  
  useEffect(() => { 
    const handlePreview = (image, key) => { 
      if (image instanceof File) {
         return URL.createObjectURL(image); 
        }
         return `${ServerUrl}/uploads/${image}`; 
    }; 
    setPreviews({ 
      roomimagea: handlePreview(roomdetails.roomimagea, 'roomimagea'), 
      roomimageb: handlePreview(roomdetails.roomimageb, 'roomimageb'),
       roomimagec: handlePreview(roomdetails.roomimagec, 'roomimagec') 
      }); 
    }, [roomdetails,token]);

  return (
    <div>
         <Button onClick={handleShow} style={{width:"100px"}} variant="success"><FaEdit/> edit</Button>

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
              <img src={previews.roomimagea||"https://i.pinimg.com/originals/87/6d/53/876d5354f8b2283b5c5b3eeafaa2e2a3.png"} alt="" style={{width:"100%", marginTop:"10px"}}/>
            </label>
            <label >
              <input type="file" onChange={e=>setRoomDetails({...roomdetails,roomimageb:e.target.files[0]})} style={{display:"none"}} />
              <img src={previews.roomimageb||"https://i.pinimg.com/originals/87/6d/53/876d5354f8b2283b5c5b3eeafaa2e2a3.png"} alt="" style={{width:"100%", marginTop:"10px"}}/>
            </label>
            <label >
              <input type="file" onChange={e=>setRoomDetails({...roomdetails,roomimagec:e.target.files[0]})} style={{display:"none"}} />
              <img src={previews.roomimagec||"https://i.pinimg.com/originals/87/6d/53/876d5354f8b2283b5c5b3eeafaa2e2a3.png"} alt="" style={{width:"100%", marginTop:"10px"}}/>
            </label>
          </div>
          <div className="col">
            <input value={roomdetails.place} onChange={e=>setRoomDetails({...roomdetails,place:e.target.value})}  style={{marginTop:"10px"}} type="text" placeholder='place'/>
            <input value={roomdetails.city} onChange={e=>setRoomDetails({...roomdetails,city:e.target.value})} style={{marginTop:"10px"}} type="text" placeholder='city' />
            <input value={roomdetails.landmark} onChange={e=>setRoomDetails({...roomdetails,landmark:e.target.value})}  style={{marginTop:"10px"}} type="text" placeholder='lndmark'/>
            <input value={roomdetails.maplocation} onChange={e=>setRoomDetails({...roomdetails,maplocation:e.target.value})} style={{marginTop:"10px"}} type="text" placeholder='map location'/>
            <input value={roomdetails.noofrooms} onChange={e=>setRoomDetails({...roomdetails,noofrooms:e.target.value})} style={{marginTop:"10px"}} type="text" placeholder='no of rooms'/>
            <input value={roomdetails.sqftarea} onChange={e=>setRoomDetails({...roomdetails,sqftarea:e.target.value})} style={{marginTop:"10px"}} type="text" placeholder='sq.ft area'/>
            <input value={roomdetails.rent} onChange={e=>setRoomDetails({...roomdetails,rent:e.target.value})} style={{marginTop:"10px"}} type="text" placeholder='rent'/>
            <input value={roomdetails.deposit} onChange={e=>setRoomDetails({...roomdetails,deposit:e.target.value})}  style={{marginTop:"10px"}} type="text" placeholder='deposit'/>
            <input value={roomdetails.ownerno} onChange={e=>setRoomDetails({...roomdetails,ownerno:e.target.value})} style={{marginTop:"10px"}} type="text" placeholder='owner no'/>
            <input value={roomdetails.propertytype} onChange={e=>setRoomDetails({...roomdetails,propertytype:e.target.value})} style={{marginTop:"10px"}} type="text" placeholder='room/flat/shop etc..'/>
            <input value={roomdetails.consumerno} onChange={e=>setRoomDetails({...roomdetails,consumerno:e.target.value})} style={{marginTop:"10px"}} type="text" placeholder='consumer no'/>
          </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <p>Only allowed the following file types <br /><center><p className='text-info'>.jpg,.jpeg,.png</p></center></p>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleeditRoom}  variant="primary">save</Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditRoom