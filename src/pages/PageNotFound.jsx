import React from "react";
import {Player } from "@lottiefiles/react-lottie-player";
import { Page404 } from "../assets";

const PageNotFound = () => {
  return (
    <div className=" flex flex-1 bg-slate-800  overflow-hidden  min-h-screen justify-center items-center mt-16">
      <Player
        autoplay
        loop
        src={Page404}
        style={{ height: "300px", width: "300px" }}
      >
       
      </Player>
    </div>
  );
};

export default PageNotFound;
