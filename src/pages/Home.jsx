import React from "react";
import Movie from "../components/Movie";
import SideBar from "../pages/SideBar";
import { useAppContext } from "../utils/AppContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Pagination from "../components/Pagination";
import { Loading } from "../assets";
import { Player } from "@lottiefiles/react-lottie-player";



const Home = () => {
  const { movies, loading,currentPage,totalResults,onPageChange } = useAppContext();

  return (
    <div className=" mt-16 w-full lg:flex-row flex flex-col flex-1 bg-slate-900 ">
      <div className="w-full flex-1 md:ml-24 md:pb-24 pt-12 flex flex-col  gap-12 items-center">
      <h1 className="font-cinzel md:-ml-24 font-bold text-slate-100 text-3xl ">Browse Library</h1>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.25 }}
          className="w-full flex gap-8 flex-wrap items-start justify-center md:justify-normal "
        >
          {/**check if search is empty than a return all movies*/}
          {loading ? (
            <>
              {/** display only search Movies*/}
            
              <Player autoplay loop src={Loading} className=" w-96 h-96" />
              
            </>
          ): (

            movies?.map((movie) => (
              <div
               className=" m-0 p-0 " key={movie.imdbID}>
                <Movie movie={movie} />
              </div>
            ))
          ) }
        </motion.div>
        <div className=" mb-9 md:m-0">
        <Pagination page={currentPage} totalResults={totalResults} onPageChange={onPageChange}/>
        </div>
      
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





        const Pagination = ({props}) => {
  return (
    <nav aria-label="pagination" className="mt-12 ">
      <ul className="inline-flex -space-x-px text-base h-10 ">
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500  border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          > Previous </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            4
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            5
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
   */
}
