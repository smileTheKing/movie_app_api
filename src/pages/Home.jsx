import React, { useEffect, useState } from "react";
//import API from '../utils/API';
import Movie from "../components/Movie";
import SideBar from "../components/SideBar";
import getApi from "../utils/API";
import { data } from "autoprefixer";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    try {
      const result = await getApi.get("", { params: { s: "all" } });

      console.log( result.data)

      //result is only resuting a single object
      setMovies(result.data.Search);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    //call getMovie
    getMovie();
  }, []);

  return (
    <div className=" w-full flex min-h-screen  bg-white">
      <SideBar />
      <div className=" m-8 flex justify-start items-start flex-wrap ">
      {movies?.map((movie,idx) => (
          <div className="m-2" key={idx}>
               <Movie movie={movie}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

{
  /**
   *  {movies?.map((movie,idx) => (
          <div className="m-2" key={idx}>
               <Movie movie={movie}/>
          </div>
        ))}
   */
}
