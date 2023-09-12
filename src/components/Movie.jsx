import React from 'react'

const Movie = ({movie}) => {
    //artwork title description year

    //console.log(movie)
  return (
    <div className=' bg-slate-100 w-[250px] max-h-[400px] h-[400px] shadow-lg rounded-lg'>
        <div className=''>
            <img src={movie?.Poster} className='rounded-t-lg object-cover overflow-hidden w-full h-[250px]'/>
          <div className=' p-2 space-y-2'>
          <h2 className='font-bold text-base'>Title: {movie?.Title}</h2>

          <hr/>
            <h2 className='font-semibold text-slate-600'>Type: {movie?.Type}</h2>
            <h2 className='font-semibold text-slate-600'> Year: {movie?.Year}</h2>
          </div>
          
        </div>
    </div>
  )
}

export default Movie;