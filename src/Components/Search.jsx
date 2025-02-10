import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
function Search() {
    const [token,setToken]=useState("")
    const [searchkey,setSearchkey]=useState("")
    console.log(searchkey);
    
    useEffect(()=>{
         setToken(sessionStorage.getItem("token"))
    },[token,searchkey])
  return (
    <div>
        <center>
                <input onChange={e=>setSearchkey(e.target.value)} style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", width:"500px", height:"35px"}} type="text" placeholder='search by location..' /><Button style={{marginLeft:"10px",width:"120px",height:"40px",marginTop:"-5px"}} variant="primary">search</Button>
            </center>
    </div>
  )
}

export default Search