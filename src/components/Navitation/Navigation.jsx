import React from "react";
import "./Navigation.css";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
const Navigation = ({ page, setPage, setGroup }) => {
  return (
    <div className="relative z-10">
      <div className="fixed bottom-5 left-5 flex items-center gap-x-2 text-2xl bg-yellow-500 rounded-full px-2">
        <span
          onClick={() => page != 1 && setPage((page) => page - 1)}
          className="cursor-pointer"
        >
          <IoMdArrowDropleftCircle />
        </span>
        <p className="text-xl select-none">{page}</p>
        <span
          onClick={() => setPage((page) => page + 1)}
          className="cursor-pointer"
        >
          <IoMdArrowDroprightCircle />
        </span>
      </div>
      <select className="fixed top-5 left-5 bg-gray-200/90 text-sm tracking-wide text-gray-700 uppercase rounded-md outline-none p-1 cursor-pointer">
        <option value="TopRated">Top Rated</option>
        <option value="Popular">Popular</option>
        <option value="UpComing">UpComing</option>
        <option value="Discover">Discover</option>
      </select>
    </div>
  );
};

export default Navigation;