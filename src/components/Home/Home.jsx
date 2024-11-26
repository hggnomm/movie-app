import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../Card/Card";
import Navigation from "../Navitation/Navigation";
const Home = () => {
  const [cardWidth, setCardWidth] = useState(500);
  const cardsInRow = 5;
  const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardsInRow);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [group, setGroup] = useState("Popular");

  useEffect(() => {
    getMovies();
  }, [page, group]);

  const getMovies = async () => {
    const url = `https://${
      import.meta.env.VITE_BASE_URL
    }/Movie/${group}?Page=${page}&Language=en-US&Adult=true`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_X_RAPIAPI_KEY,
        "x-rapidapi-host": import.meta.env.VITE_BASE_URL,
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
    <>
      <Navigation page={page} setPage={setPage} setGroup={group} />
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
    </>
  );
};

export default Home;
