import React, { useState } from 'react';
import './CallOption.css';
import { IoPersonAdd } from "react-icons/io5";
import { FaVideo, FaVideoSlash } from "react-icons/fa";
import { MdCallEnd } from "react-icons/md";
import { FaMicrophoneAlt, FaMicrophoneAltSlash } from "react-icons/fa";
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { MdOutlineIosShare } from "react-icons/md";

const CallOptions = ({ videoOn, setVideoOn, toggleVideo, toggleAudio, endCall, role, toggleScreenShare, isScreenSharing }) => {
    const [micOn, setMicOn] = useState(true);
    // const [videoOn, setVideoOn] = useState(true);
    const [speakerOn, setSpeakerOn] = useState(true);
    const navigate = useNavigate();
    const videoToggle = () => {
        setVideoOn(!videoOn)
        toggleVideo();
    }

    const audioToggle = () => {
        setMicOn(!micOn)
        toggleAudio();
    }

    const endVideo = () => {
        endCall();
    }

    return (
        <div className='optcontainer'>
            <div className='icon'>
                <div className='img'>
                    <IoPersonAdd></IoPersonAdd>
                </div>
            </div>
            <div className={`icon ${!videoOn ? "active-toggle" : ""}`}
                onClick={videoToggle}>
                <div className='img'>
                    {videoOn ? <FaVideo /> : <FaVideoSlash />}
                </div>
            </div>
            <div className='icon' style={{ background: 'red' }} onClick={endVideo}>
                <div className='img'>
                    <MdCallEnd style={{ color: 'white', }}></MdCallEnd>
                </div>
            </div>
            <div className={`icon ${!micOn ? "active-toggle" : ""}`}
                onClick={audioToggle}>
                <div className='img'>
                    {micOn ? <FaMicrophoneAlt /> : <FaMicrophoneAltSlash />}
                </div>
            </div>
            <div className={`icon ${isScreenSharing ? "active-toggle" : ""}`}
                onClick={toggleScreenShare}>
                <div className='img'>
                    <MdOutlineIosShare size={20} color={isScreenSharing ? 'red' : 'black'} />
                </div>
            </div>
        </div>
    )
}

export default CallOptions