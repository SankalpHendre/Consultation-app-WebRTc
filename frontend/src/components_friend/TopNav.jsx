import React from "react";
import './minScreen.css'
import { TbArrowsDiagonalMinimize2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { FiMaximize2 } from "react-icons/fi";
// import "./TopNav.css";

const TopNav = ({ isMini, roomId,setIsMini }) => {
  
  const navigate = useNavigate();

  return (
    // <div className={`topnav ${isMini ? "mini" : ""}`}>
    //   <div className="topnav-inner">
    //     <div className="title">Video Call</div>
    //     <div className="min-btn" onClick={toggleMini}>
    //       <TbArrowsDiagonalMinimize2 />
    //     </div>max-navbar

    //   </div>
    //      <div className="divider" />
    // </div>
    <div className={`${isMini ? "min-navbar" : "max-navbar"}`}>
      <div style={{ gap: '8px', display: 'flex' }}>
        <div style={{ fontFamily: 'Montserrat', fontWeight: '680', fontStyle: 'SemiBold', fontSize: '18px', color: '#232323', width: '98%'}}>Video Call</div>
        <div style={{border:'1px solid black', width:'22px',height:'20px', display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'5px',cursor:'pointer'}} onClick={() =>{
             console.log("button click");
              setIsMini(!isMini)}}>
                {isMini ? <FiMaximize2/> : <TbArrowsDiagonalMinimize2/> }
        </div>
      </div>
    </div>
  );
};

export default TopNav;