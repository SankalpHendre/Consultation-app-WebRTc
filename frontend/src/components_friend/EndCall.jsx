import React from 'react'
import './EndCall.css'
import { IoIosCloseCircle } from "react-icons/io";
import { MdCallEnd } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const EndCall = ({ duration, summary }) => {
    const navigate = useNavigate();

    const fmt = s =>
        `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

    return (
        <div className="wrapper">
            <div className='end-container'>
                <div className="end-navbar">
                    <div className="end-cross" onClick={() => navigate('/')}>
                        <IoIosCloseCircle size={25}></IoIosCloseCircle>
                    </div>
                </div>
                <div className="end-info">
                    <div className="end-call-info">
                        <div className="end-call-icon">
                            <MdCallEnd size={25}></MdCallEnd>
                        </div>
                        <div className='end-call-text'>
                            Call Ended
                        </div>
                        <div className="end-call-dur">
                            <div style={{ fontFamily: 'Montserrat', fontWeight: '500', fontStyle: 'Medium', fontSize: '13px', color: '#9E9E9E' }}>Call Duration : </div>
                            <div style={{ fontFamily: 'Montserrat', fontWeight: '500', fontStyle: 'Medium', fontSize: '15px', color: 'black' }}>{fmt(duration || 0)}</div>
                        </div>
                    </div>
                    <div className="end-summary">
                        <div style={{ fontFamily: 'Montserrat', fontWeight: '600', fontStyle: 'Medium', fontSize: '14px', color: 'black' }}>AI Call Summary</div>

                        <ul style={{ fontFamily: 'Montserrat', fontWeight: '500', fontStyle: 'Medium', fontSize: '12px', color: '#505050' }}>
                            {summary && summary.length > 0 ? (
                                summary.map((item, idx) => <li key={idx}>{item}</li>)
                            ) : (
                                <>
                                    <li>Patient discussed symptoms and medical history.</li>
                                    <li>Personnel provided consultation and advised on next steps.</li>
                                    <li>Meeting concluded successfully.</li>
                                </>
                            )}
                        </ul>

                    </div>
                    <div className="end-buttons">
                        <div className="button1" onClick={() => navigate('/')}>Back to Home</div>
                        <div className="button2">✨ Scan Transcript for AI Insights</div>
                        <div className="button3" onClick={() => alert("Feedback request sent.")}>Ask for Feedback</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EndCall