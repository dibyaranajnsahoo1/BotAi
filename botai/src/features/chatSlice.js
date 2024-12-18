import { createSlice } from "@reduxjs/toolkit";

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
          feedback: [],
          conversationRatings: [],
        };
  } catch (error) {
    console.error("Failed to load state from localStorage:", error);
    return {
      currentQuestion: "",
      currentAnswer: "",
      conversations: [],
      savedConversations: [],
      feedback: [],
      conversationRatings: [],
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

const initialState = loadStateFromLocalStorage(); 

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
          feedback: [...state.feedback],
          ratings: [...state.conversationRatings],
        });
        saveStateToLocalStorage(state); 
        state.conversations = [];
        state.feedback = [];
        state.conversationRatings = [];
      }
    },
    addFeedback: (state, action) => {
      const feedback = action.payload;
      state.feedback.push(feedback); 
    },
    addRating: (state, action) => {
      const rating = action.payload;
      state.conversationRatings.push(rating); 
    },
    removeFeedback: (state, action) => {
      state.feedback.pop(); 
    },
    removeRating: (state, action) => {
      state.conversationRatings.pop(); 
    },
    clearChat: (state) => {
      state.currentQuestion = "";
      state.currentAnswer = "";
      state.conversations = [];
      state.feedback = [];
      state.conversationRatings = [];
    },

    clearHistory: (state) => {
      state.savedConversations = [];
      state.feedback = [];
      state.conversationRatings = [];
      saveStateToLocalStorage(state); 
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
  clearHistory,
} = chatSlice.actions;

export default chatSlice.reducer;
