import React from 'react'
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
const VideoTitle = ({ title, overview }) => {



  return (
    <div className=' w-screen aspect-video px-6 pt-15 lg:pt-36 lg:px-36 absolute text-white bg-linear-to-r from-black z-20 md:mt-30 lg:mt-30'>
      <h1 className='text-2xl md:ml-15 md:text-3xl lg:text-6xl font-bold '>{title}</h1>
      <p className=' hidden md:hidden lg:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div className=' flex my-4 md:ml-15 lg:m-0'>
        <button className='flex items-center gap-3 bg-white  text-black md:mt-5  text-lg lg:text-xl py-1 lg:py-4 lg:px-8 px-3 rounded-lg hover:bg-white/80'><FaPlay />Play</button>
        <button className='hidden  lg:flex lg:items-center gap-3 mx-2 bg-gray-500/50  text-white text-xl py-4 lg:px-4 rounded-lg lg:mt-4 '><CiCircleInfo size={32} />More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
