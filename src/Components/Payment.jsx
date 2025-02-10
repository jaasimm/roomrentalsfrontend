import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';

function Payment() {

  const [userId, setUserId] = useState('');
  const [userid,setUserid]=useState('')
   const [roomId, setRoomId] = useState(''); 
   useEffect(() => { 
    const storedUserId = sessionStorage.getItem('selectedUserId');
    const storedUserid = sessionStorage.getItem('userid')
     const storedRoomId = sessionStorage.getItem('selectedRoomId'); 
     if (storedUserId) setUserId(storedUserId); 
     if (storedRoomId) setRoomId(storedRoomId); 
     if (storedUserid) setUserid(storedUserid);
    }, []);

 const amount= 50000;
 const currency ="INR";
 const receiptId="qwsaq1";
 
  
  const paymentHandler=async (e)=>{
    
    e.preventDefault();
     try { // Create order on the backend 
     const orderResponse = await fetch("http://localhost:3000/order",
      { 
        method: "POST",
         body: JSON.stringify({
           amount, currency, receipt: receiptId }), 
           headers: { "Content-Type": "application/json" } });
       const order = await orderResponse.json(); 
       console.log(order);
    
    var options = {
      key: "rzp_test_Val54VaYObGrZD", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "roomrentals", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const body = { ...response,
           amount, currency, receiptId, 
           roomId, 
           userId,
           userid,
           status: response.razorpay_payment_id ? 'paid' : 'failed' };


        const validateRes = await fetch(
          "http://localhost:3000/order/validate",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );


        const jsonRes = await validateRes.json();
        console.log(jsonRes);

        if (jsonRes.msg === "success") { 
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
         }
          else { 
            alert("Payment validation failed. Please try again."); 
          }

          //store the booking details
         const bookingResponse = await fetch("http://localhost:3000/booking/create", { 
          method: "POST",
           body: JSON.stringify({
             userId,
             userid, 
             roomId,
              amount, currency, 
              receiptId,
              paymentId: response.razorpay_payment_id,
              status: response.razorpay_payment_id ? 'paid' : 'failed' }),
               headers: { 
                "Content-Type": "application/json" }
             });
             const bookingResult = await bookingResponse.json();
              console.log('Booking response:', bookingResult);
      },

      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: "", //your customer's name
        email: "",
        contact: "", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    
  }
  var rzp1 = new window.Razorpay(options);
  rzp1.on("payment.failed", function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  });

  rzp1.open();
}
catch (error) { 
  console.error("Error processing payment:", error);
   alert("There was an error processing your payment. Please try again."); 
  }
 };

  return (
    <div>
      <Button onClick={paymentHandler} style={{width:"90px"}} variant="primary">book </Button>
      
    </div>
  )
}

export default Payment