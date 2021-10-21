import React from "react";
//import './style.css';


export const Role = (props) => {   
    return (
        <div className="role">
            <h4>{props.actor} </h4>
            <p> as {props.role}</p>
        </div>
    )
};

export default Role; 