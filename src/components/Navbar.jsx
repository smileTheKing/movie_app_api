import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useAppContext } from "../utils/AppContext";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
const Navbar = () => {
  const { getMovieByTitle, search, setSearch, getMovies } = useAppContext();

  //added state for opening dropdown aaand closing
  const [openMainMenu, setOpenMainMenu] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const handleToggle = () => {
    setDropDown(!dropDown);
  };

  const handleMainMenuToggle = () => {
    setOpenMainMenu(!openMainMenu);

  };

  const handleSearch = async () => {
    if (search) {
      return await getMovieByTitle(search);
    }
    return;
  };

  const handleClear = async () => {
    setSearch("");
    getMovies(1);
  };

  return (
    <>
      <nav className="bg-blue-900 fixed w-full z-20 top-0 left-0 ">
        <div className="max-w-screen-xl flex flex-col md:flex-row md:items-center md:justify-between md:gap-8">
          <div className=" flex items-center w-full  justify-between ">
            <Link to="/" className="flex items-center">
              <img src={logo} className="h-24 hover:animate-spin" alt=" Logo" />
              <span className="font-cinzel self-center text-sm md:text-4xl font-semibold whitespace-nowrap text-white">
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
                className="font-cinzel flex-2 px-5 text-slate-400 hover:text-red-600"
                onClick={handleClear}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.0 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                clear
              </motion.button>
            </div>

            <button
              onClick={handleMainMenuToggle}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100/50 focus:outline-none focus:ring-2  "
            >
              <Menu />
            </button>
          </div>

          {/**hide main menu on mobile and show on desktop */}

          <div className=" bg-inherit">
          
            {/** main nav open div */}
           {!openMainMenu && ( <div className=" w-full md:block   md:w-auto" >
              <ul className=" md:flex p-4 md:p-0 mt-4 text-white font-medium rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 17 }}
                >
                  <Link
                    to="/"
                    className="font-cinzel block py-2 pl-3 pr-4  rounded  md:hover:bg-transparent md:hover:text-grey-700 md:p-0"
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1.05 }}
                  onClick={handleToggle}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="font-cinzel flex items-center justify-between w-full py-2 pl-3 pr-4 text-white-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-grey-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Dropdown {dropDown ? <ChevronUp /> : <ChevronDown />}
                </motion.button>

               
                {dropDown && 
                  (<div
                    id="dropdownNavbar"
                    className="top-[65px] translate-x-12  bg-blue-900 z-10  md:absolute font-bold text-lg font-cinzel  w-44"
                  >
                    <ul
                      className="p-2 space-y-4 flex flex-col text-sm text-slate-300 "
                      aria-labelledby="dropdownLargeButton"
                    >
                      <motion.li
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        className="block py-2 pl-3 pr-4rounded hover:bg-white-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                      >
                        Action
                      </motion.li>

                      <motion.li
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        className="block py-2 pl-3 pr-4rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                      >
                        {" "}
                        Adventure
                      </motion.li>

                      <motion.li
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        className="block py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                      >
                        Sci-fi
                      </motion.li>

                      <motion.li
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        className="block py-2 pl-3 pr-4   rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                      >
                        Comedy
                      </motion.li>
                    </ul>
                  </div>)
                }
                <motion.li
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 17 }}
                >
                  <Link
                    to="/services"
                    className="font-cinzel block py-2 pl-3 pr-4 text-white rounded  md:hover:bg-transparent md:hover:text-grey-700 md:p-0"
                  >
                    Services
                  </Link>
                </motion.li>
              </ul>
            </div>)}
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
