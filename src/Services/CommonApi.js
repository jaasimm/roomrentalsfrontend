import axios from 'axios'

// configure  the axios
export const CommonApi=async(httpMethod,url,reqBody,reqheader)=>{
    const reqConfig={
        method:httpMethod,
        url:url,
        data:reqBody,
        headers:reqheader?reqheader:{
            "Content-Type":"application/json"
        }
    }

    return await axios(reqConfig).then((response)=>{
        return response

    })
    
    .catch((error) => {
        console.error(error.response || error.message);
        return error.response || error;
      })
      
 }