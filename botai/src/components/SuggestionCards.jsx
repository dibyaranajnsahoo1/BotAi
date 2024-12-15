import React from "react";
import { useDispatch } from "react-redux";
import { clearChat, setQuestion } from "../features/chatSlice";
import { setAnswer, addConversation } from "../features/chatSlice";
import { useNavigate } from "react-router-dom";

const SuggestionCards = ({ text, data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const findAnswer = (text) => {
    const normalizedText = text.trim().toLowerCase();
    const foundAnswer = data.find(
      (item) => item.question.trim().toLowerCase() === normalizedText
    );
    return foundAnswer ? foundAnswer.response : "I don't know";
  };

  const handleClick = () => {
    dispatch(setQuestion(text));
    dispatch(setAnswer(findAnswer(text)));
    dispatch(
      addConversation({
        question: text,
        answer: findAnswer(text),
        timeStamp: Date.now(),
      })
    );

    navigate("/chat");

    dispatch(setQuestion(""));
  };

  return (
    <div
      style={{
        height: "7rem",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "1rem",
        backgroundColor: "#E5E7EB", // Suggestion background color
        borderRadius: "0.375rem",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <p style={{ fontSize: "1.25rem", fontWeight: "700" }}>{text}</p>
      <p style={{ fontSize: "1rem", fontWeight: "400", color: "#9CA3AF" }}>
        Get immediate AI generated response
      </p>
    </div>
  );
};

export default SuggestionCards;
