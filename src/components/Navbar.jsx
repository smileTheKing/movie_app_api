import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useAppContext } from "../utils/AppContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { getMovieByTitle, search, setSeacrh,getMovies  } = useAppContext();

  const handleSearch = async () => {
    if (search) {
      return await getMovieByTitle(search);
    }
    return ;
  };

  const handleClear = async () => {
   
      setSeacrh("")
      getMovies(1)
      
  }

  return (
    <>
    
      <nav className="w-full max-h-[80px] h-[80px]  flex text-white justify-center bg-[#073674]">
        <ul className="container w-full  flex justify-between items-center">
          <div>
            <img src={require(c:\Users\leoso\Desktop\W3project\W3-project-images\movie-app-logo.png)} alt="logo"/>
          </div>

          <div
            onKeyUpCapture={handleSearch}
            className="overflow-hidden flex border-2  items-center justify-center border-hidden-underline/25 text-center  w-[450px] rounded-md text-slate-300"

      <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt=" Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Movie
            </span>
          </Link>
          <div
            onKeyUpCapture={handleSearch}
            className="hidden overflow-hidden md:flex border-2  items-center justify-center border-slate-100/25 text-center  w-[450px] rounded-md text-slate-300"
            placeholder="search"
          >
            <input
              value={search}
              onChange={(e) => setSeacrh(e.target.value)}
              className="flex-1 p-2 outline-none bg-inherit text-center"
            />
            <button
              className="flex-2 px-4 text-slate-400 hover:text-red-300"
              onClick={handleClear}
            >
              clear
            </button>
          </div>
          <div className="md:flex md:order-2">
         
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center text-white justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 text-white font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <motion.li className = "box" 
            whileHover={{ scale: 2.0 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Home
                </Link>
                </motion.li>
              
                <motion.li className = "box" 
            whileHover={{ scale: 2.0 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Link
                  to="/favorite"
                  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Favorite
                </Link>
              </motion.li>
              <motion.li className = "box" 
            whileHover={{ scale: 2.0 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Link
                  to="/services"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Services
                </Link>
                </motion.li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
