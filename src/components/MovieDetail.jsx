import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getApi from "../utils/API";
import {
  Calendar,
  ChevronLeft,
  Clock,
  MonitorPlay,
  Play,
  Star,
} from "lucide-react";
import { Player } from "@lottiefiles/react-lottie-player";
import Loading from "../assets/loading.json";
import { motion } from "framer-motion";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const back = useNavigate();

  // a function for fetching the movie details
  const getMovieById = async () => {
    try {
      const result = await getApi.get("", { params: { i: id } });
      if (result.data) {
        setLoading(false);
        setMovieDetail(result.data);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  //fetch the movie details when page is loaded
  useEffect(() => {
    getMovieById();
  }, [id]);

  return (
    <div className="bg-slate-800 mt-16 text-slate-200 flex flex-1 flex-col justify-center items-center overflow-hidden min-h-screen p-8">
      {loading ? (
        <Player autoplay loop src={Loading} className=" w-96 h-96" />
      ) : (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
           className="flex flex-col">

<div className=" self-start">
            <button className=" flex p-2  font-bold" onClick={() => back("/")}>
              <ChevronLeft to={"/"} className=" inline-block" /> Back
            </button>
      </div>

          <div className=" flex flex-col md:flex-row  justify-between ">
            {/** first part*/}
            <div className="flex flex-col  items-start md:items-end justify-between  space-y-4 p-4  w-full order-3 md:order-1">
              <div className=" flex">
                <Star size={24} color="yellow" fill="yellow" />
                <Star size={24} color="yellow" fill="yellow" />
                <Star size={24} color="yellow" fill="yellow" />
                <Star size={24} color="yellow" />
                <Star size={24} color="yellow" />
              </div>

              <div className=" flex flex-col  md:items-end">
                <h1 className=" font-bold text-2xl">GENRE</h1>
                <div className=" text-slate-400 ">
                  <h1 className=" font-bold text-1xl">
                    {movieDetail?.Genre?.split(",")[0]}
                  </h1>
                  <h1 className=" font-bold text-1xl">
                    {movieDetail?.Genre?.split(",")[1]}
                  </h1>
                  <h1 className=" font-bold text-1xl">
                    {movieDetail?.Genre?.split(",")[2]}
                  </h1>
                </div>
              </div>

              <div className=" flex flex-col md:items-end">
                <h1 className=" font-bold text-2xl">DIRECTOR</h1>
                <h1 className=" font-bold text-slate-400 text-1xl break-words">
                  {movieDetail?.Director}
                </h1>
              </div>

              <div className=" flex flex-col md:items-end">
                <h1 className=" font-bold text-2xl">WRITER</h1>
                <div className=" text-slate-400">
                  <h1 className=" font-bold text-1xl ">
                    {movieDetail?.Writer?.split(",")[0]}
                  </h1>
                  <h1 className=" font-bold text-1xl ">
                    {movieDetail?.Writer?.split(",")[1]}
                  </h1>
                  <h1 className=" font-bold text-1xl">
                    {movieDetail?.Writer?.split(",")[2]}
                  </h1>
                </div>
              </div>
            </div>

            {/** second part */}
            <div
             className="flex flex-col  items-start justify-between space-y-4  w-full order-2 md:order-2 p-4" 
            //className=" flex flex-col    items-start justify-between max-h-[25.6rem] h-[25.6rem]  w-[32rem]"
            >
              <h1 className=" font-bold text-3xl"> {movieDetail?.Title}</h1>

              <h1 className=" font-bold text-1xl flex gap-2">
                <span className=" inline-block">
                  <Clock />
                </span>
                {movieDetail?.Runtime}
              </h1>
              <h1 className=" font-bold flex gap-2">
                <span className=" inline-block">
                  <Calendar size={20} />
                </span>
                {movieDetail.Year}
              </h1>

              <div className="flex">
                <h1 className=" font-bold "> {movieDetail.Plot}</h1>
              </div>
              <div className=" flex  space-x-4">
                <div className="flex flex-col justify-center items-center ">
                  <div className="bg-slate-200 p-3 rounded-lg">
                    <MonitorPlay size={24} className=" " color="gray" />
                  </div>
                  <h4>Trailer</h4>
                </div>
                <div className="flex flex-col justify-center items-center ">
                  <div className="bg-slate-200 p-3 rounded-lg">
                    <Play size={24} className=" " color="gray" fill="gray" />
                  </div>
                  <h4>Play</h4>
                </div>
              </div>
            </div>

            {/** third part */}
            <div
             className="flex  min-w-[24rem] h-[30rem] order-1 md:order-3 p-4" 
            >
              <img
                src={movieDetail.Poster}
                alt="img"
                className=" rounded-lg  object-cover bg-slate-200 justify-center w-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MovieDetail;

/**
 * 
 * import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getApi from "../utils/API";
import {
  Calendar,
  ChevronLeft,
  Clock,
  MonitorPlay,
  Play,
  Star,
} from "lucide-react";
import { Player } from "@lottiefiles/react-lottie-player";
import Loading from "../assets/loading.json";
import { motion } from "framer-motion";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const back = useNavigate();

  const getMovieById = async () => {
    try {
      const result = await getApi.get("", { params: { i: id } });
      if (result.data) {
        setLoading(false);
        setMovieDetail(result.data);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getMovieById();
  }, [id]);

  return (
    <div className="bg-slate-800 mt-16 text-slate-200 flex flex-col justify-center items-center overflow-hidden min-h-screen p-4">
      {loading ? (
        <Player autoplay loop src={Loading} className="w-48 h-48" />
      ) : (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col mx-auto md:p-8 p-4 space-y-4"
        >
          <button onClick={() => back("/")}>
            <ChevronLeft to={"/"} /> Back
          </button>

          <div className="flex flex-col justify-center items-center md:flex-row flex-col-reverse md:items-start space-y-4 md:space-x-8">
        {\/\ Content //}
            <div className="flex flex-col w-full max-h-[25rem] md:w-1/2 items-center md:items-end text-center md:text-right space-y-4">
              {/* Movie details /}
              <div className="flex">
                <Star size={24} color="yellow" fill="yellow" />
                <Star size={24} color="yellow" fill="yellow" />
                <Star size={24} color="yellow" fill="yellow" />
                <Star size={24} color="yellow" />
                <Star size={24} color="yellow" />
              </div>

              <div className="flex flex-col items-center md:items-end">
                <h1 className="font-bold text-2xl">GENRE</h1>
                <div className="text-slate-400">
                  {movieDetail?.Genre?.split(",").map((genre, index) => (
                    <h1 key={index} className="font-bold text-1xl">
                      {genre.trim()}
                    </h1>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end">
                <h1 className="font-bold text-2xl">DIRECTOR</h1>
                <h1 className="font-bold text-slate-400 text-1xl break-words">
                  {movieDetail?.Director}
                </h1>
              </div>

              <div className="flex flex-col items-center md:items-end">
                <h1 className="font-bold text-2xl">WRITER</h1>
                <div className="text-slate-400">
                  {movieDetail?.Writer?.split(",").map((writer, index) => (
                    <h1 key={index} className="font-bold text-1xl">
                      {writer.trim()}
                    </h1>
                  ))}
                </div>
              </div>
            </div>

            {/* Movie title and details /}
            <div className="flex flex-col w-full md:w-1/2 items-center justify-center space-y-4">
              <h1 className="font-bold text-3xl">{movieDetail?.Title}</h1>

              <h1 className="font-bold text-1xl flex items-center gap-2">
                <span className="inline-block">
                  <Clock />
                </span>
                {movieDetail?.Runtime}
              </h1>
              <h1 className="font-bold flex items-center gap-2">
                <span className="inline-block">
                  <Calendar size={20} />
                </span>
                {movieDetail.Year}
              </h1>

              <div className="flex">
                <h1 className="font-bold">{movieDetail.Plot}</h1>
              </div>
              <div className="flex space-x-4">
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-slate-200 p-3 rounded-lg">
                    <MonitorPlay size={24} className="" color="gray" />
                  </div>
                  <h4>Trailer</h4>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-slate-200 p-3 rounded-lg">
                    <Play size={24} className="" color="gray" fill="gray" />
                  </div>
                  <h4>Play</h4>
                </div>
              </div>
            </div>

            {/* Movie poster /}
            <div className="flex bg-green-400 w-full md:w-2/4 -mt-8 justify-start max-h-[24rem] rounded-lg drop-shadow-2xl">
              <img
                src={movieDetail.Poster}
                alt="img"
                className="rounded-lg object-cover bg-slate-200 w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MovieDetail;

 */
