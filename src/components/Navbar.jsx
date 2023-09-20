import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useAppContext } from "../utils/AppContext";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"
const Navbar = () => {
  const { getMovieByTitle, search, setSearch,getMovies  } = useAppContext();

  const handleSearch = async () => {
    if (search) {
      return await getMovieByTitle(search);
    }
    return ;
  };

  const handleClear = async () => {
   
      setSearch("")
      getMovies(1)
      
  }

  return (
    <>
      <nav className="bg-[#22223b] fixed w-full z-20 top-0 left-0 border-b border-blue-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-.5">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              className="h-24 mr-3 hover:animate-spin"
              alt=" Logo"
            />
            <span className="font-cinzel self-center text-4xl font-semibold whitespace-nowrap text-[#f2e9e4]">
              MovieNook
            </span>
          </Link>
          <div
            onKeyUpCapture={handleSearch}
            className="hidden overflow-hidden md:flex border-2 items-center justify-center border-[#9a8c98] text-center  w-[450px] rounded-lg text-[#f2e9e4]"
            placeholder="search"
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 p-2 outline-none bg-inherit text-center"
            />
            <motion.button
              className="flex-2 px-4 text-slate-400 hover:text-red-600"
              onClick={handleClear}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.0 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              clear
            </motion.button>
          </div>
          <div className="md:flex md:order-2">
         
            {/* <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#4A4E69] rounded-lg md:hidden hover:bg-[#2b2b59] focus:outline-none focus:ring-2 focus:ring-[#313173]"
              aria-controls="navbar-sticky"
              aria-expanded="false"> */}
              <button data-collapse-toggle="navbar-dropdown" 
              type="button" 
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" 
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          
          {/* <div
            className="items-center text-white justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          > */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col p-4 md:p-0 mt-4 text-white font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {/* <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> */}
              
            <motion.li 
            whileHover={{ scale: 2.0 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 200, damping: 17 }}>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Home
                </Link>
                </motion.li>

                <motion.button 
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 1.0 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></motion.button>
  {/* <!-- Dropdown menu --> */}
  <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
            <li>
              <a href="#" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">DashboardThisLineIsATest</a>
            </li>


            <motion.li 
            whileHover={{ scale: 2.0 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }} className="block py-2 pl-3 pr-4 text-white rounded hover:bg-white-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"> Action</motion.li>

            <motion.li 
            whileHover={{ scale: 2.0 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }} className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"> Adventure</motion.li>

            <motion.li 
            whileHover={{ scale: 2.0 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" >Sci-fi</motion.li>

            <motion.li 
            whileHover={{ scale: 2.0 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }} className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" >Comedy</motion.li>
          </ul>
  </div>
                {/* <motion.li className = "box" 
            whileHover={{ scale: 2.0 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 200, damping: 17 }}>
                <Link
                  to="/genre"
                  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Genre
                </Link>
              </motion.li> */}
              
                {/* <motion.li className = "box" 
            whileHover={{ scale: 2.0 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Link
                  to="/favorite"
                  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Favorite
                </Link>
              </motion.li> */}
              <motion.li 
            whileHover={{ scale: 2.0 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 200, damping: 17 }}>
                <Link
                  to="/services"
                  className="block py-2 pl-3 pr-4 text-[#f2e9e4] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Services
                </Link>
                </motion.li>
            </ul>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
