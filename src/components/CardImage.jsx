import React, { useState } from "react";
import "./CardImage.css";
import LikeButton from "./LikeButton";

function CardImage({ date, explanation, hdurl, title }) {
  const [like, setLikes] = useState(false);

  const handleLikes = () => {
    console.log("hello likes");
  };
  return (
    <div className="card">
      <h2 className="title">- {title}</h2>
      <p className="imageDate">{date}</p>
      <h6 className="api-author">Brought to you by NASA's image API</h6>
      <div className="image">
        <img src={hdurl} alt="space banner" />
      </div>
      <p className="explanation">{explanation}</p>
      <LikeButton id={date} like={handleLikes} />
    </div>
  );
}

export default CardImage;
