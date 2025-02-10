import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { addcomplaintsAPI } from '../Services/Allapi';

const ReprtaPrblm = () => {
    const [complaint, setComplaint] = useState({
        username: "",
        email: "",
        phoneno: "",
        problem: ""
    });

    const handleaddcomplaint = async () => {
       
        
        const { username, email, phoneno, problem } = complaint;
        console.log(complaint);
     if(!username||!email||!phoneno||!problem){
        alert("please fll the form")
        return;
     }else{

        const reqBody = new FormData();
        reqBody.append("username", username);
        reqBody.append("email", email);
        reqBody.append("phoneno", phoneno);
        reqBody.append("problem", problem);
        console.log(reqBody);
        

        const token = sessionStorage.getItem("token");
        console.log(token);
        
        if (token) {
            const reqHeader = {
                
                "Authorization": `Bearer ${token}`
            };
            try {
                const response = await addcomplaintsAPI(reqBody, reqHeader);
                console.log(response);
                //setComplaint(response.data)

                if (response.status === 201) {
                    alert("Complaint added successfully");
                    setComplaint({
                        username: "",
                        email: "",
                        phoneno: "",
                        problem: ""
                    });
                } else {
                    alert(response.data.meassage);
                }
            } catch (err) {
                 console.log(err);
                  alert("An error occurred while adding the complaint.");
                 } 
                } else {
                     alert("Token not found. Please log in again.");
            }
     };
    }
    return (
        <div>
            <center>
                <div className="row col-3">
                    <div style={{ marginTop: "160px", border: "5px solid ", marginBottom: "100px" }} className="col p-5 border-primary">
                        <h2>RoomRentals</h2>
                        <p>Are you facing any problem? Let us fix this.</p>
                      <input onChange={e => setComplaint({...complaint, username: e.target.value })} type="text" />
                      <input onChange={e => setComplaint({...complaint, email: e.target.value })} type="text" />
                      <input onChange={e => setComplaint({...complaint, phoneno: e.target.value })} type="text" name="" id="" />
                      <input onChange={e => setComplaint({...complaint, problem: e.target.value })} type="text" />
                        <MDBBtn onClick={handleaddcomplaint} className='mt-3' color='primary'>
                            Submit
                        </MDBBtn>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default ReprtaPrblm;
