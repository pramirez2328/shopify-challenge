import React from "react";
import "./LoadMore.css";

function LoadMore({ load }) {
  return (
    <div id="loadMoreDiv">
      <button id="loadMore" onClick={load}>
        LOAD MORE IMAGES
      </button>
    </div>
  );
}

export default LoadMore;
