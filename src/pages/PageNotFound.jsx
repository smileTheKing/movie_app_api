import {Player } from "@lottiefiles/react-lottie-player";
import PageNotFound4 from '../assets/404.json'

import React from "react";

const PageNotFound = () => {
  return (
    <div className=" flex flex-1 justify-center items-center">
      <Player
        autoplay
        loop
        src={PageNotFound4}
        style={{ height: "300px", width: "300px" }}
      >
       
      </Player>
    </div>
  );
};

export default PageNotFound;
