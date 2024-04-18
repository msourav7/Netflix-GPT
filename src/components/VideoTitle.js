import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[16%] px-20 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p> 
        <div>
            <button className=' text-black p-4 px-12 text-xl bg-white rounded-lg hover:bg-opacity-75'> ▶ Play</button>
            <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2 hover:bg-opacity-75'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle 