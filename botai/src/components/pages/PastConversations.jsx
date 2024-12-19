
import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Navigation from "../Navigation";
import { useSelector, useDispatch } from "react-redux";
import { clearHistory } from "../../features/chatSlice";
import ConversationHistoryMessageBox from "../ConversationHistoryMessageBox";

const PastConversations = () => {
  const conversationHistory = useSelector(
    (state) => state.chat.savedConversations
  );
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const sidebarWidth = windowWidth <= 768 ? "0px" : "208px";
  const isphoneView = windowWidth <= 768;
  
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  
  const toggleSidebar = (visibility) => {
    setSidebarVisible(visibility);
  };

  const renderConversationHistory = () => {
    return conversationHistory.length > 0 ? (
      conversationHistory.map((savedConversation, index) => (
        <div
          key={index}
          style={{
            color: isDarkMode ? 'white' : 'black',
            background: isDarkMode
              ? "linear-gradient(90deg, #444 0%, #666 100%)"
              : "linear-gradient(90deg, #BFACE2 0%, #D7C7F4 100%)",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          {savedConversation.conversations.map((entry, entryIndex) => {
            const feedback =
              savedConversation.feedback &&
              savedConversation.feedback[entry.timeStamp]
                ? savedConversation.feedback[entry.timeStamp]
                : "No feedback provided";
            const rating =
              savedConversation.ratings &&
              savedConversation.ratings[entry.timeStamp]
                ? `${savedConversation.ratings[entry.timeStamp]} stars`
                : "No rating provided";

            return (
              <ConversationHistoryMessageBox
                key={entryIndex}
                question={entry.question}
                answer={entry.answer}
                feedback={feedback}
                rating={rating}
              />
            );
          })}
        </div>
      ))
    ) : (
      <p
        style={{
          color: isDarkMode ? "#9CA3AF" : "#6B7280",
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        No conversation history available.
      </p>
    );
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div style={{ width: sidebarWidth }}>
        <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      </div>

      <div
        style={{
          width: "0",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          background: isDarkMode
            ? "linear-gradient(180deg, rgb(43, 37, 56) 0%, rgb(32, 19, 59) 100%)"
            : isphoneView
            ? 'linear-gradient(180deg, #F9FAFA 59%, #EDE4FF 100%)'
            : "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)",
        }}
      >
        <Navigation toggleSidebar={() => toggleSidebar(true)} />

        <div style={{ margin: "1.5rem auto" }}>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "400",
              fontFamily: "Ubuntu",
              color: isDarkMode ? "#FFFFFF" : "#000000",
            }}
          >
            Conversation History
          </h1>
        </div>

        <div
          onClick={handleClearHistory}
          style={{
            color: isDarkMode ? "#FFFFFF" : "#000000",
            padding: "10px 15px",
            border: `1px solid ${isDarkMode ? "#FFFFFF" : "#000000"}`,
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "1rem",
            alignSelf: "center",
          }}
        >
          Clear History
        </div>

        <div
          style={{
            marginTop: "1rem",
            overflowY: "auto",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h2 style={{ color: isDarkMode ? "#FFFFFF" : "#000000" }}>
            Today's Chat
          </h2>
          {renderConversationHistory()}
        </div>
      </div>
    </div>
  );
};

export default PastConversations;
