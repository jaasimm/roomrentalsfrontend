import React, { useEffect, useState } from 'react';
import { getAllRoomsAPI } from '../Services/Allapi';
import { FaSearch } from "react-icons/fa";
import Adminroomcard from './Adminroomcard';
import CancelBooking from './CancelBooking';

function ViewAllRooms() {
  const [token, setToken] = useState("");
  const [allRooms, setAllRooms] = useState([]);
  const [searchkey, setSearchkey] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  

  const getallrooms = async (page = 1) => {
    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      };
      console.log(reqHeader);

     
      
      try {
        const response = await getAllRoomsAPI(searchkey, reqHeader, page);
        console.log(response);

        if (response && response.data.rooms) {
          setAllRooms(response.data.rooms);
          setTotalPages(response.data.totalPages);
        } else {
          console.error("Invalid response from API:", response);
          setError('Invalid response from API');
          setAllRooms([]);
          setTotalPages(0);
        }
      } catch (error) {
        console.error('Error fetching rooms:', error);
       
      } 
    }
  };

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
    getallrooms(currentPage);
  }, [token, searchkey, currentPage]);

  const handleRoomSelection = (roomId) => {
     setSelectedRoomId(roomId); // Update the selected roomId 
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    getallrooms(page);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>All Rooms</h1>
      <center>
        <input
          style={{ marginTop: "10px" }}
          onChange={e => setSearchkey(e.target.value)}
          type="text"
          placeholder='search.....'
        />
        <FaSearch style={{ marginLeft: "-20px" }} />
      </center>
      
      <div className='row'>
        {allRooms.length > 0 ? allRooms.map(room => (
          <div className="col" key={room._id}>
            <Adminroomcard room={room} onClick={() => handleRoomSelection(room._id)} />
          </div>
        )) : "no rooms"}
      </div>
      <div className='pagination 'style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {Array.from({ length: totalPages }, (_, index) => (
          
          <button 
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
            style={{ margin: '0 5px', padding: '10px 20px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {selectedRoomId && <Payment roomId={selectedRoomId} />}
      {selectedRoomId && <CancelBooking roomId={selectedRoomId} />}
    </div>
  );
}

export default ViewAllRooms;
