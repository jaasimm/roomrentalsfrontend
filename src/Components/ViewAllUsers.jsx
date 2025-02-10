import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import { getAllusersAPI } from '../Services/Allapi'
import { FaSearch } from "react-icons/fa";
import Payment from './Payment';
function ViewAllUsers() {
    const [token,setToken]=useState("")
            const [allusers,setAllusers]=useState([])
            //const [searchkey,setSearchkey]=useState()
            const [searchkey,setSearchkey]=useState("")
            const [selectedUserId, setSelectedUserId] = useState(null);
            console.log(searchkey);
            
        
            const getallusers=async()=>{
                if(token){
                    const reqHeader={
                            "Content-Type":"multipart/form-data",
                            "Authorization":`Bearer ${token}`
                          
                    }
                    console.log(reqHeader);
                    
                   const response=await getAllusersAPI(searchkey,reqHeader)
                   console.log(response);
                   
                   // console.log(response);   
                    setAllusers(response.data)
                }
            }
            useEffect(()=>{
                setToken(sessionStorage.getItem("token"))
            getallusers()
            },[token,searchkey])
            const handleUserSelection = (userId) => { setSelectedUserId(userId); // Update the selected userId 
            };

  return (
    <div className='row'>
        <center><h1>ALL  Users</h1></center>
        <center><input onChange={e=>setSearchkey(e.target.value)} type="text" placeholder='search.......'  /><FaSearch style={{marginLeft:"-20px"}} /></center>
         {
              allusers.length>0?allusers.map(user=>(
                <div className="col d-flex "key={user._id}>
                  <UserCard user={user} onClick={() => handleUserSelection(user._id)}/>
                </div>

              )):"no users"
            } 
             {selectedUserId && <Payment userId={selectedUserId} />} 
    </div>
  )
}

export default ViewAllUsers