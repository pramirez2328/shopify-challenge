import React, { useEffect, useState } from "react";

import CardImage from "./CardImage";
import LoadMore from "./LoadMore";
import SavedLikes from "./SavedLikes";
import "./ListOfImages.css";

function ListOfImages() {
  const [cards, setCards] = useState([]);
  let [monthImages, setMonthImages] = useState(3);
  let prev = JSON.parse(localStorage.getItem("saves"));
  const [savedLikes, setSavedLikes] = useState(prev || []);
  let [exposeButtons, setExposeButtons] = useState(false);

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
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    let prev = JSON.stringify(savedLikes);
    localStorage.setItem("saves", prev);
  }, [savedLikes]);

  const handleLoadMore = () => {
    monthImages > 11 ? setMonthImages(1) : setMonthImages(monthImages + 1);
    setExposeButtons(false);
  };

  const handleLikes = (id, button, like) => {
    let save = cards.filter((obj) => obj.date === id);

    setSavedLikes([...savedLikes, ...save]);

    document.getElementById(button).style.display = "none";
    document.getElementById(like).style.display = "block";
  };

  const handleUndo = (id, button, undo) => {
    let save = savedLikes.filter((obj) => obj.date !== id);
    setSavedLikes([...save]);
    document.getElementById(button).style.display = "block";
    document.getElementById(undo).style.display = "none";
  };

  const handleSaves = () => {
    let localSaves = localStorage.getItem("saves");
    setCards(JSON.parse(localSaves));
    setExposeButtons(true);
  };

  return (
    <>
      <section id="topButtons">
        <SavedLikes save={handleSaves} />
        <LoadMore load={handleLoadMore} />
      </section>

      <section id="cardsList">
        {cards.map((card) => {
          return (
            <CardImage
              key={`id-${card.date}`}
              {...card}
              saveLikes={handleLikes}
              undoLikes={handleUndo}
              exposeButtons={exposeButtons}
            />
          );
        })}
      </section>
    </>
  );
}

export default ListOfImages;
