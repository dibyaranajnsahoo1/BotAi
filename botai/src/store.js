import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./features/chatSlice";
import { loadState, saveState } from "./localStorageUtils";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    chat: chatReducer,
    preloadedState: persistedState,
  },
});

store.subscribe(() => saveState(store.getState()));
export default store;
