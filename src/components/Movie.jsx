import React from "react";
import { Heart } from "lucide-react";
import { useAppContext } from "../utils/AppContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ImageAvailable } from "../assets";


const Movie = ({ movie }) => {
  
  //artwork title description year
  return (
    <motion.div 
    whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 450, damping: 20 }}
    
    className="md:max-h-[25rem] md:h-[25rem] md:w-[300px] md:max-w-[300px]  w-[220px] h-[300px]">
      <Link to={`/detail/${movie.imdbID}`}>
        <img
          className="w-full h-full rounded-lg"
          src={movie?.Poster === 'N/A'  ?ImageAvailable:movie?.Poster}
          alt="product image"
        />
      </Link>
    </motion.div>
  );
};

export default Movie;

{
  /**
   * 
   * <div classNameName=' bg-slate-200 w-screen md:w-[250px] max-h-[500px]  h-[500px] shadow-lg rounded-lg'>
        <div classNameName='p-4 md:p-0 overflow-hidden '>
          <div classNameName=' h-96 max-h-min overflow-hidden'>
          <img src={movie?.Poster} classNameName='rounded-t-lg object-cover h-full  w-full'/>
          </div>
           
          <div classNameName=' p-2 space-y-2 max-h-min'>
          <h2 classNameName='font-bold text-base  w-full line-clamp-1'>Title: {movie?.Title}</h2>
          <hr/>
            <div classNameName=' flex items-center justify-between '>
            <div>
            <h2 classNameName='font-semibold text-slate-600 '>Type: {movie?.Type}</h2>
            <h2 classNameName='font-semibold text-slate-600'> Year: {movie?.Year}</h2>
            </div>
            <Heart color={favorite?'red':'#000'} size={18} fill={favorite?'red':'#000'} onClick={()=>setFavorite((x)=>!x)} />
            </div>
            
          </div>
    </motion.div>
    </div>
   */
}
