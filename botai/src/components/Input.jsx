import React from "react";
import { useSelector } from "react-redux";

const Input = ({ question, setQuestion, onKeyDown , isphoneView}) => {
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
          width:isphoneView? "222px": "100%",
          height: "50px", 
          borderRadius: "0.375rem", 
          border:!isDarkMode ?'1px solid black':'1px solid white',
          color: isDarkMode ? "#FFFFFF" : "#000000",
          background:!isDarkMode ? "#FFFFFF" : "rgb(96, 88, 114)",
          paddingLeft: "1rem",
        }}
        placeholder="Type your question here..."
        required
      />
    </div>
  );
};

export default Input;
