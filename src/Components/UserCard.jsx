import React from 'react'
import Button from 'react-bootstrap/Button';
import { patchunuserApi, patchuserApi } from '../Services/Allapi';
function UserCard({user}) {

  const handleBlock = async (userId) => { 
      userId=userId
      console.log(userId);
      
      const reqHeader= { 'Content-Type': 'application/json' } 
      try { 
        const response = await patchuserApi(userId,reqHeader)
        console.log(response);
        
         
         
         if (response.status==200) { 
          alert(response.data.message); } 
         else{
           alert(response.error || 'Failed to block user');
         }
         } 
         catch (error) {
           console.error('Error blocking user:', error); 
          alert('An error occurred while blocking the user. Please try again later.'); } };
  
  
  
          const handleunBlock = async (userId) => { 
            userId=user._id
            console.log(userId);
            
            const reqHeader= { 'Content-Type': 'application/json' } 
            try { 
              const response = await patchunuserApi(userId,reqHeader)
              console.log(response);
              
               
               
               if (response.status==200) { 
                alert(response.data.message);
               } 
               else{
                 alert(response.error || 'Failed to unblock user');
               }
               } 
               catch (error) {
                 console.error('Error unblocking user:', error); 
                alert('An error occurred while  unblocking the user. Please try again later.'); } };
  return (
    <div className='row d-flex'>
    <center>
    
    <div className='col ' style={{border:"1px solid black",margin:"10px", width:"280px"}}>
        <p>{user.username}</p>
    <p>{user.email}</p>
    <p>{user.password}</p>
    <p>{user._id}</p>
    <p>{user.status}</p>
     <Button onClick={()=>handleBlock(user._id)} style={{marginBottom:"20px"}} className='mb-3' variant="danger">block</Button>&nbsp;
     <Button onClick={()=>handleunBlock(user._id)} style={{marginBottom:"20px"}} className='mb-3' variant="success">unblock</Button>
    
    </div></center>
</div>
  )
}

export default UserCard