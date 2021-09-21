import React from "react";
import "./CardImage.css";
import LikeButton from "./LikeButton";
import today from "../today";
function CardImage({ date, explanation, hdurl, title }) {
  const handleLikes = (button, like) => {
    document.getElementById(button).style.display = "none";
    document.getElementById(like).style.display = "block";
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
      <LikeButton
        buttonId={`button-${date}`}
        likeId={`like-${date}`}
        like={handleLikes}
      />
      <p className="likePicture" id={`like-${date}`}>
        You liked this picture on {today()}
      </p>
    </div>
  );
}

export default CardImage;
