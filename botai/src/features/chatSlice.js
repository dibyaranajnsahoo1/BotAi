// src/redux/slices/chatSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentQuestion: "",
  currentAnswer: "",
  conversations: [], // Store an array of conversation objects
  savedConversations: [], // Store saved conversations separately
  feedback: {}, // Store feedback data
  conversationRatings: {}, // Store conversation ratings
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    setAnswer: (state, action) => {
      state.currentAnswer = action.payload;
    },
    addConversation: (state, action) => {
      state.conversations.push({ ...action.payload, likeDislike: "none" }); // Add a new conversation object
    },
    toggleLikeDislike: (state, action) => {
      const { index, value } = action.payload; // Index of the answer in conversations array and the new like/dislike value
      state.conversations[index].likeDislike = value; // Update likeDislike state
    },
    saveConversations: (state) => {
      if (state.conversations.length > 0) {
        state.savedConversations.push([...state.conversations]); // Save current conversations
        state.conversations = []; // Clear conversations after saving
      }
    },
    addFeedback: (state, action) => {
      state.feedback[action.payload.id] = action.payload.feedback;
    },
    addRating: (state, action) => {
      state.conversationRatings[action.payload.id] = action.payload.rating;
    },
    clearChat: (state) => {
      state.currentQuestion = "";
      state.currentAnswer = "";
      state.conversations = [];
    },
  },
});

export const {
  setQuestion,
  setAnswer,
  addConversation,
  saveConversations,
  addFeedback,
  clearChat,
  addRating,
  toggleLikeDislike,
} = chatSlice.actions;
export default chatSlice.reducer;
