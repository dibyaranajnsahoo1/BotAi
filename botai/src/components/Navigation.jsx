import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearChat } from "../features/chatSlice";
import Sidebar from "./Sidebar";
import "./styles.css";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      style={{display: "flex",gap: "5px", alignItems: "center", width: "auto",height: "32px", left:'236px',
        top:'36px' 
      }}
    >
      {/* <div style={{ display: "none" }} className="sm:block">
        <svg
          style={{
            width: "1.5rem", 
            height: "1.5rem", 
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          onClick={() => setIsSidebarOpen(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div> */}

      <p
        style={{
          fontSize: "28px", 
          color: "#9785BA", 
          fontWeight: "700",
          cursor: "pointer",
          fontFamily:'Ubuntu',
          left:'236px',
          top:'36px'
        }}
        onClick={() => {
          dispatch(clearChat());
          navigate("/");
        }}
      >
        Bot AI
      </p>

      {/* {isSidebarOpen && (
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      )} */}

        {/* {isSidebarOpen && (
          <div
            style={{
              position: "fixed",
              inset: "0",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: "10",
            }}
            onMouseDown={() => setIsSidebarOpen(false)}
          />
        )} */}
    </div>
  );
};

export default Navigation;
