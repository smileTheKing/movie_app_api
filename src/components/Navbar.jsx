import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="w-full max-h-[80px] h-[80px]  flex text-white justify-center bg-slate-900">
        <ul className="container w-full  flex justify-between items-center">
          <div>
            <Link to="/">Logo</Link>
          </div>

          <div className=" border border-slate-100/25 text-center p-2 w-[450px] rounded-md">
                <p className="text-slate-200/25">search</p>
          </div>

          <div className=" flex space-x-4 justify-center items-center">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/blogs">Collection</Link>
            </li>
            <li>
              <Link to="/contact">Login</Link>
            </li>
          </div>


        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
