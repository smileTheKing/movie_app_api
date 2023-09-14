import React from 'react'
import { Heart } from 'lucide-react';
import { useAppContext } from '../utils/AppContext';
import { motion } from "framer-motion";
const Movie = ({movie}) => {
    //artwork title description year

   const {favorite,setFavorite} = useAppContext()
  return (
    <div className=' bg-slate-100 w-[250px] max-h-[400px] h-[400px] shadow-lg rounded-lg'>
        <motion.div className='box'whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}/>
            <img src={movie?.Poster} className='rounded-t-lg object-cover overflow-hidden w-full h-450px]'/>
          <div className=' p-2 space-y-2'>
          <h2 className='font-bold text-base'>Title: {movie?.Title}</h2>

          <hr/>
            <div className=' flex items-center justify-between '>
            <div>
            <h2 className='font-semibold text-slate-600 '>Type: {movie?.Type}</h2>
            <h2 className='font-semibold text-slate-600'> Year: {movie?.Year}</h2>
            </div>
            <Heart color={favorite?'red':'#000'} size={18} fill={favorite?'red':'#000'} onClick={()=>setFavorite((x)=>!x)} />
            </div>
            
          </div>
        
        </div>
  
  )
}

export default Movie;