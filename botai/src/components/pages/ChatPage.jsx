import Navigation from "../Navigation";
import Input from "../Input";
import Button from "../Button";
import { useState } from "react";
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
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Access dark mode state
  
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const handleRatingSubmit = (rating) => {
    dispatch(addRating({ id: Date.now(), rating }));
    setIsRatingOpen(false);
    setIsFeedbackOpen(true);
  };

  const handleFeedbackSubmit = (feedback) => {
    dispatch(addFeedback({ id: Date.now(), feedback }));
    dispatch(saveConversations());
    setIsFeedbackOpen(false);
    dispatch(clearChat());
  };

  const handleAsk = () => {
    const foundAnswer = "I don't know";
    dispatch(setAnswer(foundAnswer));
    dispatch(
      addConversation({ question, answer: foundAnswer, timeStamp: Date.now() })
    );
    dispatch(setQuestion("")); // Clear question state
  };

  const handleSave = () => {
    setIsRatingOpen(true);
  };

  const conversations = useSelector((state) => state.chat.conversations);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div style={{ width: "208px" }}>
        <Sidebar />
      </div>
      <div
        style={{
          width: '0px',
          position: "relative",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          background: isDarkMode
            ? "linear-gradient(180deg, rgba(70, 70, 70, 0.2) 0%, rgba(70, 70, 70, 0.2) 100%)"
            : "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)",
        }}
      >
        <Navigation />
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
