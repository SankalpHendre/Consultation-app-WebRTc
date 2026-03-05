import React from 'react'
import './EndCall.css'
import { IoIosCloseCircle } from "react-icons/io";
const ViewTranscript = () => {
    return (
        <div className="wrapper">
            <div className='end-container'>
                <div className="end-navbar">
                    <div style={{ position: 'relative', top: '10px', left: '20px', fontFamily: 'Montserrat', fontWeight: '650', fontStyle: 'Medium', fontSize: '16px' }}>AI Clinical Extraction</div>
                    <div className="end-cross">
                        <IoIosCloseCircle size={25}></IoIosCloseCircle>
                    </div>
                </div>
                <div className="transc-info">
                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                        <div className='t-secondary'>Dr.Smith </div>
                        <div className='t-primary'>: Hi, I’d like to ask you a few questions about your menstrual history.</div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                        <div className='t-secondary'>Patient</div>
                        <div className='t-primary'>: Sure doctor.</div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                        <div className='t-secondary'>Dr.Smith </div>
                        <div className='t-primary'>: At what age did you get your first period?</div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                        <div className='t-secondary'>Patient</div>
                        <div className='t-primary'>: I was around 13 years old.</div>
                    </div>

                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                        <div className='t-secondary'>Dr.Smith</div>
                        <div className='t-primary'>: When was your last menstrual period? </div>
                    </div>

                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                        <div className='t-secondary'>Patient</div>
                        <div className='t-primary'>: My last period started on 12th January 2026.</div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                        <div className='t-secondary'>Dr.Smith</div>
                        <div className='t-primary'>: When was your last menstrual period? </div>
                    </div>

                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                        <div className='t-secondary'>Dr.Smith </div>
                        <div className='t-primary'>: At what age did you get your first period?</div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                        <div className='t-secondary'>Patient</div>
                        <div className='t-primary'>: I was around 13 years old.</div>
                    </div>

                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                        <div className='t-secondary'>Dr.Smith</div>
                        <div className='t-primary'>: When was your last menstrual period? </div>
                    </div>

                </div>
                <div style={{  height: '40px', marginLeft: '300px' }}>
                        <div className="button2">✨ Scan for AI Insights</div>
                    </div>
            </div>
        </div>
    )
}

export default ViewTranscript