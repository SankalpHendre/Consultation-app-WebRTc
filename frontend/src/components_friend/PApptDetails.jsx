import React from 'react'
import './SideBar.css'
import { IoIosChatboxes } from "react-icons/io";
import { MdSpeakerNotes } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { AiFillExclamationCircle } from "react-icons/ai";
const ApptDetails = ({ activeSidebar, setActiveSidebar }) => {
    return (
        <div className='sidebar-container'>
            <div className='sidebar-nav'>
                <div className='nselected' onClick={() => setActiveSidebar(activeSidebar === "chat" ? null : "chat")}>
                    <IoIosChatboxes></IoIosChatboxes>
                </div>


                <div className='nselected' onClick={() => setActiveSidebar(activeSidebar === "notes" ? null : "notes")}>
                    <MdSpeakerNotes></MdSpeakerNotes>
                </div>

                <div className='nselected' onClick={() => setActiveSidebar(activeSidebar === "person" ? null : "person")}>
                    <MdPerson></MdPerson>
                </div>

                <div className='selected' onClick={() => setActiveSidebar(activeSidebar === "alert" ? null : "alert")}>
                    <div style={{ marginTop: '3px' }}>
                        <AiFillExclamationCircle></AiFillExclamationCircle>
                    </div>
                    <div className='chat'>
                        Appt.Details
                    </div>
                </div>
            </div>
            <div className='sidebar-content'>
                <div style={{ borderRadius: '14px', padding: '14px', borderWidth: '1px', background: '#FFFFFF', border: '1px solid #E2E3E566', boxShadow: '0px 0px 6px 0px #0000000A' }}>
                    <div>
                        <div className='sname'>Department:</div>
                        <div className='pname'>Admin</div>
                        <div className='sname'>Appointment Type:</div>
                        <div className='pname'>Video Consult</div>
                        <div className='sname'>Personnel:</div>
                        <div className='pname'>Dr.John Wick</div>
                        <div className='sname'>Appointment Reason:</div>
                        <div className='pname'>Other</div>
                        <div className='sname'>Date:</div>
                        <div className='pname'>12/02/2026</div>
                        <div className='sname'>Time From:</div>
                        <div className='pname'>11.00 AM</div>
                        <div className='sname'>Time To:</div>
                        <div className='pname'>11.30 AM</div>
                        <div className='sname'>Remark:</div>
                        <div className='pname'>Appointment booked for routine fertility consultation and</div>
                    </div>
                </div>
            </div>
            <div className='sidebar-bottom'>

            </div>

        </div>
    )
}

export default ApptDetails