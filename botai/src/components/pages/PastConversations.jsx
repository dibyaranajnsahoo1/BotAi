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
          backgroundColor: 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)', 
        }}
      >
        <Navigation />
        
        <div style={{ margin: "1.5rem auto" }}>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#F44336", 
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
            // maxHeight: "calc(100vh - 160px)",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <h1 style={{fontSize:'20px'}}>Today's Chats</h1>
          {conversationHistory.length > 0 ? (
            conversationHistory.map((conversation, index) => (
              <div
                key={index}
                style={{
                 background: 'linear-gradient(90deg, #BFACE2 0%, #D7C7F4 100%)', 
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
                  padding: "1rem",
                  marginBottom: "1rem",
                  borderRadius: "0.375rem", 
                  width: "100%",
                 height:'265px',
                  margin: "auto",
                }}
              >
                
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
                color: "#6B7280", 
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
