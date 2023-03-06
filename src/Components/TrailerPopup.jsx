import axios from 'axios'
import React, { useEffect, useState } from 'react';
import {api_key} from '../Request';
import {AiOutlineCloseCircle} from 'react-icons/ai';

function TrailerPopup({id,setPopup}) {
    const [videoId,setVideoId] = useState()

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`)
        .then((res)=>{
            console.log(res.data.results)
            setVideoId(res.data.results[0].key)
        })
    })
  return (
 
      <div className='top-[10%] w-[90%] h-[70%] pt-5 pb-10 px-5 bg-black absolute flex-column'>
        <div className="w-full flex items-center justify-end py-2">
          <AiOutlineCloseCircle size={20} className="cursor-pointer" onClick={()=>{setPopup(false)}}/>
        </div>
        <iframe title='trailer'
        src={`https://youtube.com/embed/${videoId}`}
        width={`100%`} height={`80%`} 
        allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen>
        </iframe>
    </div>

    
  )
}

export default TrailerPopup