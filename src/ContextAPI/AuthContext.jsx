import React, { Children, useEffect, useState } from 'react'
import { createContext } from 'react'

 export const AuthContextResponse=createContext()
function AuthContext({Children}) {
    const[isAuthorized,setIsAuthorized]=useState(false)
    useEffect(() => { 
        setIsAuthorized(!!sessionStorage.getItem("token")); 

    }, []);

    
  return (
    <div>
        <AuthContextResponse.Provider value={{isAuthorized,setIsAuthorized}}>
            {Children}
        </AuthContextResponse.Provider>
    </div>
  )
}

export default AuthContext