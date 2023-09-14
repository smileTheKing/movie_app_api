import React from 'react'
import { Heart } from 'lucide-react';
import { useAppContext } from '../utils/AppContext';
const Movie = ({movie}) => {
    //artwork title description year

   const {favorite,setFavorite} = useAppContext()
  return (
    <div className=' bg-slate-100 w-[250px] max-h-[400px] h-[400px] shadow-lg rounded-lg'>
        <div className=''>
            <img src={movie?.Poster} className='rounded-t-lg object-cover overflow-hidden w-full h-[250px]'/>
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
    </div>
  )
}

export default Movie;