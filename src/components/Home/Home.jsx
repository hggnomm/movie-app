import React, { useState } from "react";
import "./Home.css";
import Card from "../Card/Card";
const Home = () => {
  const [cardWidth, setCardWidth] = useState(500);
  const cardsInRow = 5;
  const [wrapperWidth, setWrapperWidth] = useState(cardWidth * cardsInRow);
  return (
    <div
      className="flex justify-center items-center"
      style={{ width: wrapperWidth }}
    >
      <div className="flex flex-wrap">
        <div>
          <Card cardWidth={cardWidth} />
        </div>
      </div>
    </div>
  );
};

export default Home;
