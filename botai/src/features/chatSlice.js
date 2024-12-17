// src/redux/slices/chatSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Helper functions for localStorage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("chatState");
    return serializedState
      ? JSON.parse(serializedState)
      : {
          currentQuestion: "",
          currentAnswer: "",
          conversations: [],
          savedConversations: [],
          feedback: {},
          conversationRatings: {},
        };
  } catch (error) {
    console.error("Failed to load state from localStorage:", error);
    return {
      currentQuestion: "",
      currentAnswer: "",
      conversations: [],
      savedConversations: [],
      feedback: {},
      conversationRatings: {},
    };
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("chatState", serializedState);
  } catch (error) {
    console.error("Failed to save state to localStorage:", error);
  }
};

const initialState = loadStateFromLocalStorage(); // Load initial state from localStorage

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
      state.conversations.push({ ...action.payload, likeDislike: "none" });
    },
    toggleLikeDislike: (state, action) => {
      const { index, value } = action.payload;
      state.conversations[index].likeDislike = value;
    },
    saveConversations: (state) => {
      if (state.conversations.length > 0) {
        state.savedConversations.push({
          conversations: [...state.conversations],
          feedback: { ...state.feedback },
          ratings: { ...state.conversationRatings },
        });
        saveStateToLocalStorage(state); // Save updated state to localStorage
        state.conversations = [];
        state.feedback = {};
        state.conversationRatings = {};
      }
    },
    addFeedback: (state, action) => {
      const { id, feedback } = action.payload;
      state.feedback[id] = feedback; // Save feedback for the conversation ID
    },
    addRating: (state, action) => {
      const { id, rating } = action.payload;
      state.conversationRatings[id] = rating; // Save rating for the conversation ID
    },
    removeFeedback: (state, action) => {
      delete state.feedback[action.payload.id]; // Remove feedback by id
    },
    removeRating: (state, action) => {
      delete state.conversationRatings[action.payload.id]; // Remove rating by id
    },
    clearChat: (state) => {
      state.currentQuestion = "";
      state.currentAnswer = "";
      state.conversations = [];
      state.feedback = {};
      state.conversationRatings = {};
    },
    // Clear history - reset saved conversations, feedback, and ratings
    clearHistory: (state) => {
      state.savedConversations = [];
      state.feedback = {};
      state.conversationRatings = {};
      saveStateToLocalStorage(state); // Save cleared state to localStorage
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
  removeFeedback,
  removeRating,
  clearHistory, // Export clearHistory action
} = chatSlice.actions;

export default chatSlice.reducer;
