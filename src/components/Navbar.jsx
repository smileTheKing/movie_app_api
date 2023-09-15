import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useAppContext } from "../utils/AppContext";

const Navbar = () => {
  const { getMovieByTitle, search, setSeacrh } = useAppContext();

  const handleSearch = () => {
    if (search) {
      return getMovieByTitle(search);
    }
    return;
  };

  return (
    <>
      <nav className="w-full max-h-[80px] h-[80px]  flex text-white justify-center bg-slate-900">
        <ul className="container w-full  flex justify-between items-center">
          <div>
            <Link to="/">Logo</Link>
          </div>

          <div
            onKeyUpCapture={handleSearch}
            className="overflow-hidden flex border-2  items-center justify-center border-slate-100/25 text-center  w-[450px] rounded-md text-slate-300"
            placeholder="search"
          >
            <input
              value={search}
              onChange={(e) => setSeacrh(e.target.value)}
              className="flex-1 p-2 outline-none bg-inherit text-center"
            />
            <button
              className="flex-2 px-4 text-slate-400 hover:text-red-300"
              onClick={() => setSeacrh("")}
            >
              clear
            </button>
          </div>

          <div className=" flex space-x-4 justify-center items-center">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/favorite">Collection</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </div>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
