import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import { userLoginAPI, userRegisterAPI } from '../Services/Allapi';


function Auth({register}) {
  //creae a state to hold user details
  const [userDetails,setUserDetails]=useState({
    username:"",
    email:"",
    password:""
  })
  const navigate=useNavigate()
  const handleregister=async()=>{
    console.log(userDetails);
    const{username,email,password}=userDetails
    if(!username||!email||!password){
      alert("please fill the form")
    }else{
      try{
      const response=await userRegisterAPI(userDetails)
      console.log(response);
      if(response.status==200){
        alert(response.data)
        // Store userId in session storage
         sessionStorage.setItem("userid", response.data.user._id);
        setTimeout(() => {
          navigate('/user/login')
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
    console.log(userDetails);
    const{email,password}=userDetails
    if(!email||!password){
      alert("please fill the form")
    }else{
      try{
      const response=await userLoginAPI(userDetails)
      console.log(response);
      if(response.status==200){
        alert("login succesful")
        setTimeout(() => {
          navigate('/user')
        }, 1000)
        localStorage.setItem("username",response.data.currentuser.username)
        sessionStorage.setItem("userid",response.data.currentuser._id)
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

      <div style={{width:"380px", border:"3px solid" ,}} className="row border-primary mt-5 " id='log'>

        
        <div  className="col p-4" id='haha'>
        <h4 className='text-center mt-5' style={{fontWeight:'600'}}>
    {
      register ? "SignUp " : "SignIn "
    }
     Room Rentals
          </h4>

          {
            register && <MDBInput onChange={e=>setUserDetails({...userDetails,username:e.target.value})} style={{zIndex:"-2"}} label="Username" id="typeText" type="text" className='mt-4' /> 
            
          }
      <MDBInput onChange={e=>setUserDetails({...userDetails,email:e.target.value})} label="Email" id="typeEmail" type="email" className='mt-4' />
      <MDBInput onChange={e=>setUserDetails({...userDetails,password:e.target.value})} label="Password" id="typePassword" type="password" className='mt-4' />

      {
        register ? <div>
             <MDBBtn onClick={handleregister} color='primary' className='mt-4'>
       Sign Up
      </MDBBtn>
          <p className='mt-2'>Already Registered ? <Link to={'/user/login'}>Login now </Link> </p>
        </div>
        :
        <div>
            <MDBBtn onClick={handlelogin}  color='primary' className='mt-4'>Sign In</MDBBtn>
          
          <p className='mt-2'>New To Room Rentals ? <Link to={'/user/register'}>Register now</Link> </p>
        </div>
      }


          
          

        </div>
        


      </div>
      </center>


    </div>
  )
}

export default Auth