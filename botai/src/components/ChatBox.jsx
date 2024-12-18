// import React, { useState, useEffect } from "react";
// import avatar from "../assets/avatar.png";
// import botAILogo from "../assets/botAI_logo.png";
// import { toggleLikeDislike } from "../features/chatSlice";
// import { useDispatch } from "react-redux";
// import { FaThumbsUp, FaThumbsDown } from "react-icons/fa"; 
// import StarRating from "./Rating";
// import FeedbackBox from "./FeedbackBox";
// import {
//   saveConversations,
//   clearChat,
//   addRating,
//   addFeedback,
// } from "../../src/features/chatSlice";
// import { useSelector } from "react-redux"; 

// const ChatBox = ({ text, type, index }) => {
//   const isDarkMode = useSelector((state) => state.theme.isDarkMode);
//   const [isHovered, setIsHovered] = useState(false);
//   const dispatch = useDispatch();
//   const [isRatingOpen, setIsRatingOpen] = useState(false);
//   const [time, setTime] = useState("");

//   const getCurrentTime = () => {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const ampm = hours >= 12 ? "PM" : "AM";
//     const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
//     setTime(formattedTime);
//   };

//   useEffect(() => {
//     getCurrentTime();
//     const intervalId = setInterval(getCurrentTime, 60000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const [timerId, setTimerId] = useState(null);

//   const handleLike = () => {

//     setIsRatingOpen((prevState) => !prevState);
    
//     if (!isRatingOpen) {
//       dispatch(toggleLikeDislike({ index, value: "like" }));
//     }
  
//     if (timerId) {
//       clearTimeout(timerId);
//     }
  
//     if (isRatingOpen) {
//       setIsRatingOpen(false);
//     } else {

//       const newTimerId = setTimeout(() => {
//         setIsRatingOpen(false);
//       }, 5000);
//       setTimerId(newTimerId);
//     }
//   };
  


//   const handleDislike = () => {
//     dispatch(toggleLikeDislike({ index, value: "dislike" }));
//   };

//   const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

//   const handleRatingSubmit = (rating) => {
//     dispatch(addRating({ id: Date.now(), rating })); 
//     setIsRatingOpen(false);
//     setIsFeedbackOpen(true);
//   };

//   const handleFeedbackSubmit = (feedback) => {
//     dispatch(addFeedback({ id: Date.now(), feedback })); 
//     dispatch(saveConversations());
//     setIsFeedbackOpen(false);
//     dispatch(clearChat());
//   };

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "max-content",
//         display: "flex",
//         padding: "1rem 1.25rem",
//         borderRadius: "20px",
//         backgroundColor: "#D7C7F421",
//         gap: "20px",
//         marginBottom: "1rem",
//         alignItems: "center",
//         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//         position: "relative",
//         transition: "all 0.3s",
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <img
//         src={type === "question" ? avatar : botAILogo}
//         alt=""
//         style={{ width: "70px", height: "75px" }}
//       />
//       <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
//         <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
//           {type === "question" ? "You" : "Bot AI"}
//         </p>
//         <p style={{ marginBottom: "0.5rem" }}>{text}</p>
//         <p
//           style={{
//             fontWeight:'40px',
//             fontSize: "12px",
//             color:isDarkMode? 'rgb(229, 226, 226)': "rgb(68, 66, 66)",
//             marginTop: "auto",
//           }}
//         >
//           {time}
//         </p>
//       </div>
//       {type === "answer" && isHovered && (
//         <div
//           style={{
//             position: "absolute",
//             display: "flex",
//             gap: "0.5rem",
//             bottom: "0.25rem",
//             left: "170px",
//             marginBottom: "20px",
//           }}
//         >
//           <button
//             onClick={handleLike}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               backgroundColor: "transparent",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             <FaThumbsUp
//               style={{
//                 color:isDarkMode? 'white': 'Black',
//                 fontSize: "16px",
//               }}
//             />
//           </button>

//           {isRatingOpen && <StarRating handleRatingSubmit={handleRatingSubmit} />}
          
