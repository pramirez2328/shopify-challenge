import React from "react";
import "./LikeButton.css";
function LikeButton({ id, buttonId, likeId, like }) {
  return (
    <button
      id={buttonId}
      className="button"
      onClick={() => like(id, buttonId, likeId)}
    >
      LIKE
    </button>
  );
}

export default LikeButton;
