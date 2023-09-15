import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import SideBar from "../components/SideBar";
import { useAppContext } from "../utils/AppContext";

const Home = () => {
  const { movies, searchMovie, search,error } = useAppContext();

  return (
    <div className=" w-full flex min-h-screen  bg-white">
      <SideBar />
      <div className="px-8 py-12  relative flex justify-start items-start flex-wrap">
        {/**check if search is empty than a return all movies*/}
        {movies && !search ? (
          movies?.map((movie) => (
            //added animation to the div below
            <motion.div className="m-2 box" 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
             key={movie.imdbID}>
              <Movie movie={movie} />
            </motion.div>
          ))
        ) : (
          <>
          {/** display only search Movies*/}
            {!error?(searchMovie.map((movie) => (
              <div className="m-2" key={movie.imdbID}>
                <Movie movie={movie} />
              </div>)
            )):(<div className=" w-[500px] top-[350px]  left-[350px]  absolute  text-3xl font-semibold "><h1>{error}</h1></div>) }
          </>
        )}
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
