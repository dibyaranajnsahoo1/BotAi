// localStorageUtils.js

// Function to load state from localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined; // State not found, return undefined for initial state
    }
    return JSON.parse(serializedState); // Return the parsed state
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

// Function to save state to localStorage
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState); // Save serialized state
  } catch (err) {
    console.error("Could not save state", err);
  }
};
