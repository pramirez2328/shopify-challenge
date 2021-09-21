import React, { useEffect, useState } from "react";

import CardImage from "./CardImage";
import LoadMore from "./LoadMore";
import "./ListOfImages.css";

function ListOfImages() {
  const [cards, setCards] = useState([] || [localStorage.getItem("cards")]);

  const apiCall = () => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&start_date=2017-07-21&end_date=2017-07-28`
    )
      .then((response) => response.json())
      .then((data) => setCards(data));
  };

  useEffect(() => {
    apiCall();
  }, []);

  useEffect(() => {
    localStorage.setItem("cards", cards);
  }, [cards]);

  const handleLoadMore = () => {
    console.log("hello");
  };

  return (
    <>
      <LoadMore load={handleLoadMore} />
      <div className="cardsList">
        {cards.map((card) => {
          return <CardImage key={card.date} {...card} />;
        })}
      </div>
    </>
  );
}

export default ListOfImages;
