import React, { useState } from 'react'
import { IoIosChatboxes } from "react-icons/io";
import { MdSpeakerNotes } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { AiFillExclamationCircle } from "react-icons/ai";
import './RightSideBar.css';
const RightSideBar = ({ activeSidebar, setActiveSidebar ,unreadChat}) => {
    const [selected, setSelected] = useState(null);
  
    return (
      <div>
        <div className='right-sidebar-container'>
          <div
            className={`rightsidebar-frame ${selected === "chat" ? "active" : ""}`}
            style={{position:'relative'}}
            onClick={() => setActiveSidebar(activeSidebar === "chat" ? null : "chat")}
          >
            <IoIosChatboxes />
            {unreadChat && (
              <span style={{
                position: 'absolute',
                top: '8px',         // Adjust based on your icon's padding
                right: '8px',        // Adjust based on your icon's padding
                height: '10px',
                width: '10px',
                backgroundColor: '#ff4d4f', // Vibrant red
                borderRadius: '50%',
                 // Makes it "pop" against the icon
               
              }} />
            )}
          </div>
  
          <div
            className={`rightsidebar-frame ${selected === "notes" ? "active" : ""}`}
            onClick={() => setActiveSidebar(activeSidebar === "notes" ? null : "notes")}
          >
            <MdSpeakerNotes />
          </div>
  
          <div
            className={`rightsidebar-frame ${selected === "person" ? "active" : ""}`}
            onClick={() => setActiveSidebar(activeSidebar === "person" ? null : "person")}
          >
            <MdPerson />
          </div>
  
          <div
            className={`rightsidebar-frame ${selected === "alert" ? "active" : ""}`}
            onClick={() => setActiveSidebar(activeSidebar === "alert" ? null : "alert")}
          >
            <AiFillExclamationCircle />
          </div>
        </div>
      </div>
    )
  }
  
  export default RightSideBar;