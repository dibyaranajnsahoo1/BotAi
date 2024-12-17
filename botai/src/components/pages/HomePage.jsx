import React from "react";
import botAILogo from "../../assets/botAI_logo.png";
import Navigation from "../Navigation";
import Input from "../Input";
import Button from "../Button";
import SuggestionCards from "../SuggestionCards";
import Sidebar from "../Sidebar";
import { useSelector, useDispatch } from "react-redux";
import {
  setQuestion,
  setAnswer,
  addConversation,
  saveConversations,
  clearChat,
} from "../../features/chatSlice";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const HomePage = ({ data }) => {
  const question = useSelector((state) => state.chat.currentQuestion);
  const answer = useSelector((state) => state.chat.currentAnswer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const findAnswer = (text) => {
    const normalizedText = text.trim().toLowerCase();
    const foundAnswer = data.find(
      (item) => item.question.trim().toLowerCase() === normalizedText
    );
    return foundAnswer ? foundAnswer.response : "Please ask another question";
  };

  const handleAsk = () => {
    if (!question) {
      alert("Please enter a question");
      return;
    }
    const foundAnswer = findAnswer(question);
    dispatch(setAnswer(foundAnswer));
    dispatch(
      addConversation({ question, answer: foundAnswer, timeStamp: Date.now() })
    );
    dispatch(setQuestion(""));
    navigate("/chat");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div style={{ width: "208px" }}>
        <Sidebar />
      </div>
      <div
        style={{
          position: "relative",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          background:
            "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)",
        }}
      >
        <Navigation />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
            padding: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 1,
              gap: "5px",
            }}
          >
            <p style={{ fontSize: "28px", fontWeight: "500", fontFamily: "Ubuntu" }}>
              How Can I Help You Today?
            </p>
            <img
              src={botAILogo}
              alt="bot AI logo"
              onError={(e) => (e.target.src = "/path/to/default/logo.png")}
              style={{
                width: "65.3px",
                height: "69px",
                filter: "drop-shadow(0px 4px 4px 0px #00000040)",
              }}
            />
          </div>

          <div className="suggestion-cards-container"   style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem",
              marginTop: "auto",
              width: "100%",
              "@media (min-width: 768px)": {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
              "@media (min-width: 1024px)": {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
            }}>
            {data.slice(0, 4).map((item, index) => (
              <div key={index}>
                <SuggestionCards text={item.question} data={data} />
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            width: "100%",
            padding: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              alignItems: "center",
            }}
          >
            <Input
              question={question}
              setQuestion={(q) => dispatch(setQuestion(q))}
              onKeyDown={(e) => e.key === "Enter" && handleAsk()}
            />
            <Button text={"Ask"} handleClick={handleAsk} />
            <Button text={"Save"} handleClick={() => dispatch(saveConversations())} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
