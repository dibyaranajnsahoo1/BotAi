import React, { useState } from "react";

const FeedbackBox = ({ isOpen, onClose, onSubmit }) => {
  const [feedback, setFeedback] = useState("");
  if (!isOpen) return null;
  
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "1rem",
          borderRadius: "0.375rem",
        }}
      >
        <div
          style={{
            backgroundColor: "var(--purpleFeedback)", // Assuming you have this color defined
            width: "83.33%", // Equivalent to w-5/6
            maxWidth: "766px",
            height: "max-content",
            borderRadius: "0.625rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1rem",
              }}
            >
              <svg
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
              <p
                style={{
                  fontSize: "22px",
                }}
              >
                Provide Additional Feedback
              </p>
            </div>
            <svg
              style={{
                width: "2.5rem",
                height: "2.5rem",
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              onClick={onClose}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              style={{
                resize: "none",
                width: "91.67%", // Equivalent to w-11/12
                borderRadius: "0.625rem",
                padding: "1rem",
                height: "170px",
                margin: "0.5rem auto",
                border: "1px solid #e5e7eb", // Equivalent to border-gray-200
                outline: "none",
              }}
            ></textarea>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "1.75rem",
            }}
          >
            <button
              style={{
                width: "157px",
                height: "50px",
                textAlign: "center",
                backgroundColor: "var(--purple)", // Assuming you have this color defined
                fontSize: "1.25rem",
                borderRadius: "0.375rem",
              }}
              onClick={() => onSubmit(feedback)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackBox;
