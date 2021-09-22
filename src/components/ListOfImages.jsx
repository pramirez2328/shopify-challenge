import React, { useEffect, useState } from "react";

import CardImage from "./CardImage";
import LoadMore from "./LoadMore";
import SavedLikes from "./SavedLikes";
import "./ListOfImages.css";

function ListOfImages() {
  const [cards, setCards] = useState([] || [localStorage.getItem("cards")]);
  let [monthImages, setMonthImages] = useState(1);
  const [savedLikes, setSavedLikes] = useState([]);

  const apiCall = (month) => {
    let temp = month >= 10 ? month : `0${month}`;
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&start_date=2017-${temp}-21&end_date=2017-${temp}-28`
    )
      .then((response) => response.json())
      .then((data) => setCards(data));
  };

  useEffect(() => {
    apiCall(monthImages);
  }, [monthImages]);

  useEffect(() => {
    localStorage.setItem("cards", cards);
  }, [cards]);

  useEffect(() => {
    localStorage.setItem("saves", savedLikes);
  }, [savedLikes]);

  const handleLoadMore = () => {
    monthImages > 11 ? setMonthImages(1) : setMonthImages(monthImages + 1);
  };

  const handleLikes = (id, button, like) => {
    let save = cards.filter((obj) => obj.date === id);

    setSavedLikes([...savedLikes, ...save]);

    document.getElementById(button).style.display = "none";
    document.getElementById(like).style.display = "block";
  };

  const handleUndo = (id, button, undo) => {
    document.getElementById(button).style.display = "block";
    document.getElementById(undo).style.display = "none";
  };

  const handleSaves = () => {
    console.log("hello");
  };

  return (
    <>
      <div id="topButtons">
        <SavedLikes save={handleSaves} />
        <LoadMore load={handleLoadMore} />
      </div>

      <div className="cardsList">
        {cards.map((card) => {
          return (
            <CardImage
              key={`id-${card.date}`}
              {...card}
              saveLikes={handleLikes}
              undoLikes={handleUndo}
            />
          );
        })}
      </div>
    </>
  );
}

export default ListOfImages;
