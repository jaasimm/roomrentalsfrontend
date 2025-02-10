import React, { useState } from 'react'
import ViewAllRooms from './ViewAllRooms'
import ViewALLBrokers from './ViewALLBrokers'
import ViewAllUsers from './ViewAllUsers'
import { FaSearch } from "react-icons/fa";
import { getParticularbrokeruploadroombysearchAPI, getParticularuserbookedroomAPI } from '../Services/Allapi';
import Adminroomcard from './Adminroomcard';
import ViewallBooking from './ViewallBooking';

function AdminDash() {
  const [brokerId, setBrokerId] = useState('');
  const [userid,setUserid]=useState('')
  const [userBookedRooms,setUserBookedRooms]=useState([])
   const [brokerRoomDetails, setBrokerRoomDetails] = useState([]); 
   const token = sessionStorage.getItem('token');

   const getBrokerUploadRooms = async () => {
     console.log("inside broker upload rooms"); 
     console.log(token); 
     if (token) {
       const reqHeader = {
         "Content-Type": "application/json", 
         "Authorization": `Bearer ${token}` 
        }; 
        console.log(reqHeader); 
        try { 
          const response = await getParticularbrokeruploadroombysearchAPI(brokerId, reqHeader);
           console.log(response); 
           setBrokerRoomDetails(response.data); 
          } 
          catch (error) { 
            console.log(error);
           }
           }
           };
const getuserbookedrooms = async ()=>{
  console.log(token); 
  if (token) {
    const reqHeader = {
      "Content-Type": "application/json", 
      "Authorization": `Bearer ${token}` 
     }; 
  try { 
    const response = await getParticularuserbookedroomAPI(userid, reqHeader);
     console.log(response); 
     setUserBookedRooms(response.data); 
    } 
    catch (error) { 
      console.log(error);
     }
    }

}
  
  return (
    <div className='row'>A

        <div style={{margin:"20px"}} className='col '>
        <nav className="sidebar"> 
            <h2 style={{marginTop:"200px"}}>Admin Dashboard</h2><br /> <ul> <li><a href="#dashboard">Dashboard</a></li> 
            <li><a href="#view-all-rooms">View All Rooms</a></li> 
            <li><a href="#all-users">All Users</a></li> 
            <li><a href="#all-brokers">All Brokers</a></li>
            <li><a href="#all-bookings">All Bookings</a></li>
             <li><a href="#broker-rooms">particular broker uploaded rooms</a></li> 
             <li><a href="#user-booked-rooms">particular user booked rooms</a></li> 
             
               </ul> 
               </nav></div>

             <div className='col mt-5'>
             <section id="dashboard">  </section>
              <section id="view-all-rooms"> <ViewAllRooms/> </section> <hr />
              <section id="all-users"> <ViewAllUsers/> </section> <hr />
               <section id="all-brokers"> <ViewALLBrokers/> </section> <hr />
               <section id="all-bookings"> <ViewallBooking/> </section> <hr />
              
                <section id="broker-rooms">
                  <center><h1>particular broker uploaded rooms</h1></center>
                          <center><input onChange={e=>setBrokerId(e.target.value)} type="text" placeholder='search by brokerid....'/> <br /><br />
                          <button onClick={getBrokerUploadRooms}>Search</button>
                          </center>                       
            {
              brokerRoomDetails.length>0?brokerRoomDetails.map(room=>(
                <div className="col">
                  <Adminroomcard room={room}/>
                </div>

              )):"no rooms"
            } 
                </section>
                <section id="user-booked-rooms">
                  <center><h1>particular user booked rooms</h1></center>
                          <center><input onChange={e=>setUserid(e.target.value)} type="text" placeholder='search by userid....'/> <br /><br />
                          <button onClick={getuserbookedrooms}>Search</button>
                          </center>                       
            {
              userBookedRooms.length>0?userBookedRooms.map(i=>(
                
                   <div style={{justifyContent:"center"}} className="col d-flex text-dark">
              <p>paymentId : {i.paymentId} <br />
              brokerId : {i.userId} <br />
              userid : {i.userid} <br />
              id : {i._id} <br />
             createdAt : {i.createdAt} <br />
              receiptId : {i.receiptId} <br />
              roomId : {i.roomId} <br />
              status : {i.status} <br />
              currency : {i.currency} <br />
              amount : {i.amount}</p>
  
                </div>

              )):"no bookingss"
            } 
                </section>


             </div>
    </div>
  )
}

export default AdminDash