import useNowPlayingMovies from "../hooks/useNowPLayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"



const Browse = () => {

    // here is my new custom Hook
useNowPlayingMovies()

return (
<div>
    <MainContainer/>
    <SecondaryContainer/>

</div>
)
}

export default Browse
