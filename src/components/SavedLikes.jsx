import React from "react";
import "./SavedLikes.css";
function SavedLikes({ save }) {
  return (
    <div>
      <button id="savedLikes" onClick={save}>
        SEE MY LIKES
      </button>
    </div>
  );
}

export default SavedLikes;
