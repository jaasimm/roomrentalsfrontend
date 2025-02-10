import React, { useEffect, useState } from 'react'
import { getAllbrokersAPI } from '../Services/Allapi'
import BrokerCard from './BrokerCard'
import { FaSearch } from "react-icons/fa";

function ViewALLBrokers() {
     const [token,setToken]=useState("")
        const [allbrokers,setAllbrokers]=useState([])
        //const [searchkey,setSearchkey]=useState()
        const [searchkey,setSearchkey]=useState("")
        console.log(searchkey);
        
    
        const getallbrokers=async()=>{
            if(token){
                const reqHeader={
                        "Content-Type":"multipart/form-data",
                        "Authorization":`Bearer ${token}`
                      
                }
                console.log(reqHeader);
                
               const response=await getAllbrokersAPI(searchkey,reqHeader)
               console.log(response);
               
               // console.log(response);   
                setAllbrokers(response.data)
            }
        }
        useEffect(()=>{
            setToken(sessionStorage.getItem("token"))
        getallbrokers()
        },[token,searchkey])
  return (
    <div className='row'>
        <center><h1>ALL  Brokers</h1></center>
        <center><input onChange={e=>setSearchkey(e.target.value)} type="text" placeholder='search....'/><FaSearch style={{marginLeft:"-20px"}} /></center>
         {
              allbrokers.length>0?allbrokers.map(broker=>(
                <div className="col d-flex "key={broker._id}>
                  <BrokerCard broker={broker}/>
                </div>

              )):"no brokers"
            } 
    </div>
  )
}

export default ViewALLBrokers