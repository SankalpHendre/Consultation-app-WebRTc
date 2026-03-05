import React from 'react'
import './LocalVideo.css';
import ReactPlayer from 'react-player';
const LocalVideo = ({ name = "You", mode = "full", videoOn, myStream }) => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (videoRef.current && myStream) {
      videoRef.current.srcObject = myStream;
    }
  }, [myStream]);

  return (
    <div className={`local-video-container ${mode === "mini" ? "mini-local-video" : ""} ${!videoOn ? "video-off" : ""}`}>
      <video autoPlay playsInline muted width="100%" height="100%" style={{ objectFit: "cover" }} ref={videoRef} />
      <div className={`video-name-container ${mode === "mini" ? "mini-video-name" : ""}`}>
        <p>{name}</p>
      </div>
    </div>
  );
};


export default LocalVideo;