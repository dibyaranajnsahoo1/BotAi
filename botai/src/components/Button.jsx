import React from "react";

const Button = ({ text, handleClick }) => {
  return (
    <div
      style={{
        display: "flex",
        fontFamily:'Ubuntu',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D7C7F4",
        fontSize: "20px", 
        fontWeight: "normal", 
        width: "4rem",
        height: "2.5rem", 
        borderRadius: "5px", 
        cursor: "pointer",
      }}
      onClick={handleClick}
      placeholder="Type your question here..."
    >
      {text}
    </div>
  );
};

export default Button;
