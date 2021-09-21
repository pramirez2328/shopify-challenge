import React from "react";
import "./LoadMore.css";

function LoadMore({ load }) {
  return (
    <button id="loadMore" onClick={load}>
      LOAD MORE IMAGES
    </button>
  );
}

export default LoadMore;
