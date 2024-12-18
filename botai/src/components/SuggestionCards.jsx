// import React from "react";
// import { useDispatch, useSelector } from "react-redux"; // Import useSelector here
// import { setQuestion, setAnswer, addConversation } from "../features/chatSlice";
// import { useNavigate } from "react-router-dom";

// const SuggestionCards = ({ text, data }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   // Access the theme from Redux
//   const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Corrected to isDarkMode

//   const findAnswer = (text) => {
//     const normalizedText = text.trim().toLowerCase();
//     const foundAnswer = data.find(
//       (item) => item.question.trim().toLowerCase() === normalizedText
//     );
//     return foundAnswer ? foundAnswer.response : "I don't know";
//   };

//   const handleClick = () => {
//     dispatch(setQuestion(text));
//     dispatch(setAnswer(findAnswer(text)));
//     dispatch(
//       addConversation({
//         question: text,
//         answer: findAnswer(text),
//         timeStamp: Date.now(),
//       })
//     );
//     navigate("/chat");
//     dispatch(setQuestion("")); // Clear question state
//   };

//   return (
//     <div
//       style={{
//         height: "111px",
//         display: "flex",
//         flexDirection: "column",
//         boxShadow: isDarkMode
//           ? "0 4px 6px rgba(255, 255, 255, 0.1)"
//           : "0 4px 6px rgba(0, 0, 0, 0.1)",
//         padding: "1rem",
//         backgroundColor: isDarkMode ? "#333" : "#FFFFFF",
//         color: isDarkMode ? "#FFFFFF" : "#000000",
//         borderRadius: "5px",
//         cursor: "pointer",
//         transition: "background-color 0.3s ease, color 0.3s ease", // Smooth transition
//       }}
//       onClick={handleClick}
//     >
//       <p
//         style={{
//           fontSize: "20px",
//           fontWeight: "700",
//           fontFamily: "Ubuntu",
//         }}
//       >
//         {text}
//       </p>
//       <p
//         style={{
//           fontSize: "16px",
//           fontWeight: "400",
//           color: isDarkMode ? "#9CA3AF" : "#6B7280",
//           fontFamily: "Ubuntu",
//         }}
//       >
//         Get immediate AI-generated response
//       </p>
//     </div>
//   );
// };

// export default SuggestionCards;






// src/components/SuggestionCards.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestion, setAnswer, addConversation } from "../features/chatSlice";
import { useNavigate } from "react-router-dom";

const SuggestionCards = ({ text, data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Get dark mode state

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
        feedback: "",
        rating: null,
      })
    );
    navigate("/chat");
    dispatch(setQuestion("")); 
  };

  return (
    <div
      style={{
        height: "111px",
        display: "flex",
        flexDirection: "column",
        boxShadow: isDarkMode
          ? "0 4px 6px rgba(255, 255, 255, 0.1)"
          : "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "1rem",
        backgroundColor: isDarkMode ? "#333" : "#FFFFFF",
        color: isDarkMode ? "#FFFFFF" : "#000000",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease, color 0.3s ease", 
      }}
      onClick={handleClick}
    >
      <p
        style={{
          fontSize: "20px",
          fontWeight: "700",
          fontFamily: "Ubuntu",
        }}
      >
        {text}
      </p>
      <p
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: isDarkMode ? "#9CA3AF" : "#6B7280",
          fontFamily: "Ubuntu",
          marginTop:'-10px'
        }}
      >
        Get immediate AI-generated response
      </p>
    </div>
  );
};

export default SuggestionCards;
