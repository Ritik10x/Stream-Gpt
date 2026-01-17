import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './movieSlice'


const appStore = configureStore({
    reducer:{
        // user: useReducer; // this is another Slice
        
        // we can make so many slices or action And store it in Store 
        // and the Store will Provide to all over app 


        movies: moviesReducer,
    }
})
export default appStore