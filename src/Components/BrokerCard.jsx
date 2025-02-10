import React from 'react'
import Button from 'react-bootstrap/Button';
import { patchbrokerApi, patchunbrokerApi } from '../Services/Allapi';
function BrokerCard({broker}) {

  const handleBlock = async (brokerId) => { 
    brokerId=broker._id
    console.log(brokerId);
    
    const reqHeader= { 'Content-Type': 'application/json' } 
    try { 
      const response = await patchbrokerApi(brokerId,reqHeader)
      console.log(response);
      
       
       
       if (response.status==200) { 
        alert(response.data.message); } 
       else{
         alert(response.error || 'Failed to block broker');
       }
       } 
       catch (error) {
         console.error('Error blocking broker:', error); 
        alert('An error occurred while blocking the broker. Please try again later.'); } };



        const handleunBlock = async (brokerId) => { 
          brokerId=broker._id
          console.log(brokerId);
          
          const reqHeader= { 'Content-Type': 'application/json' } 
          try { 
            const response = await patchunbrokerApi(brokerId,reqHeader)
            console.log(response);
            
             
             
             if (response.status==200) { 
              alert(response.data.message);
             } 
             else{
               alert(response.error || 'Failed to unblock broker');
             }
             } 
             catch (error) {
               console.error('Error unblocking broker:', error); 
              alert('An error occurred while  unblocking the broker. Please try again later.'); } };

  return (
    <div className='row d-flex'>
        <center>
        
        <div className='col ' style={{border:"1px solid black",margin:"10px", width:"300px"}}>
            <p>{broker.username}</p>
        <p>{broker.email}</p>
        <p>{broker.password}</p>
        <p>{broker._id}</p>
        <p>{broker.status}</p>
         <Button onClick={()=>handleBlock(broker._id)} style={{marginBottom:"20px"}} className='mb-3' variant="danger">block</Button>&nbsp;
         <Button onClick={()=>handleunBlock(broker._id)} style={{marginBottom:"20px"}} className='mb-3' variant="success">unblock</Button>
        
        </div></center>
    </div>
  )
}

export default BrokerCard