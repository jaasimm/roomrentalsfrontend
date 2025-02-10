import React, { createContext, useState } from 'react'

export const addRoomContextResponse=createContext()

function ContextShare({children}) {

    const [addRoomContext,setAddRoomContext]=useState("")

  return (
    <div>
        <addRoomContextResponse.Provider value={{addRoomContext,setAddRoomContext}}>
            {children}
        </addRoomContextResponse.Provider>
    </div>
  )
}

export default ContextShare