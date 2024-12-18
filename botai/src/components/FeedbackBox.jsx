import React, { useState } from "react";
import { useSelector } from "react-redux"; 
import idea from '../../src/assets/image 34.png' 
const FeedbackBox = ({ isOpen, onClose, onSubmit }) => {
  const [feedback, setFeedback] = useState("");
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); 
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: isDarkMode ? "rgba(70, 46, 118, 0.52) " : "#FAF7FF", 
          borderRadius: "0.375rem",
         
          width:'766px'
        }}
      >
        <div
          style={{
            backgroundColor: isDarkMode ? " rgb(57, 39, 97) " : "#FAF7FF", 
           
            maxWidth: "766px",
            height: "max-content",
            borderRadius: "0.625rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1rem",
              }}
            >
     
              <img src={idea} alt="" />
              <p
                style={{
                  fontSize: "22px",
                  color: isDarkMode ? "#FFFFFF" : "#000000", 
                }}
              >
                Provide Additional Feedback
              </p>
            </div>
            <svg
              style={{
                width: "2.5rem",
                height: "2.5rem",
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              onClick={onClose}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              style={{
                resize: "none",
                width: "91.67%", 
                borderRadius: "10px",
                padding: "1rem",
                height: "187px",
                margin: "0.5rem auto",
                border: isDarkMode
                  ? "1px solid #555555" 
                  : "1px solid #e5e7eb", 
                outline: "none",
                backgroundColor: isDarkMode ? "#444444" : "#ffffff", 
                color: isDarkMode ? "#FFFFFF" : "#000000",
              }}
            ></textarea>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "1.75rem",
               
            }}
          >
            <button
              style={{
                width: "157px",
                height: "50px",
                textAlign: "center",
                fontFamily:'Ubuntu',
                fontWeight:'400',
                backgroundColor: isDarkMode ? "rgb(13, 4, 31)" : " #D7C7F4",
                fontSize: "20px",
                borderRadius: "5px",
                color: isDarkMode ? "white" : " black",
                border:'none'
              }}
              onClick={() => onSubmit(feedback)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackBox;
