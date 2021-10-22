import React from "react";
import './style.css';


export const Role = (props) => {   
    return (
        <div  className="cast">
          <div>
            <p className="actorName">{props.actor} </p>
            <p className="role"> as {props.role}</p>
          </div>
        </div>
    )
};

export default Role; 