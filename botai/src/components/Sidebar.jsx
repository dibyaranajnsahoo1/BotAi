import React from "react";
import botAIlogo from "../assets/botAI_logo.png";
import botAIlogos from "../assets/Group 1000011095.png";


import editIcon from "../assets/editIcon.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearChat } from "../features/chatSlice";
import "./styles.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEditClick = () => {
    dispatch(clearChat());
    navigate("/chat");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease",
    
      }}

    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "208px",
          height: "47px",
          background: "linear-gradient(0deg, #D7C7F4, #D7C7F4),linear-gradient(0deg, #D7C7F4, #D7C7F4),linear-gradient(0deg, #D7C7F4, #D7C7F4),linear-gradient(0deg, #D7C7F4, #D7C7F4)",
          cursor: "pointer",
          padding:'10px'
       
         
        }}
        onClick={handleEditClick}
      >
        <img src={botAIlogos} alt="bot AI logo" style={{ width: "33.58px", height: "32px", left:'16.42px' ,filter: "drop-shadow(0px 4px 4px 0px #00000040)"}} />
        <p style={{display:'flex', fontSize: "20px", fontWeight: "400" , fontFamily:'Ubuntu', textAlign:'center', alignItems:'center', justifyContent:'center', top:'42px', margin:'0'}}>New Chat</p>
        <img src={editIcon} alt="edit" style={{width:'24px', height:'24px', }} />
      </div>
      <div
          style={{
            background: "linear-gradient(0deg, #D7C7F4, #D7C7F4),linear-gradient(0deg, #D7C7F4, #D7C7F4),linear-gradient(0deg, #D7C7F4, #D7C7F4),linear-gradient(0deg, #D7C7F4, #D7C7F4)",
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
              color: "#414146",
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
