// src/StarRating.js
import React, { useState } from "react";

const Rating = ({ handleRatingSubmit, totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  const handleMouseEnter = (index) => setRating(index); // Highlight stars on hover
  const handleMouseLeave = () => setRating(0); // Remove highlight on hover leave
  const handleClick = (index) => {
    setRating(index);
    handleRatingSubmit(index); // Call the submit function with the selected rating
  };

  return (
    <div
      style={{
        display: "flex",
        cursor: "pointer",
      }}
      onMouseLeave={handleMouseLeave}
    >
      {[...Array(totalStars)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <svg
            key={starIndex}
            xmlns="http://www.w3.org/2000/svg"
            fill={rating >= starIndex ? "yellow" : "gray"} // Change fill based on rating
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width="30"
            height="30"
            onMouseEnter={() => handleMouseEnter(starIndex)} // Highlight on hover
            onClick={() => handleClick(starIndex)} // Set rating on click
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default Rating;
