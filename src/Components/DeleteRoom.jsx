import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { deleteroomAPI } from '../Services/Allapi';
import Button from 'react-bootstrap/Button';
function DeleteRoom({room}) {
    const [token,setToken]=useState("")

const handledelete=async(roomId)=>{
    if(token){
        const reqHeader={
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
          }
          try{
            const deleteproject=await deleteroomAPI(roomId,reqHeader)
            console.log(deleteproject);
            confirm("room deleted")
            window.location.reload()
            
          }
          catch(err){
            console.log(err);
            
          }

    }

}
useEffect(()=>{
    setToken(sessionStorage.getItem("token"))
  },[token])


  return (
    <div><Button onClick={()=>handledelete(room._id)} style={{width:"100px"}} variant="danger"><MdDelete/> delete</Button>
 </div>
  )
}

export default DeleteRoom