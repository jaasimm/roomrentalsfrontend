import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";

import Button from 'react-bootstrap/Button';
import { deletebookingAPI } from '../Services/Allapi';
function CancelBooking({bookingId}) {

     const [token,setToken]=useState("")
    
    const handlecancelbooking=async()=>{
      console.log("Room ID:", bookingId);
        if(token && bookingId){
            const reqHeader={
                "Content-Type":"multipart/form-data",
                "Authorization":`Bearer ${token}`
              }
              try{
                const deletebooking=await deletebookingAPI(bookingId,reqHeader)
                console.log(deletebooking);
                if (deletebooking.success) { confirm("Booking cancelled"); window.location.reload(); }
                
              }
              catch(err){
                console.log(err);
                
              }
    
        }
    
    }
    useEffect(()=>{
        setToken(sessionStorage.getItem("token"))
      },[])

  return (
    <div> {bookingId ? (  <MdDelete style={{color:"red"}} onClick={handlecancelbooking} />  ) : ( <div>Booking information is missing.</div> )} </div>
  )
}

export default CancelBooking