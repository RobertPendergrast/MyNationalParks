import React, { useEffect } from "react";
import './styles.css';

function Home(){
    return(
        <div className="container">
            <div className="page">
                <div className="text">
                        <h1>DOCUMENT</h1>
                        <h1>YOUR</h1>
                        <h1 className="accent-color">ADVENTURE</h1>
                </div>
            </div>
            <div className="description">
                <h2>Your own customizable travel journal, made specifically for national parks lovers</h2>
            </div>
        </div>

    );
}

export default Home;