import React from 'react'

function Movie({item}) {
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-4'>
        <img className='w-full h-auto block' src={`http://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
            <p className='white-space-normal text-[0.65rem] md:text-xs font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
        </div>
    </div>
  )
}

export default Movie