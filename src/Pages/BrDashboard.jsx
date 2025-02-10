import React, { useContext, useEffect, useState } from 'react'
import { getParticularbrokerRoomAPI, getuserbookedroomApi } from '../Services/Allapi';
import BrokerroomCard from '../Components/BrokerroomCard';
import { addRoomContextResponse } from '../ContextAPI/ContextShare';
import RoomCard from '../Components/RoomCard';
import { useRoomContext } from '../ContextAPI/RoomContext';

function BrDashboard() {
const [username,setUsername]=useState()
const[token,setToken]=useState("")
const[brokerroomdetails,setBrokerroomdetails]=useState([])
const[userroomdetails,setUserroomdetails]=useState([])
const {addRoomContext,setAddRoomContext}=useContext(addRoomContextResponse)
const [savedRooms, setSavedRooms] = useState([]);


const getbrokeruploadrooms=async()=>{
  console.log("inside broker upload rooms");
  console.log(token);
  if(token){
    const reqHeader={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    console.log(reqHeader);
    try{
      const response=await getParticularbrokerRoomAPI(reqHeader)
      console.log(response);
      setBrokerroomdetails(response.data)
      
    }
    catch(error){
      console.log(error);
      
    }
    
  
}
}

const getuserbookedrooms=async()=>{
  console.log("inside broker upload rooms");
  console.log(token);
  if(token){
    const reqHeader={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    console.log(reqHeader);
    try{
      const response=await getuserbookedroomApi(reqHeader)
      console.log(response);
      setUserroomdetails(response.data)
      
    }
    catch(error){
      console.log(error);
      
    }
    
  
}
}
const getSavedRooms = () => {
   const savedRooms = JSON.parse(localStorage.getItem('savedRooms')) || [];
    setSavedRooms(savedRooms); 
  };




useEffect(()=>{
  setUsername(localStorage.getItem("username"))
  setToken(sessionStorage.getItem("token"))
  getbrokeruploadrooms()
  getuserbookedrooms()
  getSavedRooms(); // Fetch saved rooms

},[token,addRoomContext])


  return (
    <div >
        <div  className="row ">
          
          <h1 style={{margintop:"300px ",color:"white"}}>ghjkk</h1>
            
            
            </div>
            {
              brokerroomdetails.length>0?brokerroomdetails.map(room=>(
                <div className="col">
                  <h4 style={{margintop:"70px",color:"black"}}>welcome {username}  your uploaded rooms</h4>
                  <BrokerroomCard room={room}/>
                </div>

              )):"no rooms"
            } 

{
              userroomdetails.length>0?userroomdetails.map(room=>(
                <div className="col">
                  <h4 style={{margintop:"70px",color:"black"}}>welcome {username}  your booked rooms</h4>
                  <RoomCard room={room}/>
                </div>

              )):"no rooms"
            } 
            <div>
            <h4 style={{margintop:"70px",color:"black"}}>welcome {username}  your saved rooms</h4>
            {
              
              savedRooms.length>0?savedRooms.map(room=>(
                <div className="col">
                  
                  <RoomCard room={room} isDashboard={true}/>
                </div>

              )):"no rooms"
            } 
            </div>



        </div>
        
    
  )
}

export default BrDashboard