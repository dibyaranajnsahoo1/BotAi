
import { useState, useEffect } from "react";
import HomePage from "./components/pages/HomePage";
import { Provider } from "react-redux";
import store from "./store";
import ChatPage from "./components/pages/ChatPage";
import { Route, Routes } from "react-router-dom"; 

import PastConversations from "./components/pages/PastConversations";
import sampleData from "../src/data/chatData.json";
import Sidebar from "./components/Sidebar";

const App = () => {
  const data = sampleData;
  // console.log(data);

  return (
    <Provider store={store}>
      <div>
        {/* <Sidebar /> */}
        <Routes>
          <Route index path="/" element={<HomePage data={data} />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/history" element={<PastConversations />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
