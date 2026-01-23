import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

    // now we have here 20 movies stored in the moive variable
    const movies = useSelector(store=>store.movies?.nowPlayingMovies)
    if(!movies) return; // because we have intial state null in our movie slice




    const mainMovie = movies[0]
    

    const {original_title,overview,id}= mainMovie;


  return (
    <div className='mt-25 md:-mt-25 ' >
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
