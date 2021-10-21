import React from "react";
import camera from '../Header/img/camera.svg';

const Header =()=>{

    return(
        <h1>
            <img class="logo" src={camera} alt="Logo" />
            V našem kině právě uvádíme
        </h1>
    );
}


export default Header; 
