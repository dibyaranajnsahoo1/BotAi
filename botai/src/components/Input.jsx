import React from "react";


const Input = ({ question, setQuestion, onKeyDown }) => {
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
        
          paddingLeft: "1rem",
        }}
        placeholder="Type your question here..."
      />
    </div>
  );
};

export default Input;
