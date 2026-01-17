import { useDispatch } from "react-redux"
import { API_options } from "../Utils/API"
import { addNowPlayingMovies } from "../Redux/movieSlice"
import { useEffect } from "react"



const useNowPlayingMovies = ()=>{
        //fetch data from TMDB here and Update Store



    // using REdux Here
const dispatch = useDispatch()




const getNowPlayingMovies =async ()=>{
const data = await fetch('https://api.themoviedb.org/3/movie/now_playing',API_options)
const json = await data.json()
console.log(json.results)
// here i am Dispatching an Action// puhsing 20 movies from json to my store
dispatch(addNowPlayingMovies(json.results))

}

useEffect(()=>{
getNowPlayingMovies()

},[])
}
export default useNowPlayingMovies