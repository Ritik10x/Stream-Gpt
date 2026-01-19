import useNowPlayingMovies from "../hooks/useNowPLayingMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import Header from "./Header"
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import GptSearch from "./GptSearch"
import { useSelector } from "react-redux"


const Browse = () => {
    const showGptSearch = useSelector(store=>store.gpt.showGptSearch)

    // here is my new custom Hook
useNowPlayingMovies()
usePopularMovies()
useUpcomingMovies()
useTopRatedMovies()
return (
<div>
    <Header/>
    {showGptSearch? (<GptSearch/>) :
       <>
      ( <MainContainer/>
    <SecondaryContainer/>
      )</>
    }
    
    

</div>
)
}

export default Browse
