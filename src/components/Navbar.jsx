import React, { useEffect } from "react";
import './styles.css';

function Navbar(){
    return(
        <nav className="nav">
            <div className="left">
            <a className = "site-title" href = "/">MyNationalParks</a>
            </div>
            <div className="right">
            <ul>    
                <li>
                    <a className= "links" href = "/profile">Journal</a>
                </li>
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;