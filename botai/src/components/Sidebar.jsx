import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Add useSelector here
import botAIlogos from "../assets/Group 1000011095.png";
import editIcon from "../assets/editIcon.png";
import Close from "../assets/close.png";

import { clearChat } from "../features/chatSlice";
import "./styles.css";

const Sidebar = ({isSidebarVisible,toggleSidebar}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Get dark mode state

  const handleEditClick = () => {
    dispatch(clearChat());
    navigate("/");
  };





  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [close, setClose] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <div
    style={{
      position:'fixed', 

      display:  isMobileView && !isSidebarVisible? "none" : "block", 
      top: 0,
      left: 0,
      height: "100%",
      backgroundColor: isDarkMode ? "#333333" : "white", 
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease",
    }}
  >
     <img 
          src={Close}
          alt="Close"
          style={{ width: "18px", height: "18px" , display:isMobileView?'block':'none', marginLeft:'200px', zIndex:'3', position:'relative', cursor: "pointer"}}
          onClick={() => toggleSidebar(false)}
        />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "208px",
          height: "47px",
          background: isDarkMode
            ? "linear-gradient(0deg, #444444, #444444)" 
            : "linear-gradient(0deg, #D7C7F4, #D7C7F4)",
          cursor: "pointer",
          padding: "10px",
        }}
        onClick={handleEditClick}
      >
        <img
          src={botAIlogos}
          alt="bot AI logo"
          style={{
            width: "33.58px",
            height: "32px",
            left: "16.42px",
            filter: "drop-shadow(0px 4px 4px 0px #00000040)",
          }}
        />
        <p
          style={{
            display: "flex",
            fontSize: "20px",
            fontWeight: "400",
            fontFamily: "Ubuntu",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            top: "42px",
            margin: "0",
            color: isDarkMode ? "#FFFFFF" : "#000000", 
          }}
        >
          New Chat
        </p>
        <img
          src={editIcon}
          alt="edit"
          style={{ width: "24px", height: "24px" }}
        />
        
      </div>
     

      <div
        style={{
          background: isDarkMode
            ? "linear-gradient(0deg, #555555, #555555)" 
            : "linear-gradient(0deg, #D7C7F4, #D7C7F4)", 
          borderRadius: "10px",
          height: "39px",
          width: "175.16px",
          margin: "1rem auto",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
        onClick={() => navigate("/history")}
      >
        <p
          style={{
            fontSize: "16px",
            color: isDarkMode ? "#FFFFFF" : "#414146", 
            fontFamily: "Ubuntu",
            fontWeight: "700",
            margin: "0",
          }}
        >
          Past Conversations
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
