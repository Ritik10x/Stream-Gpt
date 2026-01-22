import { useDispatch } from "react-redux"
import { API_options } from "../Utils/API"
import { addUpcomingMovies } from "../Redux/movieSlice"
import { useEffect } from "react"



const useUpcomingMovies = ()=>{
        //fetch data from TMDB here and Update Store



    // using REdux Here
const dispatch = useDispatch()




const getUpcomingMovies =async ()=>{
const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_options)
const json = await data.json()

// here i am Dispatching an Action// puhsing 20 movies from json to my store
dispatch(addUpcomingMovies(json.results))

}

useEffect(()=>{
getUpcomingMovies()

},[])
}
export default useUpcomingMovies