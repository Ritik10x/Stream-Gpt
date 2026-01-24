import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../Utils/API'

const GptSearch = () => {
  return (
    <>
    <div className=' fixed -z-10'>
        <img className='h-screen object-cover lg:w-full lg:h-full'
        src={BG_URL} alt="netflix-bg" />
      </div>
    <div className=''>
        
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
    </>
  )
}

export default GptSearch
