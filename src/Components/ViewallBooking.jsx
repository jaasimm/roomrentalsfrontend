import React, { useEffect, useState } from 'react'
import { getAllbookingAPI } from '../Services/Allapi'

import { FaSearch } from "react-icons/fa";
import CancelBooking from './CancelBooking';

function ViewallBooking() {
 
    const[token,setToken]=useState("")
    const [bookings,setBookings]=useState([])
    const [searchkey,setSearchkey]=useState("")
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [monthlyRevenue, setMonthlyRevenue] = useState(0);

      const getallbookings=async()=>{
                if(token){
                    const reqHeader={
                            "Content-Type":"multipart/form-data",
                            "Authorization":`Bearer ${token}`
                          
                    }
                    console.log(reqHeader);
                    
                   const response=await getAllbookingAPI(searchkey,reqHeader)
                   console.log(response);
                   setBookings(response.data)
                   const revenue = response.data.length * 500; // 500 INR per booking 
                   setTotalRevenue(revenue);

                   const currentMonth = new Date().getMonth();
                    const currentYear = new Date().getFullYear(); 
                    const monthlyBookings = response.data.filter(booking => { 
                      const bookingDate = new Date(booking.createdAt); 
                      return bookingDate.getMonth() === currentMonth && bookingDate.getFullYear() === currentYear; });
                       const monthlyRevenue = monthlyBookings.length * 500; // 500 INR per booking 
                       setMonthlyRevenue(monthlyRevenue);
                }
            }
             useEffect(()=>{
                        setToken(sessionStorage.getItem("token"))
                    getallbookings()
                    },[token,searchkey])
        
  return (
    <div className='row'>
    <center><h1>ALL  Bookings</h1></center>
    <center><input onChange={e=>setSearchkey(e.target.value)} type="text" placeholder='search....'/><FaSearch style={{marginLeft:"-20px"}} /></center>
    <center><h5>Total Revenue: {totalRevenue} INR</h5></center>
    <center><h5>Revenue Generated This Month: {monthlyRevenue} INR</h5></center>
     {
          bookings.length>0?bookings.map(i=>(
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
              amount : {i.amount} <CancelBooking  bookingId={i._id}  />
              </p>
              
            </div>

          )):"no bookings"
        } 
</div>
  )
}

export default ViewallBooking