import { useDispatch, useSelector } from "react-redux"
import { API_options } from "../Utils/API"
import { addNowPlayingMovies } from "../Redux/movieSlice"
import { useEffect } from "react"



const useNowPlayingMovies = ()=>{
        //fetch data from TMDB here and Update Store



    // using REdux Here
const dispatch = useDispatch()

const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies)





const getNowPlayingMovies =async ()=>{
const data = await fetch('https://api.themoviedb.org/3/movie/now_playing',API_options)
const json = await data.json()

// here i am Dispatching an Action// puhsing 20 movies from json to my store
dispatch(addNowPlayingMovies(json.results))

}

useEffect(()=>{
    // in industry they also write code like this of if-else
// it means if nowPlaying doesnot have the data from redux store only then it will call an api
    
    !nowPlayingMovies && getNowPlayingMovies()


},[])
}
export default useNowPlayingMovies