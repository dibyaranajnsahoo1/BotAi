import React, { useState } from "react";

const StarRating = ({ handleRatingSubmit }) => {
  const [rating, setRating] = useState(0);

  const handleMouseEnter = (index) => {
    setRating(index);
  };

  const handleMouseLeave = () => {
    setRating(0);
  };

  const handleClick = (index) => {
    setRating(index);
    handleRatingSubmit(index); // Submitting the selected rating
  };

  return (
    <div
      style={{
        display: "flex",
      }}
      onMouseLeave={handleMouseLeave}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          fill={rating >= star ? "yellow" : "none"}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          style={{
            width: "1.5rem", // Equivalent to size-6
            height: "1.5rem", // Equivalent to size-6
            cursor: "pointer",
          }}
          onMouseEnter={() => handleMouseEnter(star)}
          onClick={() => handleClick(star)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
