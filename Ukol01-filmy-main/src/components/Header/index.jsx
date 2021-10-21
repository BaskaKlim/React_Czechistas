import React from "react";
import './style.css';

import camera from '../Header/img/camera.svg';

const Header =()=>{

    return(
        <div className="header">
            <h1>
                <img class="logo" src={camera} alt="Logo" />
                V našem kině právě uvádíme
            </h1>
        </div>
    );
}


export default Header; 
