import React from "react";

import Movie from '../Movie/index'; 


const MovieList = (movies) => {   
return (
    <div>
        {
          movies.movies.map(movie=>{return <Movie className="movie" movie={movie} key={movie.id}/>})
        }
    </div> 
    )
};


export default MovieList; 