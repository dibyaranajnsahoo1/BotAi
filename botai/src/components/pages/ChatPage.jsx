
import React, { useEffect, useState } from "react";
import Navigation from "../Navigation";
import Input from "../Input";
import Button from "../Button";
import Sidebar from "../Sidebar";
import ChatBox from "../ChatBox";
import { useSelector, useDispatch } from "react-redux";
import {
  saveConversations,
  clearChat,
  setAnswer,
  addConversation,
  setQuestion,
  addRating,
  addFeedback,
} from "../../features/chatSlice";
import StarRating from "../Rating";
import FeedbackBox from "../FeedbackBox";

import "../styles.css";

const ChatPage = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.chat.currentQuestion);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); 
  
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const handleRatingSubmit = (rating) => {
    dispatch(addRating(rating));
    setIsRatingOpen(false);
    setIsFeedbackOpen(true);
  };

  const handleFeedbackSubmit = (feedback) => {
    dispatch(addFeedback(feedback));
    console.log(Date.now(), feedback);
    dispatch(saveConversations());
    setIsFeedbackOpen(false);
    dispatch(clearChat());
  };

  const handleAsk = () => {
    if (question.trim() === "") {
      alert("Please enter a question for Bot AI.");
      return;
    }

    const foundAnswer = "I don't know"; 
    dispatch(setAnswer(foundAnswer));
    dispatch(
      addConversation({ question, answer: foundAnswer, timeStamp: Date.now() })
    );
    dispatch(setQuestion("")); 
  };

  const handleSave = () => {
    setIsRatingOpen(true);
  };

  const conversations = useSelector((state) => state.chat.conversations);

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

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div style={{ width: sidebarWidth }}>
         <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      </div>
      <div
        style={{
          width: '0px',
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
        <div
          style={{
            padding: "1rem",
            overflowY: "auto",
            marginTop: "auto",
            width: "100%",
            
          }}
        >
          {conversations.map((conversation, index) => (
            <div key={index}>
              <ChatBox text={conversation.question} type="question" index={index} />
              <ChatBox text={conversation.answer} type="answer" index={index} />
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            alignItems: "center",
            position: "sticky",
            bottom: "0",
            width: "100%",
            padding: "1rem",
            
          }}
        >
          <Input
            question={question}
            setQuestion={(q) => dispatch(setQuestion(q))}
            onKeyDown={(e) => e.key === "Enter" && handleAsk()}
          />
          <Button text={"Ask"} handleClick={handleAsk} />
          <Button text={"Save"} handleClick={handleSave} />
          <div style={{ position: "absolute", bottom: "5rem", right: "1.25rem" }}>
            {isRatingOpen && <StarRating handleRatingSubmit={handleRatingSubmit} totalStars={5} />}
            {isFeedbackOpen && (
              <FeedbackBox
                isOpen={isFeedbackOpen}
                onClose={() => setIsFeedbackOpen(false)}
                onSubmit={handleFeedbackSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
