// import React from "react";
// import { useSelector } from "react-redux"; // Import useSelector to access theme state

// const Button = ({ text, handleClick }) => {
//   const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Get dark mode state

//   return (
//     <div
//       style={{
//         display: "flex",
//         fontFamily: "Ubuntu",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: isDarkMode ? "#444444" : "#D7C7F4", 
//         fontSize: "20px",
//         fontWeight: "normal",
//         width: "4rem",
//         height: "2.5rem",
//         borderRadius: "5px",
//         cursor: "pointer",
//         color: isDarkMode ? "#FFFFFF" : "#000000",
//       }}
//       onClick={handleClick}
//     >
//       {text}
//     </div>
//   );
// };

// export default Button;




// src/components/Button.js
import React from "react";
import { useSelector } from "react-redux"; // Import useSelector to access theme state

const Button = ({ text, handleClick }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Get dark mode state

  return (
    <div
      style={{
        display: "flex",
        fontFamily: "Ubuntu",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isDarkMode ? "#444444" : "#D7C7F4",
        color: isDarkMode ? "#ffffff" : "#000000",
        padding: "12px 24px",
        borderRadius: "8px",
        fontSize: "20px",
        fontWeight: "500",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default Button;
