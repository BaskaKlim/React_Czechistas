import React from "react";
import './style.css';

import Movie from '../Movie/index'; 


const MovieList = (movies) => {   
return (
    <div className="movieList">
        {
          movies.movies.map(movie=>{return <Movie className="movie" movie={movie} key={movie.id}/>})
        }
    </div> 
    )
};


export default MovieList; 