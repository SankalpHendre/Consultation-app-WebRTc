
import React, { useState } from 'react'
import { useEffect } from 'react';
import './RemoteVideo.css'
import CallOptions from './CallOptions';
import LocalVideo from './LocalVideo';
import { FaMicrophoneAlt, FaMicrophoneAltSlash } from "react-icons/fa";
import { BsRecord2Fill } from "react-icons/bs";
import ReactPlayer from 'react-player';
const RemoteVideo = ({ mode = "full", myStream, remoteStream, patientMuted, toggleVideo, toggleAudio, endCall, isSidebarOpen, name, role, toggleScreenShare, isScreenSharing, VideoOn }) => {
    const [videoOn, setVideoOn] = useState(true);
    const [seconds, setSeconds] = useState(0);
    const videoRef = React.useRef(null);

    React.useEffect(() => {
        if (videoRef.current && remoteStream) {
            videoRef.current.srcObject = remoteStream;
        }
    }, [remoteStream]);

    const getInitials = (name) => {
        if (!name) return "";

        const initials = name
            .trim()
            .split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase();

        return initials.slice(0, 2); // Ensures you only get 2 characters (e.g., "SH")
    };

    const initials = getInitials(name);

    useEffect(() => {
        let interval;

        if (remoteStream) {
            interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [remoteStream]);

    const formatTime = (totalSeconds) => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;

        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };
    return (
        <div className={`container ${mode === "mini" ? "mini-container" : ""} ${isSidebarOpen ? "sidebar-active" : ""}`}>



            <div className={`loc-mic ${mode === "mini" ? "mini-loc-mic" : ""}`}>
                <FaMicrophoneAlt></FaMicrophoneAlt>
            </div>
            {
                remoteStream ? <video autoPlay playsInline height="100%" width="100%" ref={videoRef} className="video-player" /> : ('')}
            < div className={`frame ${mode === "mini" ? "mini-frame" : ""}`}>
                <div className={`name ${mode === "mini" ? "mini-name" : ""}`}>
                    <div style={{
                        fontFamily: 'Montserrat',
                        fontWeight: "800",
                        fontSize: mode === "mini" ? '28px' : '60px',
                        color: '#896AE3'
                    }}>{initials}</div>
                </div>
                <div style={{
                    fontSize: mode === "mini" ? '12px' : '14px',
                    marginTop: '24px'
                }}>Calling...</div>

            </div>


            <CallOptions videoOn={videoOn} setVideoOn={setVideoOn} toggleVideo={toggleVideo} toggleAudio={toggleAudio} endCall={endCall} role={role} toggleScreenShare={toggleScreenShare} isScreenSharing={isScreenSharing}></CallOptions>
            <div className="time">
                <div className='time-align'>
                    <div style={{ fontSize: '12px', fontWeight: '500' }}>{formatTime(seconds)}</div>
                </div>
            </div>
            <div className='info'>
                <div style={{ fontSize: '11px', fontWeight: '500' }}>
                    {name}
                </div>
                <div style={{ fontSize: '10px', fontWeight: '400' }}>
                    29 | Female
                </div>
            </div>
            <div className={`loc-mic ${mode === "mini" ? "mini-loc-mic" : ""}`}>
                {patientMuted ? <FaMicrophoneAltSlash color='red' /> : <FaMicrophoneAlt />}
            </div>
            <LocalVideo myStream={myStream} mode={mode} videoOn={videoOn} />
        </div >
    )
}

export default RemoteVideo