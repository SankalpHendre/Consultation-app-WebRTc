import React from 'react'
import './SideBar.css'
import { IoIosChatboxes } from "react-icons/io";
import { MdSpeakerNotes } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { AiFillExclamationCircle } from "react-icons/ai";
const ApptDetails = ({ activeSidebar, setActiveSidebar, apptData }) => {
    // Helper to format ISO time to AM/PM
    const formatTime = (iso) => {
        if (!iso) return "--";
        const date = new Date(iso);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    };

    // Helper to format ISO date to DD/MM/YYYY
    const formatDate = (iso) => {
        if (!iso) return "--";
        const date = new Date(iso);
        return date.toLocaleDateString('en-GB'); // DD/MM/YYYY
    };

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
                        <div className='pname'>{apptData?.department || "General"}</div>
                        <div className='sname'>Appointment Type:</div>
                        <div className='pname'>{apptData?.appointment_type || "Video Consult"}</div>
                        <div className='sname'>Personnel:</div>
                        <div className='pname'>{apptData?.doctor_name || "Dr. John Wick"}</div>
                        <div className='sname'>Appointment Reason:</div>
                        <div className='pname'>{apptData?.appointment_reason || "Other"}</div>
                        <div className='sname'>Date:</div>
                        <div className='pname'>{formatDate(apptData?.scheduled_time)}</div>
                        <div className='sname'>Time:</div>
                        <div className='pname'>{formatTime(apptData?.scheduled_time)}</div>
                        <div className='sname'>Remark:</div>
                        <div className='pname'>{apptData?.remark || "No remarks provided."}</div>
                    </div>
                </div>
            </div>
            <div className='sidebar-bottom'>

            </div>

        </div>
    )
}

export default ApptDetails