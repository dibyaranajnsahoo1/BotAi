import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Input = ({ question, setQuestion, onKeyDown }) => {
  return (
    <div
      style={{
        width: "91.67%", // Equivalent to w-11/12
      }}
    >
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={onKeyDown}
        style={{
          width: "100%",
          height: "2.5rem", // Equivalent to h-10
          borderRadius: "0.375rem", // Equivalent to rounded-md
          border: "1px solid #e5e7eb", // Equivalent to border
          outline: "none",
          paddingLeft: "1rem", // Equivalent to px-4
        }}
        placeholder="Type your question here..."
      />
    </div>
  );
};

export default Input;
