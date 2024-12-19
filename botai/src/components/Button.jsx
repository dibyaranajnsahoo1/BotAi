
import React from "react";
import { useSelector } from "react-redux"; 

const Button = ({ text, handleClick, isphoneView }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); 

  return (
    <div
      style={{
        width:isphoneView?"60px":"74px",
        display: "flex",
        fontFamily: "Ubuntu",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isDarkMode ? "rgb(115, 98, 155)" : "#D7C7F4",
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
