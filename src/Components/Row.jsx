import axios from 'axios';
import React, { useState,useEffect } from 'react'
import Movie from './Movie';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

function Row({title,fetchUrl}) {

    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        axios.get(fetchUrl).then((res)=>{
            setMovies(res.data.results);
        })
    },[fetchUrl])

    const slideLeft=(id)=>{
        let slider = document.getElementById(`slider${id}`);
        slider.scrollLeft = slider.scrollLeft-500;
    }

    const slideRight=(id)=>{
        let slider = document.getElementById(`slider${id}`);
        slider.scrollLeft = slider.scrollLeft+500;
    }

  return (
    <>
        <h1 className='text-white font-bold md:text-xl p-4 text-start'>{title}</h1>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={()=>slideLeft(title)} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
            <div id={`slider${title}`} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide realtive">
                {
                    movies.map((item,id)=>(
                        <Movie key={id} item={item}/>
                    ))
                }
            </div>
            <MdChevronRight onClick={()=>slideRight(title)} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
        </div>
    </>
  )
}

export default Row;