// src/components/ConversationHistoryMessageBox.js

import React from "react";
import avatar from "../assets/avatar.png";
import botAIlogo from "../assets/botAI_logo.png";

const ConversationHistoryMessageBox = ({
  question,
  answer,
  likeDislike,
  feedback,
  rating,
}) => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "linear-gradient(90deg, #BFACE2 0%, #D7C7F4 100%)", 
        height: "max-content",
        display: "flex",
        flexDirection: "column",
        padding: "0.5rem",
        gap: "1rem",
        paddingTop: '20px',
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "flex-start",
        }}
      >
        <img
          src={avatar}
          alt=""
          style={{
            width: "70px",
            height: "76px",
            flexShrink: 0,
          }}
        />
        <div style={{display:'flex', flexDirection:'column', paddingLeft:'10px'}}>
          <p
            style={{
              fontWeight: "bold",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            You
          </p>
          <div style={{ flexGrow: 1 }}>
            <p>{question}</p>
          </div>
        </div>
      </div>
      
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "0.5rem",
          alignItems: "flex-start",
          marginLeft: "-0.25rem",
        }}
      >
        <img
          src={botAIlogo}
          alt=""
          style={{
            width: "70px",
            height: "76px",
            flexShrink: 0,
          }}
        />
        <div style={{display:'flex', flexDirection:'column', paddingLeft:'10px'}}>
          <p
            style={{
              fontWeight: "bold",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            BotAI
          </p>
          <p style={{ flexGrow: 1 }}>{answer}</p>
        </div>
      </div>
      
      <div>{likeDislike}</div>
      <div>
        <strong>Feedback:</strong> {feedback}
      </div>
      <div>
        <strong>Rating:</strong> {rating}
      </div>
    </div>
  );
};

export default ConversationHistoryMessageBox;
