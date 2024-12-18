import { createSlice } from "@reduxjs/toolkit";

const initialTheme = localStorage.getItem("theme") === "dark";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: initialTheme, 
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;

      localStorage.setItem("theme", state.isDarkMode ? "dark" : "light");
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
