import React, { createContext, useState, useContext } from 'react';

const RoomContext = createContext();

export const useRoomContext = () => {
    return useContext(RoomContext);
};

export const RoomProvider = ({ children }) => {
    const [savedRooms, setSavedRooms] = useState([]);

    const saveRoom = (room) => {
        // Check if the room is already saved
        if (!savedRooms.some(savedRoom => savedRoom._id === room._id)) {
            setSavedRooms([...savedRooms, room]);
        }
        else { console.log('Room is already saved'); }
    };

    return (
        <RoomContext.Provider value={{ savedRooms, saveRoom }}>
            {children}
        </RoomContext.Provider>
    );
};

