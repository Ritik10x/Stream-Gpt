import React, { useRef } from 'react'
import lang from '../Utils/LanguageConstants'
import { useDispatch, useSelector } from 'react-redux'
import {Gemini_Ai_Model} from './Gemini_AI_fun'
import { API_options } from '../Utils/API'
import { addGptMovieResult } from '../Redux/GptSlice'

const GptSearchBar = () => {

  const dispatch = useDispatch()

  const langKey = useSelector(store => store.config.lang)

  const searchText = useRef(null)

  //search movie api from tmdb

  const searchMovieTMDB = async (movie) => {

    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_options) 

    const json = await data.json()
    
    return json.results

  }

  const handleGptSearchClick = async () =>{
    console.log(searchText.current.value) 
    // make an APi call to GPT API and get movie Result

    
     const GQuery = 'Act as a Movie Recommendation System and suggest some movies for the query ' + searchText.current.value  + "only give me names of 5 movies, comma seprated like the example result given ahead. Example Result: Gadar, Sholay, Don , Golmal , koi mil gaya";

const gemini_Ai_results = await Gemini_Ai_Model.generateContent(GQuery);

// if(!gemini_Ai_results.response)//{error handling if the resposne is not there}

console.log(gemini_Ai_results.response?.candidates[0]?.content?.parts[0]?.text)

const Gemini_Ai_Movie = gemini_Ai_results.response?.candidates[0]?.content?.parts[0]?.text.split(",")//.split will give us arrays of movie

console.log(Gemini_Ai_Movie)

// for each movie i will search a tmdb api

    const promiseArray =  Gemini_Ai_Movie.map((movie) => searchMovieTMDB(movie))
// [ beacuse we are using map above ,Promise array will give array of promise not a result because of async operations so for that will be using Promise.all]
    const tmdbResults = await Promise.all(promiseArray);// tmdbResults will give us resolved promises
    
    console.log(tmdbResults)
    dispatch(addGptMovieResult({movieNames: Gemini_Ai_Movie,movieResults:tmdbResults}))
  }

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-9'
      onSubmit={(e)=>e.preventDefault()}>
        <input
        ref={searchText}
        type="text" className='p-4 m-4 col-span-6 bg-white' placeholder={lang[langKey].gptSearchPlaceHolder} />
        <button className='m-4 py-2 px-4 col-span-3 bg-red-700 text-white rounded-lg  '
        onClick={handleGptSearchClick}
        >{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
