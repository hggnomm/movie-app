import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../Card/Card";
const Home = () => {
  const [cardWidth, setCardWidth] = useState(500);
  const cardsInRow = 5;
  const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardsInRow);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const url =
      "https://tvshow.p.rapidapi.com/Movie/NowPlaying?Page=1&Language=en-US&Adult=true";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "53d61623b7msh44356d39f002645p1689fcjsn745cf05f1c23",
        "x-rapidapi-host": "tvshow.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMovies(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className="flex justify-center items-center"
      style={{ width: wrapperWidth }}
    >
      <div className="flex flex-wrap">
        {movies.map((movie, index) => (
          <div key={index}>
            <Card movie={movie} cardWidth={cardWidth} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
