import React from "react";
import './style.css';


import Role from '../Role/index';   

const Movie = (props) => {   
return (
    <div className="movie">
        <h3> {props.movie.title} </h3>
        <p>{props.movie.rating}</p>
        <img src={'../assets/'+ props.movie.poster} />
        <p>Rok vydani: {props.movie.year}</p>
        <p>Zaner:  {props.movie.genre}</p>
        <p>Rezie: {props.movie.director} </p>

        <div className="role"> 
            {
            props.movie.cast.map(role =>{ return<Role actor={role.name} role={role.as} key={role.name}/>})
            }
        </div>
    </div>

 
    )
};


export default Movie; 