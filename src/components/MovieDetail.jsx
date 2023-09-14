import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import getApi from '../utils/API';

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});

  const getMovieById = async () => {
  
    try {
     // if (search.length < 3) return;http://www.omdbapi.com/?i=tt1016150
      const result = await getApi.get("", { params: { i: id } });
      console.log(result);
      if(result.data){
        setMovieDetail(result.data)
      }


    
     
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(()=>{
      getMovieById()
  },[id])

  return (
   <div className=' bg-slate-200  flex flex-1 '>
      <div className=' container flex mx-auto'>
        <img src={movieDetail.Poster} alt='img' className=' bg-orange-400  w-full h-full'/>
        <div className=' flex flex-col  bg-green-400  w-full h-full p-24'>
          <h1>Title: {}</h1>
          <h1>Description: {}</h1>
          <h1>Year: {}</h1>
        </div>
      </div>
   </div>
  )
}

export default MovieDetail;