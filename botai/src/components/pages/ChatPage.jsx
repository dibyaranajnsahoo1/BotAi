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

  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const handleRatingSubmit = (rating) => {
    dispatch(addRating({ id: Date.now(), rating })); // Save rating in Redux store
    setIsRatingOpen(false);
    setIsFeedbackOpen(true); // Open feedback modal after rating
  };

  const handleFeedbackSubmit = (feedback) => {
    dispatch(addFeedback({ id: Date.now(), feedback })); // Save feedback in Redux store

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
    dispatch(setQuestion(""));
  };

  const handleSave = () => {
    setIsRatingOpen(true);
  };

  const conversations = useSelector((state) => state.chat.conversations);
  
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div style={{ width: "13rem"}}>
        <Sidebar />
      </div>
      <div
        style={{
          position: "relative",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          background: "linear-gradient(to bottom, #FFFAF1, #E1E1E1)",
        }}
      >
        <Navigation />
        <div
          style={{
            padding: "1rem",
            overflowY: "auto",
            marginTop: "auto",
            maxHeight: "calc(100vh - 80px)",
            width: "100%",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {conversations.map((conversation, index) => (
            <div key={index}>
              <ChatBox text={conversation.question} type="question" index={index} />
              <ChatBox text={conversation.answer} type="answer" index={index}/>
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
          <Button text={"Ask"} handleClick={handleAsk} keyDown={handleAsk} />

          <Button text={"Save"} handleClick={handleSave} />
          <div style={{ position: "absolute", bottom: "5rem", right: "1.25rem" }}>
            {isRatingOpen && <StarRating handleRatingSubmit={handleRatingSubmit} />}
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
