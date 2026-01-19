import React from 'react'
import lang from '../Utils/LanguageConstants'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-9' 
      action="">
        <input type="text" className='p-4 m-4 col-span-6 bg-white' placeholder={lang.hindi.gptSearchPlaceHolder} />
        <button className='m-4 py-2 px-4 col-span-3 bg-red-700 text-white rounded-lg  '>{lang.hindi.search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
