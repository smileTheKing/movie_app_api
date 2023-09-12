import React from 'react'

const Movie = (props) => {
    //artwork title description year
  return (
    <div className=' bg-slate-100 w-[200px] h-[300px] shadow-lg rounded-lg'>
        <div>
            <img src={props?.img}/>
            <h2>{props?.title}</h2>
            <h2>{props?.description}</h2>
            <h2>{props?.year}</h2>
        </div>
    </div>
  )
}

export default Movie;