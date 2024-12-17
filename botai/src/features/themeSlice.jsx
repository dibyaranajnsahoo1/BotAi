import { createSlice } from "@reduxjs/toolkit";

// Load initial theme from localStorage
const initialTheme = localStorage.getItem("theme") === "dark";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: initialTheme, // Use the saved theme as the initial state
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      // Save the new theme to localStorage
      localStorage.setItem("theme", state.isDarkMode ? "dark" : "light");
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
