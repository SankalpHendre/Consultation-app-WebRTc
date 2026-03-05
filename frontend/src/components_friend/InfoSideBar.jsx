import React from 'react'
import './SideBar.css'
import { IoIosChatboxes } from "react-icons/io";
import { MdSpeakerNotes } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { AiFillExclamationCircle } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
const InfoSideBar = ({ activeSidebar, setActiveSidebar, patientData }) => {
    return (
        <div className='sidebar-container'>
            <div className='sidebar-nav'>
                <div className='nselected' onClick={() => setActiveSidebar(activeSidebar === "chat" ? null : "chat")}>
                    <IoIosChatboxes></IoIosChatboxes>
                </div>

                <div className='nselected' onClick={() => setActiveSidebar(activeSidebar === "notes" ? null : "notes")}>
                    <MdSpeakerNotes></MdSpeakerNotes>
                </div>

                <div className='selected' onClick={() => setActiveSidebar(activeSidebar === "person" ? null : "person")}>
                    <div style={{ marginTop: '3px' }}>
                        <MdPerson></MdPerson>
                    </div>
                    <div className='chat'>
                        Information
                    </div>
                </div>

                <div className='nselected' onClick={() => setActiveSidebar(activeSidebar === "alert" ? null : "alert")}>
                    <AiFillExclamationCircle></AiFillExclamationCircle>
                </div>

            </div>
            <div className='sidebar-content'>
                <div style={{ display: 'flex', gap: '10px', color: '#5A8AEA', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ paddingTop: '2px' }}><FiExternalLink></FiExternalLink></div>
                    <div style={{ fontFamily: 'Montserrat', fontWeight: 650, fontStyle: 'SemiBold', fontSize: '14px', textAlign: 'center' }}>Go To Patient's Medical History</div>
                </div>
                <div style={{}}>
                    <div style={{ fontFamily: 'Montserrat', fontWeight: 500, fontStyle: 'Medium', fontSize: '13px', color: '#353535', margin: '7px' }}>Patient Information</div>
                    <div style={{ borderRadius: '14px', padding: '14px', borderWidth: '1px', background: '#FFFFFF', border: '1px solid #E2E3E566', boxShadow: '0px 0px 6px 0px #0000000A' }}>
                        <div>
                            <div className='sname'>First Name:</div>
                            <div className='pname'>{patientData?.first_name || "N/A"}</div>
                            <div className='sname'>Last Name:</div>
                            <div className='pname'>{patientData?.last_name || "N/A"}</div>
                            <div className='sname'>Sex Assigned at Birth:</div>
                            <div className='pname'>{patientData?.sex || "N/A"}</div>
                            <div className='sname'>Mobile No:</div>
                            <div className='pname'>{patientData?.mobile || "N/A"}</div>
                            <div className='sname'>Date of Birth:</div>
                            <div className='pname'>{patientData?.date_of_birth || "N/A"}</div>
                            <div className='sname'>Email ID:</div>
                            <div className='pname'>{patientData?.email || "N/A"}</div>
                        </div>
                    </div>
                    {/* Partner Information could be added here if available in models */}
                </div>
            </div>
            <div className='sidebar-bottom'>

            </div>
        </div>
    )
}

export default InfoSideBar