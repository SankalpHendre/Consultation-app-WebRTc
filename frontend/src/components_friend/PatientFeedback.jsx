import React from 'react'
import { useState } from "react";
import './EndCall.css'
import { IoIosCloseCircle } from "react-icons/io";
import { MdCallEnd } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const PatientFeedback = () => {
    const [rating, setRating] = useState(0);
    const navigate=useNavigate()


    return (
        <div className="wrapper">
            <div className="patient-f-container">
                <div className="end-navbar">
                    <div className="patient-cross">
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
                            <div style={{ fontFamily: 'Montserrat', fontWeight: '500', fontStyle: 'Medium', fontSize: '15px', color: 'black' }}>00:00</div>
                        </div>
                    </div>
                    <div className="end-summary">
                        <div style={{ fontFamily: 'Montserrat', fontWeight: '600', fontStyle: 'Medium', fontSize: '14px', color: 'black' }}>AI Call Summary</div>

                        <ul style={{ fontFamily: 'Montserrat', fontWeight: '500', fontStyle: 'Medium', fontSize: '12px', color: '#505050' }}>
                            <li>Patient discussed menstrual history including irregular cycle pattern lasting approximately 40–45 days. </li>
                            <li>Patient reported mild dysmenorrhea with moderate menstrual flow. </li>
                            <li>No history of intermenstrual bleeding or amenorrhea was reported. </li>
                            <li>Doctor advised further evaluation and possible hormonal assessment.</li>

                        </ul>

                    </div>
                    <div className="patient-rating">
                        <div style={{ fontFamily: 'Inter', fontWeight: '400', fontSize: 'Regular', fontSize: '14px' }}>
                            How satisfied are you with your consultation today?
                        </div>
                        <div className="rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={`star ${star <= rating ? "active" : ""}`}
                                    onClick={() => setRating(star)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        <div style={{ fontFamily: 'Inter', fontWeight: '400', fontSize: 'Regular', fontSize: '14px' }}>
                            Would you like to share additional feedback? (Optional)
                        </div>

                        <input className='text-area' type='textarea' placeholder='Share your experience or suggestions...'></input>
                        <div className='button4' onClick={()=>navigate('/thanks')}>
                            Submit Feedback
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PatientFeedback