import React from "react";
import { useSelector } from "react-redux";

const Input = ({ question, setQuestion, onKeyDown }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <div
      style={{
        width: "91.67%", 
      }}
    >
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={onKeyDown}
        style={{
          width: "100%",
          height: "41px", 
          borderRadius: "0.375rem", 
          border:'1px solid black',
          color: isDarkMode ? "#FFFFFF" : "#000000",
          background:!isDarkMode ? "#FFFFFF" : "#D7C7F421",
          paddingLeft: "1rem",
        }}
        placeholder="Type your question here..."
      />
    </div>
  );
};

export default Input;
