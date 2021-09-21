import React from "react";

function LikeButton({ id, likes }) {
  return (
    <button className="button" onClick={() => likes(id)}>
      Like
    </button>
  );
}

export default LikeButton;
