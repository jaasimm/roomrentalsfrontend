import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBBtn,
    MDBInput,
  } from 'mdb-react-ui-kit';
  import { MDBTextArea } from 'mdb-react-ui-kit';
  import { FaPhoneAlt } from "react-icons/fa";
  import { MdEmail } from "react-icons/md";
  import { FaLocationDot } from "react-icons/fa6";
function ContactUs() {
  return (
    <div className="">
            
<div className="row ">
<h3 style={{marginTop:"100px"}} className='text-center '>Get in Touch with Us</h3>
<p className='text-center '>"We’d Love to Hear From You!"</p>

</div>
<center></center>
<div className="row mt-3 mb-5" id='contactss'>
 
  <div style={{border:"2px solid"}} className="col-5 ms-5 mt-5 mb-5 p-5 border-primary">
    <p>    Have a question or need assistance? Our team is here to help. Please fill out the form below, or contact us through our Contact Form"
    </p>
    <form action="">
    <MDBInput className='mt-2' label="Full Name " id="typeText" type="text" />
        <MDBInput className='mt-2' label="Email" id="typeEmail" type="email" />
        <MDBInput className='mt-2' label="Phone Number" id="typeText" type="text" />
        <MDBTextArea className='mt-3' label="Message" id="textAreaExample" rows="{4}" />
        <MDBBtn  className='mt-3' color='primary'>submit</MDBBtn>
    </form>
  </div>

  <div className="col-6 mt-5">
  <iframe style={{marginLeft:"-20px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.786098359!2d76.2258912017371!3d9.970864495122745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d08f976f3a9%3A0xe9cdb444f06ed454!2sErnakulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1733325110463!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</div>

<div className="row">

</div>

    </div>
  )
}

export default ContactUs



