import useNowPlayingMovies from "../hooks/useNowPLayingMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import Header from "./Header"


const Browse = () => {

    // here is my new custom Hook
useNowPlayingMovies()
usePopularMovies()

return (
<div>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>

</div>
)
}

export default Browse
