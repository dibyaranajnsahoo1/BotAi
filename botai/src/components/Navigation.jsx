import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice";
import sunIcon from "../assets/sun.png"; 
import moonIcon from "../assets/moon.png"; 

const Navigation = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
    const theme = isDarkMode ? "light-mode" : "dark-mode";
    document.body.className = theme; 
  };


  React.useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        alignItems: "center",
        width: "auto",
        height: "32px",
      }}
    >
      <p
        style={{
          fontSize: "28px",
          color: "#9785BA",
          fontWeight: "700",
          cursor: "pointer",
          fontFamily: "Ubuntu",
        }}
      >
        Bot AI
      </p>

      {/* Sun and Moon icons toggle */}
      <div
        onClick={handleThemeToggle}
        style={{
          marginLeft: "auto",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={isDarkMode ? sunIcon : moonIcon} // Toggle between sun and moon icon
          alt={isDarkMode ? "Light Mode" : "Dark Mode"}
          style={{
            width: "24px",
            height: "24px",
            marginRight: "8px",
          }}
        />
        <span
          style={{
            fontSize: "16px",
            color: "#9785BA",
            fontWeight: "600",
            fontFamily: "Ubuntu",
          }}
        >
          {isDarkMode ? "Light" : "Dark"}
        </span>
      </div>
    </div>
  );
};

export default Navigation;
