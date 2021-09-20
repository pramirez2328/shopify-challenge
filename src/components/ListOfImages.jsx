import React, { useEffect, useState } from "react";
import axios from "axios";
import CardImage from "./CardImage";
import "./ListOfImages.css";

function ListOfImages() {
  const [cards, setCards] = useState([] || [localStorage.getItem("cards")]);

  useEffect(() => {
    const options = {
      credentials: "include",
      method: "GET",
      url: `https://api.nasa.gov/planetary/apod?api_key=Z88FkILrR8LiOo0nDtU4tGvDVoGKKIf0fHgDgHE3&start_date=2017-01-01&end_date=2021-01-10`,
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": "api.nasa.gov",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setCards(response.data);
      })
      .catch(function (error) {
        alert(
          "The server is not working at this time, please try again later!",
          error.message
        );
      });

    localStorage.setItem("cards", cards);
  });

  return (
    <div className="cardsList">
      {cards.map((card) => {
        return <CardImage key={card.date} {...card} />;
      })}
    </div>
  );
}

export default ListOfImages;
