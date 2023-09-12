import React, { useState } from "react";
//import API from '../utils/API';
import Movie from "../components/Movie";
import SideBar from "../components/SideBar";

const Home = () => {
  const [movies, setMovies] = useState([0, 3,5,4,6]);

  const getMovie = () => {};

  return (
    <div className=" w-full flex min-h-screen  bg-white">
      <SideBar />
      <div className=" m-4 flex justify-center items-start">
        {movies.map((movie, i) => (
          <div className="m-2">
               <Movie keys={i} props={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
