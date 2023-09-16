import React from 'react'
import { motion } from "framer-motion";
import { useAppContext } from '../utils/AppContext';

const Movie = ({movie}) => {
    //artwork title description year
   const {favorite,setFavorite} = useAppContext()
  return (
    <div className=' bg-slate-200 w-screen md:w-[250px] max-h-[500px]  h-[500px] shadow-lg rounded-lg'>
        <motion.div className= "box" className='p-4 md:p-0 overflow-hidden ' 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 450, damping: 20 }}>
          <div className=' h-96 max-h-min overflow-hidden'>
          <img src={movie?.Poster} className='rounded-t-lg object-cover h-full  w-full'/>
          </div>
           
          <div className=' p-2 space-y-2 max-h-min'>
          <h2 className='font-bold text-base  w-full line-clamp-1'>Title: {movie?.Title}</h2>
          <hr/>
            <h2 className='font-semibold text-slate-600 '>Type: {movie?.Type}</h2>
            <h2 className='font-semibold text-slate-600'> Year: {movie?.Year}</h2>
          </div>
    </motion.div>
    </div>
  )
}

export default Movie;