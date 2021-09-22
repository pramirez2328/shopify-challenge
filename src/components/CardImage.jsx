import React from "react";
import "./CardImage.css";
import LikeButton from "./LikeButton";
import today from "../today";
import heart from "../heart.jpg";
import Undo from "./Undo";
function CardImage({ date, explanation, hdurl, title, saveLikes, undoLikes }) {
  return (
    <div className="card">
      <h2 className="title">- {title}</h2>
      <p className="imageDate">{date}</p>
      <h6 className="api-author">Brought to you by NASA's image API</h6>
      <div className="image">
        <img src={hdurl} alt="Outer space icon was not provide by NASA" />
      </div>
      <p className="explanation">{explanation}</p>
      <LikeButton
        id={date}
        buttonId={`button-${date}`}
        likeId={`like-${date}`}
        like={saveLikes}
      />
      <div>
        <p className="likePicture" id={`like-${date}`}>
          You liked this picture on {today()} ...
          <img src={heart} alt="heart" className="heart" />
          <Undo
            id={date}
            buttonId={`button-${date}`}
            undoId={`like-${date}`}
            undo={undoLikes}
          />
        </p>
      </div>
    </div>
  );
}

export default CardImage;
