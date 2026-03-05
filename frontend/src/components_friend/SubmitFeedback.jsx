import React from 'react'
import { TiTick } from "react-icons/ti";
const SubmitFeedback = () => {
    return (
        <div className='wrapper'>
            <div className='thanks-container'>
                <div className="thanks-sucess">
                    <div className="thanks-right">
                        <TiTick size={30} color='white' style={{ position: 'relative', top: '4px', left: '5px' }}></TiTick>
                    </div>
                </div>
                <div style={{ fontFamily: 'Inter', fontWeight: '600', fontStyle: 'Bold', fontSize: '16px', display: 'flex', alignItems: 'center', marginTop: '20px', position: 'relative', left: '140px' }}>
                    Thanks for Submitting Feedback
                </div>
                <div style={{ fontFamily: 'Inter', fontWeight: '400', fontStyle: 'Regular', fontSize: '15px', marginTop: '20px', position: 'relative', left: '75px', color: '#646464' }}>
                    Your consultation records have been saved to your health portal.
                </div>
                <div style={{ fontFamily: 'Inter', fontWeight: '400', fontStyle: 'Regular', fontSize: '15px', marginTop: '20px', position: 'relative', left: '90px', color: '#646464' }}>
                    Your response helps us improve your care experience.
                </div>
                <div className="thanks-buttons">
                    <div className="thanks-button1">
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:'7px'}}>Return to Dashboard</div>
                    </div>
                    <div className="thanks-button2">
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:'7px'}}>View Consultation Summary</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubmitFeedback