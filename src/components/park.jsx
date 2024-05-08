import React from "react";
import parks from "../parks.js";



function Park(props){

    let parkList = parks;

    function getImage(parkName) {
        
        let object = parkList.find(x => x.name === parkName); //from stack overflow
        if (!object) { 
            return "/images/yosemite.jpeg";
        }
       return object.background;       
    }
    

    function handleDelete(){
        props.delete(props.id);
    }

    return(
        <div className="park">
            <div className="leftSide" style={{ backgroundImage: "url(" + (getImage(props.parkName)) + ")" }}>
            </div>
            <div className="rightSide">
                <h1>{props.parkName}</h1>
                <h2>{props.startDate}   to   {props.endDate}</h2>
                <p>{props.description}</p>
                <button className="deleteButton" onClick={handleDelete}>Delete Entry</button>
            </div>
            
        </div>
    
    );
}

export default Park;