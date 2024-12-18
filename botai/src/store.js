import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./features/chatSlice";
import themeSlice from "../src/features/themeSlice"; 

const store = configureStore({
  reducer: {
    chat: chatSlice,
    theme: themeSlice, 
  },
});

export default store;
