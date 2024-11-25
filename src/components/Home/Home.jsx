import React from "react";
import "./Home.css";
import Card from "../Card/Card";
const Home = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-wrap">
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
