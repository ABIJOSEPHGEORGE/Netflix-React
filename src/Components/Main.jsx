import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {request} from '../Request'
import TrailerPopup from './TrailerPopup'

function Main() {
    const [movies,setMovie] = useState([])
    const [popup,setPopup] = useState(false)

    

    useEffect(()=>{
        axios.get(request.requestPopular).then((res)=>{
          const data = res.data.results;
          setMovie(data[Math.floor(Math.random()*data.length)]);
        })},[])

    
    const triggerPopup=()=>{
      setPopup(true);
    }
   
  return (
    <div className='w-full h-[550px] text-white'>
        <div className="w-full h-full">
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`http://image.tmdb.org/t/p/original/${movies?.backdrop_path}`} alt={movies?.title} />
        </div>
        <div className='absolute top-[20%] w-full p-4 md:p-8 flex-column text-start'>
          <h1 className="text-white text-start font-bold md-text-5xl text-3xl">{movies?.title}</h1>
          <div className='text-start my-4' >
            <button className='py-2 px-3 bg-gray-300 text-black border border-gray-300' onClick={()=>triggerPopup()}>Play</button>
            <button className='py-2 px-3 text-white border border-gray-300 ml-5'>Watch later</button>
          </div>
          <p className='text-gray-50 text-sm'>Released : {movies?.release_date}</p>
          <p className='text-gray-200 my-2 md-max-w-[70%] lg-max-w-[50%] xl-max-w-[35%]'>{movies?.overview}</p>
        </div>
        <div className="flex justify-center">
          {
            popup ? <TrailerPopup id={movies?.id} setPopup={setPopup}/> : null
          }
        </div>
        
    </div>
    
  )
}

export default Main