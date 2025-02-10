import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import { brokerLoginAPI, brokerRegisterAPI } from '../Services/Allapi';
import axios from 'axios';

function AuthBroker({register}) {
  //creae a state to hold broker details
  const [brokerDetails,setBrokerDetails]=useState({
    username:"",
    email:"",
    password:""
  })
  const navigate=useNavigate()
  const handleregister=async()=>{
    console.log(brokerDetails);
    const{username,email,password}=brokerDetails
    if(!username||!email||!password){
      alert("please fill the form")
    }else{
      try{
      const response=await brokerRegisterAPI(brokerDetails)
      console.log(response);
      if(response.status==200){
        alert(response.data)
        setTimeout(() => {
          navigate('/broker/login')
        }, 1000)
        
      }
      else{
        alert(response.data.message)
      }
    }
    catch(err){

    }
      
    }
    
  }
// broker login
  const handlelogin=async()=>{
    console.log(brokerDetails);
    const{email,password}=brokerDetails
    if(!email||!password){
      alert("please fill the form")
    }else{
      try{
      const response=await brokerLoginAPI(brokerDetails)
      console.log(response);
      if(response.status==200){
        alert("login succesful")
        setTimeout(() => {
          navigate('/broker')
        }, 1000)
        localStorage.setItem("username",response.data.currentuser.username)
        sessionStorage.setItem("token",response.data.token)
      }
      else{
        alert(response.data.message)
      }
    }
    catch(error){
      console.error(error);
      

    }
      
    }
    
  }

  return (
    <div className='pt-5'>
    <center>

  <div style={{width:"380px", border:"3px solid" ,}} className="row border-primary mt-5" id='log'>

    
    <div  className="col p-4" id='haha'>
    <h4 className='text-center mt-' style={{fontWeight:'600'}}>
{
  register ? "SignUp " : "SignIn "
}

 Room Rentals

      </h4>

      {
        register && <MDBInput onChange={e=>setBrokerDetails({...brokerDetails,username:e.target.value})} style={{zIndex:"-2"}} label="phone no" id="typeText" type="name" className='mt-4' /> 
        
      }
  <MDBInput onChange={e=>setBrokerDetails({...brokerDetails,email:e.target.value})} label="Email" id="typeEmail" type="email" className='mt-4' />
  <MDBInput onChange={e=>setBrokerDetails({...brokerDetails,password:e.target.value})} label="Password" id="typePassword" type="password" className='mt-4' />

  {
    register ? <div>
         <MDBBtn onClick={handleregister} color='primary' className='mt-4'>
   Sign Up
  </MDBBtn>
      <p className='mt-2'>Already Registered ? <Link to={'/broker/login'}>Login now </Link> </p>
      <p className='text-primary'>broker</p>
    </div>
    :
    <div>
        <MDBBtn onClick={handlelogin}  color='primary' className='mt-4'>Sign In</MDBBtn>
      
      <p className='mt-2'>New To RoomRentals ? <Link to={'/broker/register'}>Register now</Link> </p>
      <p className='text-primary'>broker</p>
      
    </div>
  }


      
      

    </div>
    


  </div>
  </center>


</div>
  )
}

export default AuthBroker