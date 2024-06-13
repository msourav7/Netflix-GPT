import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[16%] px-2 md:px-20 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-sm md:text-6xl mt-9 md:mt-0 font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6  text-lg w-1/4'>{overview}</p> 
        <div className='my-2 md:m-0'>
            <button className=' text-black py-0 px-1  text-base  md:p-4 md:px-12 md:text-xl bg-white rounded-lg hover:bg-opacity-75'> ▶ Play</button>
            <button className='hidden md:inline-block bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2 hover:bg-opacity-75'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle 