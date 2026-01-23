import React from 'react'
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
const VideoTitle = ({ title, overview }) => {



  return (
    <div className=' w-screen aspect-video px-6 pt-15 md:pt-36 md:px-36 absolute text-white bg-linear-to-r from-black z-20'>
      <h1 className='text-2xl md:text-6xl font-bold '>{title}</h1>
      <p className=' hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div className=' flex my-4 md:m-0'>
        <button className='flex items-center gap-3 bg-white  text-black text-lg md:text-xl py-1 md:py-4 md:px-8 px-3 rounded-lg hover:bg-white/80'><FaPlay />Play</button>
        <button className='hidden  md:flex md:items-center gap-3 mx-2 bg-gray-500/50  text-white text-xl py-4 md:px-4 rounded-lg '><CiCircleInfo size={32} />More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
