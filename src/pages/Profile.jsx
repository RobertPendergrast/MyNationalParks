import React, { useState, useEffect } from "react";
import Park from "../components/park.jsx";
import parks from "../parks.js";
import axios from 'axios';

let parkList = parks;

function Profile(){

    const [parks, setParks] = useState();

    const [parkName, setParkName] = useState('Acadia');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:5001/profile').then((res)=>{
            setParks(res.data);
        }).catch((err) =>{
            console.log(err);
        });
    });

    function deletePark(id){
        axios.delete(`http://localhost:5001/profile/${id}`).then((res) =>{
            console.log(res.data);
            setParks(parks.filter((park) => park._id !== id));
        });
    }

    function addPark(e){
        e.preventDefault();
        axios.post('http://localhost:5001/profile',{parkName, startDate, endDate, description}).then(res =>{
            console.log(res.data);
            setParks([...parks,res.data]);
        }).catch(err => console.log(err))
    }

    function formatDate(date){
        let thisdate = new Date(date);
        return(thisdate.toDateString());
    }

    return(
        <div className="profile">
            <div className="Journal">

                <form className="form" onSubmit = {addPark}> 
                    <h1>Describe your trip</h1>

                    <label>Park Name</label>
                        <select className = "input" id="Parks" name="parkName" value = {parkName} onChange = {(e)=> setParkName(e.target.value)}> 
                            {
                                parkList.map(park=><option>{park.name}</option>)
                            }
                        </select>


                    <label>From</label>
                    <input className = "input" type = "date" placeholder="Start Date" name = "startDate " value = {startDate} onChange = {(e)=> setStartDate(e.target.value)}></input>
                    <label>To</label>
                    <input className = "input" type = "date" placeholder="End Date" name = "endDate" value = {endDate} onChange = {(e)=> setEndDate(e.target.value)}></input>
                    <textarea className = "input" placeholder = "Describe your trip" name = "description" value = {description} onChange = {(e)=> setDescription(e.target.value)}></textarea>


                    <button className = "input" type = "submit">Log Entry</button>
                </form>
            </div>

            <div className="places">
                <h1>Your Trips</h1>
                
                <div className="parksList">
                    {
                        parks &&
                            parks.map((park) =>(
                                <Park
                                    key = {park._id}
                                    parkName = {park.parkName}
                                    startDate = {formatDate(park.startDate)}
                                    endDate = {formatDate(park.endDate)}
                                    description = {park.description}
                                    delete = {()=>deletePark(park._id)}
                                />
                            ))
                    }
                </div>
            </div>
        </div>
    );
}
//{beenList.map(renderParks)}
export default Profile;