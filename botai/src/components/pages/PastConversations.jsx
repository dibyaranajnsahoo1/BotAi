import React from "react";
import Sidebar from "../Sidebar";
import Navigation from "../Navigation";
import { useSelector } from "react-redux";
import ConversationHistoryMessageBox from "../ConversationHistoryMessageBox";

const PastConversations = () => {
  const conversationHistory = useSelector(
    (state) => state.chat.savedConversations
  );
  
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div style={{ width: "13rem" }}>
        <Sidebar />
      </div>
      <div
        style={{
          position: "relative",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          backgroundColor: "#E5D6F7", // bg-purpleLight color
        }}
      >
        <Navigation />
        <div style={{ margin: "1.5rem auto" }}>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#F44336", // text-red-400 color
            }}
          >
            Conversation History
          </h1>
        </div>

        <div
          style={{
            marginTop: "1rem",
            overflowY: "auto",
            padding: "1rem",
            maxHeight: "calc(100vh - 160px)",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {conversationHistory.length > 0 ? (
            conversationHistory.map((conversation, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#9C74B7", // bg-purple color
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
                  padding: "1rem",
                  marginBottom: "1rem",
                  borderRadius: "0.375rem", // rounded-md
                  width: "100%",
                  maxWidth: "50%",
                  margin: "auto",
                }}
              >
                {/* Render each question and answer pair */}
                {conversation.map((entry, entryIndex) => (
                  <ConversationHistoryMessageBox
                    key={entryIndex}
                    question={entry.question}
                    answer={entry.answer}
                  />
                ))}
              </div>
            ))
          ) : (
            <p
              style={{
                color: "#6B7280", // text-gray-500 color
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              No conversation history available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PastConversations;
