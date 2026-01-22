import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,// we kept first as empty  so the movies comes from Api will be store here
        PopularMovies:null,
        trailerVideo:null,
    },                          

    reducers: {
        // hee we are going to export some action
        addNowPlayingMovies: (state, action) => {
            // inside this reducer function i will update my store

            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            

            state.PopularMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            

            state.UpcomingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            

            state.TopRatedMovies = action.payload;
        },


        addTrailerVideo: (state,action) =>{
            state.trailerVideo= action.payload
        }
    }
})

// down here i am exporting and action from movieSlice varabile and that action is in reducer
// which is addNowPlayingMovies

export  const {addNowPlayingMovies, addTrailerVideo, addPopularMovies,addUpcomingMovies,addTopRatedMovies} = movieSlice.actions;
export default movieSlice.reducer