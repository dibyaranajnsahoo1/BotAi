// import React from "react";
// import Sidebar from "../Sidebar";
// import Navigation from "../Navigation";
// import { useSelector } from "react-redux";
// import ConversationHistoryMessageBox from "../ConversationHistoryMessageBox";

// const PastConversations = () => {
//   const conversationHistory = useSelector(
//     (state) => state.chat.savedConversations
//   );
//   const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Get dark mode state
  
//   return (
//     <div style={{ display: "flex", minHeight: "100vh" }}>
//       <div style={{ width: "208px" }}>
//         <Sidebar />
//       </div>

//       <div
//         style={{
//           width: '0',
//           position: "relative",
//           padding: "1rem",
//           display: "flex",
//           flexDirection: "column",
//           flexGrow: 1,
//           background: isDarkMode
//             ? "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)"
//             : "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)",
//         }}
//       >
//         <Navigation />

//         <div style={{ margin: "1.5rem auto" }}>
//           <h1
//             style={{
//               fontSize: "28px",
//               fontWeight: "400",
//               fontFamily: 'Ubuntu',
//               color: isDarkMode ? "#FFFFFF" : "#000000", 
//             }}
//           >
//             Conversation History
//           </h1>
//         </div>

//         <div
//           style={{
//             marginTop: "1rem",
//             overflowY: "auto",
//             padding: "1rem",
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '10px',
//             "&::-webkit-scrollbar": {
//               display: "none",
//             },
//           }}
//         >
//           <h1 style={{ fontSize: '20px', padding: '10px', color: isDarkMode ? "#FFFFFF" : "#000000" }}>
//             Today's Chats
//           </h1>
//           {conversationHistory.length > 0 ? (
//             conversationHistory.map((conversation, index) => (
//               <div
//                 key={index}
//                 style={{
//                   background: isDarkMode
//                     ? 'linear-gradient(90deg, #444 0%, #666 100%)' // Dark mode gradient
//                     : 'linear-gradient(90deg, #BFACE2 0%, #D7C7F4 100%)', // Light mode gradient
//                   boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//                   borderRadius: "10px",
//                   display: 'flex',
//                   flexDirection: 'column',
//                   width: "100%",
//                   height: 'auto',
//                   margin: "auto",
//                   padding: '15px',
//                 }}
//               >
//                 {conversation.map((entry, entryIndex) => (
//                   <ConversationHistoryMessageBox
//                     key={entryIndex}
//                     question={entry.question}
//                     answer={entry.answer}
//                   />
//                 ))}
//               </div>
//             ))
//           ) : (
//             <p
//               style={{
//                 color: isDarkMode ? "#9CA3AF" : "#6B7280", // Adjust color for no history message
//                 textAlign: "center",
//                 marginTop: "1rem",
//               }}
//             >
//               No conversation history available.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PastConversations;












import React from "react";
import Sidebar from "../Sidebar";
import Navigation from "../Navigation";
import { useSelector, useDispatch } from "react-redux";
import { clearHistory } from "../../features/chatSlice";
import ConversationHistoryMessageBox from "../ConversationHistoryMessageBox";

const PastConversations = () => {
  const conversationHistory = useSelector(
    (state) => state.chat.savedConversations
  );
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div style={{ width: "208px" }}>
        <Sidebar />
      </div>

      <div
        style={{
          width: "0",
          position: "relative",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          background: isDarkMode
            ? "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)"
            : "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)",
        }}
      >
        <Navigation />

        <div style={{ margin: "1.5rem auto" }}>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "400",
              fontFamily: "Ubuntu",
              color: isDarkMode ? "#FFFFFF" : "#000000",
            }}
          >
            Conversation History
          </h1>
        </div>

        <div
          onClick={handleClearHistory}
          style={{
            color: isDarkMode ? "#FFFFFF" : "#000000",
            padding: "10px 15px",
            border: `1px solid ${isDarkMode ? "#FFFFFF" : "#000000"}`,
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "1rem",
            alignSelf: "center",
          }}
        >
          Clear History
        </div>

        <div
          style={{
            marginTop: "1rem",
            overflowY: "auto",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h2 style={{ color: isDarkMode ? "#FFFFFF" : "#000000" }}>
            Today's Chat
          </h2>
          {conversationHistory.length > 0 ? (
            conversationHistory.map((savedConversation, index) => (
              <div
                key={index}
                style={{
                  background: isDarkMode
                    ? "linear-gradient(90deg, #444 0%, #666 100%)"
                    : "linear-gradient(90deg, #BFACE2 0%, #D7C7F4 100%)",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "10px",
                  padding: "15px",
                  marginBottom: "10px",
                }}
              >
                {savedConversation.conversations.map((entry, entryIndex) => (
                  <ConversationHistoryMessageBox
                    key={entryIndex}
                    question={entry.question}
                    answer={entry.answer}
                    feedback={
                      savedConversation.feedback[entry.timeStamp]
                        ? savedConversation.feedback[entry.timeStamp]
                        : "No feedback provided"
                    }
                    rating={
                      savedConversation.ratings[entry.timeStamp]
                        ? `${savedConversation.ratings[entry.timeStamp]} stars`
                        : "No rating provided"
                    }
                  />
                ))}
              </div>
            ))
          ) : (
            <p
              style={{
                color: isDarkMode ? "#9CA3AF" : "#6B7280",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              No conversation history available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PastConversations;
