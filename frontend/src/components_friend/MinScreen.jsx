import React, { useEffect, useRef, useState } from 'react'
import './minScreen.css'
import Draggable from 'react-draggable'
import { FiMaximize2 } from "react-icons/fi";
import { useNavigate, useParams } from 'react-router-dom';
import RemoteVideo from './RemoteVideo';
const MinScreen = () => {
    const navigate = useNavigate();
    const nodeRef = useRef(null);


    return (
        <div style={{ width: 'full', height: 'screen' }}>
            <Draggable nodeRef={nodeRef}>
                <div ref={nodeRef} className='min-body'>
                    <div className="min-navbar">
                        <div className="min-icon">
                            <FiMaximize2></FiMaximize2>
                        </div>
                    </div>
                    <div className="min-content">
                        <RemoteVideo mode='mini'></RemoteVideo>
                    </div>
                </div>
            </Draggable>
        </div>

    )
}

export default MinScreen