//           {isFeedbackOpen && (
//             <FeedbackBox
//               isOpen={isFeedbackOpen}
//               onClose={() => setIsFeedbackOpen(false)}
//               onSubmit={handleFeedbackSubmit}
//             />
//           )}

//           <button
//             onClick={() => {
//               handleDislike();
//               handleRatingSubmit();
//             }}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               backgroundColor: "transparent",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             <FaThumbsDown
//               style={{
//                 color:isDarkMode? 'white': 'Black',
       
//                 fontSize: "16px",
//               }}
//             />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBox;




import React, { useState, useEffect } from "react";
import avatar from "../assets/avatar.png";
import botAILogo from "../assets/botAI_logo.png";
import { toggleLikeDislike } from "../features/chatSlice";
import { useDispatch } from "react-redux";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa"; 
import StarRating from "./Rating";
import FeedbackBox from "./FeedbackBox";
import { saveConversations, clearChat, addRating, addFeedback } from "../../src/features/chatSlice";
import { useSelector } from "react-redux"; 

const ChatBox = ({ text, type, index }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [time, setTime] = useState("");

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
    setTime(formattedTime);
  };

  useEffect(() => {
    getCurrentTime();
    const intervalId = setInterval(getCurrentTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const [timerId, setTimerId] = useState(null);

  const handleLike = () => {
    setIsRatingOpen((prevState) => !prevState);
    if (!isRatingOpen) {
      dispatch(toggleLikeDislike({ index, value: "like" }));
    }
    if (timerId) {
      clearTimeout(timerId);
    }
    if (isRatingOpen) {
      setIsRatingOpen(false);
    } else {
      const newTimerId = setTimeout(() => {
        setIsRatingOpen(false);
      }, 5000);
      setTimerId(newTimerId);
    }
  };

  const handleDislike = () => {
    dispatch(toggleLikeDislike({ index, value: "dislike" }));
  };

  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const handleRatingSubmit = (rating) => {
    dispatch(addRating({ id: Date.now(), rating }));
    setIsRatingOpen(false);
    setIsFeedbackOpen(true);
  };

  const handleFeedbackSubmit = (feedback) => {
    dispatch(addFeedback({ id: Date.now(), feedback }));
    dispatch(saveConversations()); 
    setIsFeedbackOpen(false);
    dispatch(clearChat());
  };

  return (
    <div
      style={{
        width: "100%",
        height: "max-content",
        display: "flex",
        padding: "1rem 1.25rem",
        borderRadius: "20px",
        backgroundColor: "#D7C7F421",
        gap: "20px",
        marginBottom: "1rem",
        alignItems: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        // position: "relative",
        transition: "all 0.3s",
        // border:'1px solid red'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={type === "question" ? avatar : botAILogo}
        alt=""
        style={{ width: "70px", height: "75px" }}
      />
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
          {type === "question" ? "You" : "Bot AI"}
        </p>
        <p style={{ marginBottom: "0.5rem" }}>{text}</p>
        <p
          style={{
            fontWeight: "40px",
            fontSize: "12px",
            color: isDarkMode ? "rgb(229, 226, 226)" : "rgb(68, 66, 66)",
            marginTop: "auto",
          }}
        >
          {time}
        </p>
        {type === "answer" &&  (
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            bottom: "0.25rem",
            left: "170px",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={handleLike}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <FaThumbsUp
           style={{
            color: isRatingOpen ? "#1e90ff" : (isDarkMode ? "white" : "black"),
            fontSize: "16px",
          }}
          
            
            />
          </button>

          {isRatingOpen && <StarRating handleRatingSubmit={handleRatingSubmit} />}

          {isFeedbackOpen && (
            <FeedbackBox
              isOpen={isFeedbackOpen}
              onClose={() => setIsFeedbackOpen(false)}
              onSubmit={handleFeedbackSubmit}
            />
          )}

          <button
            onClick={() => {
              handleDislike();
              handleRatingSubmit();
            }}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <FaThumbsDown
              style={{
                color: isDarkMode ? "white" : "Black",
                fontSize: "16px",
              }}
            />
          </button>
        </div>
      )}
      </div>
     
    </div>
  );
};

export default ChatBox;
