import React from "react";
import "./LikeButton.css";
function LikeButton({ buttonId, likeId, like }) {
  return (
    <button
      id={buttonId}
      className="button"
      onClick={() => like(buttonId, likeId)}
    >
      Like
    </button>
  );
}

export default LikeButton;
