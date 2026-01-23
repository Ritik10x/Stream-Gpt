import React from 'react'
import logo from '../assets/Images/StreamGpt2.png'
import { toggleGptSearchView } from '../Redux/GptSlice'
import { useDispatch, useSelector } from 'react-redux'
import { SUPPORTED_LANGUAGES } from '../Utils/API'
import { changeLanguage } from '../Redux/configSlice'

const Header = () => {
  const dispatch = useDispatch()
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const handleGptSearch = () => {
    // toggle Gpt Search
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className=' flex    w-full fixed px-8 py-2 bg-black bg-linear-to-b-r from-black z-30 flex-col md:flex-row md:justify-between '>
      <img
        className=' w-48 ml-20 md:ml-0  '
        src={logo} alt="logo" />

      <div className='flex justify-between'>
        {showGptSearch && (<select className='bg-white rounded-md p-1 m-1 md:mx-5' onChange={handleLanguageChange} >
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select >)}
        <button className=' p-2  bg-blue-600  rounded-md text-white'
          onClick={handleGptSearch}
        >
          {showGptSearch ? "HomePage" :
            "GPTSearch"}</button>
      </div>
    </div>
  )
}

export default Header

//  src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix-logo" />
