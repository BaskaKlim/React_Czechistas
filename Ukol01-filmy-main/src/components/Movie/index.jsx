import React from "react";
import './style.css';

import Role from '../Role/index';   

const Movie = (props) => {   
return (
    <div className="movie">
        <div className="moviePoster">
            <img className="poster" src={'../assets/'+ props.movie.poster} />
        </div>
        <div className="movieRating"> 
            <p>{props.movie.rating}/10</p>
        </div>
        <div className="description">
            <h2> {props.movie.title} </h2>
            <p className="year"> <b>Rok vydani: </b> {props.movie.year}</p>
            <p className="genre"><b>Zaner: </b>  {props.movie.genre}</p>
            <p className="director"><b>Rezie: </b> {props.movie.director} </p>

            <div className="role"> 
            <br/>
                <h3>V hlavnich rolich: </h3>
                {
                props.movie.cast.map(role =>{ return<Role actor={role.name} role={role.as} key={role.name}/>})
                }
            </div>
        </div>     
    </div>

 
    )
};


export default Movie; 