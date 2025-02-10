import { CommonApi } from "./CommonApi";
import { ServerUrl } from "./ServerUrl";


//add user registration to the db
export const userRegisterAPI=async(reqBody)=>{
   return await CommonApi('post',`${ServerUrl}/api/userregister`,reqBody,"")
}

//add user login details to the db
export const userLoginAPI=async(reqBody)=>{
   return await CommonApi('post',`${ServerUrl}/api/userlogin`,reqBody,"")
}

//add broker registration details to the server
export const brokerRegisterAPI=async(reqBody)=>{
    return await CommonApi('post',`${ServerUrl}/api/register`,reqBody,"")
 }


 //add broker login details to the server
export const brokerLoginAPI=async(reqBody)=>{
    return await CommonApi('post',`${ServerUrl}/api/login`,reqBody,"")
 }


 //add room details to the database
 export const addRoomAPI=async(reqBody,reqHeader)=>{
    return await CommonApi('post',`${ServerUrl}/api/addRoom`,reqBody,reqHeader)
 }
 //add payment
 export const addpaymentAPI=async(reqBody,reqHeader)=>{
  return await CommonApi('post',`${ServerUrl}/api/order`,reqBody,reqHeader)
 }


 //get room details from the database for user page 
 export const userpageRoomAPI=async(searchKey)=>{
   return await CommonApi('get',`${ServerUrl}/api/limitrooms?search=${searchKey}`,"","")
 }

 //get all room details from the db
//  export const getAllRoomsAPI=async(searchKey,reqHeader)=>{
//    return await CommonApi('get',`${ServerUrl}/api/allrooms?search=${searchKey}`,"",reqHeader)
//  }
 export const getAllRoomsAPI = async (searchKey, reqHeader, page = 1, limit = 2) => {
  return await CommonApi('get', `${ServerUrl}/api/allrooms?search=${searchKey}&page=${page}&limit=${limit}`, "", reqHeader);
};


 //get particular broker uploaaded rooms
 export const getParticularbrokerRoomAPI=async(reqHeader)=>{
   return await CommonApi('get',`${ServerUrl}/api/particularbrokerrooms`,"",reqHeader)
 }
 //for adminsearch
 export const getParticularbrokeruploadroombysearchAPI=async(brokerId,reqHeader)=>{
  return await CommonApi('get',`${ServerUrl}/api/particularbrokerrooms/${brokerId}`, "", reqHeader)
 }
//for admin search get particular user booked room
export const getParticularuserbookedroomAPI=async(userid,reqHeader)=>{
  return await CommonApi('get',`${ServerUrl}/api/userbookedroom/${userid}`, "", reqHeader)
}


 //edit room
 export const editroomAPI=async(roomId,reqBody,reqHeader)=>{
   return await CommonApi('put',`${ServerUrl}/api/editroom/${roomId}`,reqBody,reqHeader)
 }


 //delete room
 export const deleteroomAPI=async(roomId,reqHeader)=>{
   return await CommonApi('delete',`${ServerUrl}/api/deleteroom/${roomId}`,"",reqHeader)
 }

  //cancel booking
  export const deletebookingAPI=async(bookingId,reqHeader)=>{
    return await CommonApi('delete',`${ServerUrl}/api/deletebooking/${bookingId}`,"",reqHeader)
  }
 

 //get all brokers
 export const getAllbrokersAPI=async(searchKey,reqHeader)=>{
  return await CommonApi('get',`${ServerUrl}/api/allbrokers?search=${searchKey}`,"",reqHeader)
}


//get all users
export const getAllusersAPI=async(searchKey,reqHeader)=>{
  return await CommonApi('get',`${ServerUrl}/api/allusers?search=${searchKey}`,"",reqHeader)
}

//get all bookings
export const getAllbookingAPI=async(searchKey,reqHeader)=>{
  return await CommonApi('get',`${ServerUrl}/api/getbooking?search=${searchKey}`,"",reqHeader)
}

//add complaint
export const addcomplaintsAPI=async(reqBody,reqHeader)=>{
  return await CommonApi('post',`${ServerUrl}/api/addcomplaintt`,reqBody,reqHeader)
}

//user booked room for user dashboard

export const getuserbookedroomApi=async(reqHeader)=>{
  return await CommonApi('get',`${ServerUrl}/api/userbooked`,"",reqHeader)
}

//block broker
export const patchbrokerApi=async(brokerId,reqHeader)=>{
  return await CommonApi('patch',`${ServerUrl}/api/blockBroker/${brokerId}`,{},reqHeader)
}

//block broker
export const patchunbrokerApi=async(brokerId,reqHeader)=>{
  return await CommonApi('patch',`${ServerUrl}/api/unblockBroker/${brokerId}`,{},reqHeader)
}


//block user
export const patchuserApi=async(userId,reqHeader)=>{
  return await CommonApi('patch',`${ServerUrl}/api/blockUser/${userId}`,{},reqHeader)
}

//unblock user
export const patchunuserApi=async(userId,reqHeader)=>{
  return await CommonApi('patch',`${ServerUrl}/api/unblockUser/${userId}`,{},reqHeader)
}