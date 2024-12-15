import React from "react";

const Button = ({ text, handleClick }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9C74B7", // bg-purple
        fontSize: "1rem", // text-base
        fontWeight: "normal", // font-normal
        width: "4rem", // w-16
        height: "2.5rem", 
        borderRadius: "0.375rem", 
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
