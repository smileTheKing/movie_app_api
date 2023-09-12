import React, { useState } from 'react'
//import API from '../utils/API';
import Movie from '../components/Movie';

const Home = () => {
    const [movies,setMovies] = useState([])


    const getMovie = ()=>{
         
    }
    
  return (
    <div className='container'>

            <div>
                {movies.map((movie)=>(
                    <Movie props={movie}/>
                ))}
            </div>
    </div>
  )
}

export default Home;