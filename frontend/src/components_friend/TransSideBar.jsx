import React from 'react'
import './SideBar.css'
import { IoIosChatboxes } from "react-icons/io";
import { MdSpeakerNotes } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { AiFillExclamationCircle } from "react-icons/ai";
const TransSideBar = ({ activeSidebar, setActiveSidebar, notes }) => {
    return (
        <div className='sidebar-container'>
            <div className='sidebar-nav'>
                <div className='nselected' onClick={() => setActiveSidebar(activeSidebar === "chat" ? null : "chat")}>
                    <IoIosChatboxes></IoIosChatboxes>
                </div>
                <div className='selected' onClick={() => setActiveSidebar(activeSidebar === "notes" ? null : "notes")} >
                    <div style={{ marginTop: '3px' }}>
                        <MdSpeakerNotes></MdSpeakerNotes>
                    </div>
                    <div className='chat'>
                        Transcript
                    </div>
                </div>
                <div className='nselected' onClick={() => setActiveSidebar(activeSidebar === "person" ? null : "person")}>
                    <MdPerson></MdPerson>
                </div>
                <div className='nselected' onClick={() => setActiveSidebar(activeSidebar === "alert" ? null : "alert")}>
                    <AiFillExclamationCircle></AiFillExclamationCircle>
                </div>

            </div>
            <div className='sidebar-content'>
                <div style={{ padding: '16px', height: '60vh' }}>
                {notes && notes.length > 0 ? (
                        notes.map((note, index) => (
                            <div key={index} style={{ marginBottom: '12px', fontSize: '14px' }}>
                                {/* Speaker Name - Conditional Color */}
                                <span style={{ 
                                    fontFamily: 'Nunito',
                                    fontWeight: 400,
                                    fontStyle: 'Regular',
                                    fontSize: '14px',
                                    
                                    
                                    color: "#9E9E9E",
                                    marginRight: '6px' 
                                }}>
                                    {note.speaker}:
                                </span>

                                {/* Transcript Text - Different Color */}
                                <span style={{ color: '#444', lineHeight: '1.4' }}>
                                    {note.text}
                                </span>

                                
                            </div>
                        ))
                    ) : (
                        <p style={{ color: '#999', fontStyle: 'italic', fontSize: '13px' }}>
                            Live conversation transcript will appear here...
                        </p>
                    )}
                </div>
            </div>
            <div className='sidebar-bottom'>

            </div>

        </div>
    )
}

export default TransSideBar