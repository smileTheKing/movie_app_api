import React, { useEffect,useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import getApi from '../utils/API';
import { Calendar, ChevronLeft, Clock, MonitorPlay, Play, Star, VideoOff } from 'lucide-react';

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});

  const getMovieById = async () => {
    try {
      const result = await getApi.get("", { params: { i: id } });
      console.log(result);
      if(result.data){
        setMovieDetail(result.data)
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  const back = useNavigate();



  useEffect(()=>{
      getMovieById()
  },[id])



  return (
   <div className=' bg-slate-800  text-slate-200 flex flex-1 flex-col'>
      <div className=' container flex  flex-col-reverse md:flex-row flex-1 mx-auto p-12 md:items-center items-start  space-x-14'>     
        {/** first part*/}
        <button onClick={()=>back('/')}><ChevronLeft to={'/'} /> Back</button>
        <div className=' flex flex-col  w-2/4 items-end text-right justify-start gap-8'>
        <div className=' flex'>
          <Star size={24} color='yellow' fill='yellow'/>
          <Star size={24} color='yellow' fill='yellow'/>
          <Star size={24}color='yellow' fill='yellow'/>
          <Star size={24} color='yellow'/>
          <Star size={24} color='yellow'/>
          </div>
        
          <div className=' flex flex-col items-end '>
          <h1 className=' font-bold text-2xl'>GENRE</h1>
          <div className=' text-slate-400 '>
          <h1 className=' font-bold text-1xl'> {movieDetail?.Genre?.split(',')[0]}</h1>
          <h1 className=' font-bold text-1xl'> {movieDetail?.Genre?.split(',')[1]}</h1>
          <h1 className=' font-bold text-1xl'> {movieDetail?.Genre?.split(',')[2]}</h1>
          </div>
         
          </div>


          <div className=' flex flex-col items-end'>
          <h1 className=' font-bold text-2xl'>DIRECTOR</h1>
          <h1 className=' font-bold text-slate-400 text-1xl break-words'>{movieDetail?.Director}</h1>
          </div>
        
          <div className=' flex flex-col items-end'>
          <h1 className=' font-bold text-2xl'>WRITER</h1>
          <div className=' text-slate-400'>
          <h1 className=' font-bold text-1xl '>{movieDetail?.Writer?.split(',')[0]}</h1>
          <h1 className=' font-bold text-1xl '>{movieDetail?.Writer?.split(',')[1]}</h1>
          <h1 className=' font-bold text-1xl'>{movieDetail?.Writer?.split(',')[2]}</h1>
          </div>
        
          </div>
       
        </div>

        {/** second part */}
        <div className=' flex flex-col  w-full items-start justify-start gap-8'>
        <h1 className=' font-bold text-3xl'> {movieDetail?.Title}</h1>
       
          <h1 className=' font-bold text-1xl flex gap-2'> <span className=' inline-block'><Clock/> </span> {movieDetail?.Runtime}</h1>
          <h1 className=' font-bold flex gap-2'>  <span className=' inline-block'><Calendar size={20}/> </span> {movieDetail.Year} </h1>

          
          <div className='flex'>
          <h1 className=' font-bold '> {movieDetail.Plot}</h1>
          </div>
         <div className=' flex  space-x-4'>
          <div className='flex flex-col justify-center items-center '> 
          <div className='bg-slate-200 p-3 rounded-lg'>
          <MonitorPlay size={24} className=' ' color='gray'/>
          </div>
          <h4>Trailer</h4>
          </div>
          <div className='flex flex-col justify-center items-center '> 
          <div className='bg-slate-200 p-3 rounded-lg'>
          <Play size={24} className=' ' color='gray' fill='gray'/>
          </div>
          <h4>Play</h4>
          </div>         
         </div>
        </div>

         {/** third part */}
        <div className='flex bg-green-400 w-2/4  h-[410px] rounded-lg   drop-shadow-2xl '>
        <img src={movieDetail.Poster} alt='img' className=' rounded-lg object-cover  bg-slate-200 w-full h-full'/>
        </div>
        
        
      </div>
   </div>
  )
}

export default MovieDetail;