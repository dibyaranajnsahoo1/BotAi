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
  console.log(feedback);
  console.log(rating);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "var(--purple)", // Assuming you have this color defined in your CSS variables
        height: "max-content",
        display: "flex",
        flexDirection: "column",
        padding: "0.5rem",
        gap: "1rem",
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
            width: "1.5rem",
            height: "1.5rem",
            flexShrink: 0,
          }}
        />
        <p
          style={{
            fontWeight: "bold",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          You :
        </p>
        <div style={{ flexGrow: 1 }}>
          <p>{question}</p>
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
            width: "2rem",
            height: "2rem",
            flexShrink: 0,
          }}
        />
        <p
          style={{
            fontWeight: "bold",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          BotAI :
        </p>
        <p style={{ flexGrow: 1 }}>{answer}</p>
      </div>
      <div>{likeDislike}</div>
      <div>{feedback}</div>
      <div>{rating}</div>
    </div>
  );
};

export default ConversationHistoryMessageBox;
