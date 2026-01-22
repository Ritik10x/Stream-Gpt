import { useDispatch, useSelector } from "react-redux"
import { addTrailerVideo } from "../Redux/movieSlice"
import { useEffect } from "react"
import {API_options} from "../Utils/API"

const useMovieTrailer = (movieId)=>{

 const dispatch = useDispatch()

  const trailerVideo = useSelector(store => store.movies.trailerVideo)



  // const [trailerId, setTrailerId] = useState(null);// ist way using state variable 2nd is with redux store


  // fetch trailer video and updatinf the store and trailer video data

  const getMovieVideos = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" +
     movieId   +"/videos?language=en-US",API_options

    )
    const json = await data.json()
   

    const filterData = json.results.filter(video => video.type === "Trailer")
    // its saying if filterData has a length then chosse FilterData[0] else json.result[0]
    // suppose idf we dont have the trailer then choose anyone from the 0th index
    const trailer = filterData.length ? filterData[0] : json.results[0]
    
    // setTrailerId(trailer.key)

    dispatch(addTrailerVideo(trailer))
  }

  useEffect(() => {

    !trailerVideo && getMovieVideos()
    
  }, [])



}
export default useMovieTrailer