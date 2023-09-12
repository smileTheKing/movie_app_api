import React from 'react'

const Movie = (props) => {
    //artwork title description year
  return (
    <div className=' bg-slate-200 w-[200px] h-[250px]'>
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