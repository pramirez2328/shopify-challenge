import React from "react";

function LikeButton({ id }) {
  return (
    <button className="button" key={id}>
      Like
    </button>
  );
}

export default LikeButton;
