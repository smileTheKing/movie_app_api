import React from "react";
import Movie from "../components/Movie";
import SideBar from "../components/SideBar";
import { useAppContext } from "../utils/AppContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { movies, searchMovie, search,error } = useAppContext();

  return (
    <div className=" w-full lg:flex-row flex flex-col flex-1 bg-slate-600">
      <SideBar />
      <div className=" w-full mt-8 md:mx-6 items-center justify-center relative flex md:justify-start md:items-start flex-wrap overflow-hidden ">
        {/**check if search is empty than a return all movies*/}
        {movies && !search ? (
          movies?.map((movie) => (
            <Link to={`/detail/${movie.imdbID}`} className="m-2" key={movie.imdbID} >
              <Movie movie={movie} />
            </Link>
          ))
        ) : (
          <>
          {/** display only search Movies*/}
            {!error?(searchMovie.map((movie) => (
             <Link  className="m-2" to={`/detail/${movie.imdbID}`}>
             <Movie movie={movie} />
           </Link>)
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
