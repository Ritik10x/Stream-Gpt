import React from 'react'
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
const VideoTitle = ({ title, overview }) => {



  return (
    <div className=' w-screen aspect-video  pt-[10%] px-24 absolute text-white bg-linear-to-r from-black'>
      <h1 className='text-6xl font-bold '>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className='flex'>
        <button className='flex items-center gap-3 bg-gray-500/50  text-white text-xl py-4 px-12 rounded-lg '><FaPlay />Play</button>
        <button className='flex items-center gap-3 mx-2 bg-gray-500/50  text-white text-xl py-4 px-16 rounded-lg '><CiCircleInfo size={32} />More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
