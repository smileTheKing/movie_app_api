import React from "react";
import Movie from "../components/Movie";
import SideBar from "../components/SideBar";
import { useAppContext } from "../utils/AppContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Pagination = () => {
  return (
    <nav aria-label="pagination">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            4
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            5
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Home = () => {
  const { movies, searchMovie, search, error } = useAppContext();

  return (
    <div className=" mt-16 w-full lg:flex-row flex flex-col flex-1 bg-slate-800">
      <SideBar />
      <div className="w-full p-8 flex flex-col justify-center  gap-8 items-center">
        <motion.div 
        variants={{
          hidden:{opacity:0},
          visible:{opacity:1}
        }}
  
        initial='hidden'
        animate='visible'
        transition={{duration:0.8, delay:0.25}}
        
        className="w-full flex gap-8 flex-wrap items-start justify-center lg:justify-normal">
          {/**check if search is empty than a return all movies*/}
          {movies && !search ? (
            movies?.map((movie) => (
              <div className=" " key={movie.imdbID}>
                <Movie movie={movie} />
              </div>
            ))
          ) : (
            <>
              {/** display only search Movies*/}
              {!error ? (
                searchMovie.map((movie) => (
                  <Link className="m-2" to={`/detail/${movie.imdbID}`}>
                    <Movie movie={movie} />
                  </Link>
                ))
              ) : (
                <div className=" w-[500px] top-[350px]  left-[350px]  absolute  text-3xl font-semibold ">
                  <h1>{error}</h1>
                </div>
              )}
            </>
          )}
        </motion.div>
        <Pagination />
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
