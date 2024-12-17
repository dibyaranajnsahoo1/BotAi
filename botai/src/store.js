import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./features/chatSlice";
import themeSlice from "../src/features/themeSlice"; // Import themeSlice

const store = configureStore({
  reducer: {
    chat: chatSlice,
    theme: themeSlice, // Add theme slice
  },
});

export default store;
