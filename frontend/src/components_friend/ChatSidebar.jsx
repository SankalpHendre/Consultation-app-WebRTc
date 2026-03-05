import React, { useState } from 'react'
import './SideBar.css'
import { IoIosChatboxes } from "react-icons/io";
import { MdSpeakerNotes } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { AiFillExclamationCircle } from "react-icons/ai";
import { BsSendFill } from "react-icons/bs";
const ChatSidebar = ({ activeSidebar, setActiveSidebar, messages, onSendMessage, myName }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSend = () => {
        if (inputValue.trim()) {
            onSendMessage(inputValue);
            setInputValue(""); // Clear input after sending
        }
    };
    return (
        <div className='sidebar-container'>
            <div className='sidebar-nav'>
                <div className='selected' onClick={() => setActiveSidebar(activeSidebar === "chat" ? null : "chat")}>
                    <div style={{ marginTop: '3px' }}>
                        <IoIosChatboxes></IoIosChatboxes>
                    </div>
                    <div className='chat'>
                        Chat
                    </div>
                </div>
                <div className='nselected' onClick={() => setActiveSidebar(activeSidebar === "notes" ? null : "notes")}>
                    <MdSpeakerNotes></MdSpeakerNotes>
                </div>
                <div className='nselected' onClick={() => setActiveSidebar(activeSidebar === "person" ? null : "person")}>
                    <MdPerson></MdPerson>
                </div>
                <div className='nselected' onClick={() => setActiveSidebar(activeSidebar === "alert" ? null : "alert")}>
                    <AiFillExclamationCircle></AiFillExclamationCircle>
                </div>
            </div>
            <div className='sidebar-content'>
                <div style={{ padding: '16px', height: '60vh', overflowY: 'auto' }}>
                    {messages.map((msg, index) => (
                        <div key={index} style={{
                            marginBottom: '10px',
                            textAlign: msg.sender === myName ? 'right' : 'left'
                        }}>
                            <div style={{ fontSize: '10px', color: '#888' }}>{msg.sender} • {msg.timestamp}</div>
                            <div style={{
                                display: 'inline-block',
                                padding: '8px 12px',
                                borderRadius: '12px',
                                background: msg.sender === myName ? '#FFF2EE' : '#FAFAFA',
                                color: msg.sender === myName ? 'black' : 'black',
                                marginTop: '4px',
                                fontSize:'13px'
                            }}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='sidebar-bottom'>
                <div className='input-box'>
                    <input type='text' placeholder='Type Message Here..' value={inputValue} onChange={(e) => setInputValue(e.target.value)}  onKeyPress={(e) => e.key === 'Enter' && handleSend()} style={{ border: 'none', background: '#F0F1F2' }}></input>
                    <div className='send' onClick={handleSend}>
                        <BsSendFill></BsSendFill>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatSidebar