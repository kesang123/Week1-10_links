import React, { useState } from "react";
import axios from 'axios';

export default function Book_Form() {
  let url= "http://localhost:5000/" 
  const [state, setState] = useState({
    Team: "",
  GamesPlayed: 0,
  Win: 0,
  Draw: 0,
  Loss: 0,
  GoalsFor: 0,
  GoalsAgainst: 0,
  Points: 0,
  Year: 0,

  });

 
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  const OnSubmit=(e) =>
  {
  
   e.preventDefault();
   const teamdata={
    Team:state.Team,
            
    GamesPlayed:state.Gamesplayed,
    Win:state.Win,
    
    GoalsFor:state.GoalsFor,
    GoalsAgainst:state.GoalsAgainst,
    Points:state.Points,
    Year:state.Year
    

   }
   
   axios.post(url+"addteam", teamdata)
   .then(res => console.log(res.data));
   }
  return (
    <div style={{marginTop: 10}}>
      <h3>Add Book</h3>
      <form onSubmit={OnSubmit} method="Post">
        <div className="form-group"> 
          <label>Book Title: </label>
          <input  className="form-control"
            type="text" name="booktitle"
            value={state.booktitle}
            onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Book Authors: </label>
          <input  className="form-control"
            name="author"value={state.author}
            onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>
            Pick Book topic :{" "}
            <select className="form-control"
            name="Topic" value={state.Topic}
            onChange={handleChange}>
            <option value="Computer Science">CS</option>
            <option value="Programming" >Programming</option>
            <option value="Data Science">Data Sceince</option>
            <option value="AI">AI</option>
            <option value="Engineering">Engineering</option>
          </select>
          </label>
        </div>
        <div className="form-group">
        <label>Formate: </label>
        <div className="form-check form-check-inline">
          <input className="form-check-label"
            type="radio" name="formate" value="Hard Copy"
            checked={state.formate === "Hard Copy"}
            onChange={handleChange} />
         <label className="form-check-label"> Hard Copy </label>
         </div>
         <div className="form-check form-check-inline">
         <input className="form-check-label"
            type="radio"name="formate" value="Electronic Copy"
            checked={state.formate === "Electronic Copy"}
            onChange={handleChange}
          />
         <label className="form-check-label"> Electronic Copy</label>
        </div>
        </div>  
        <div>
        <label>
          Publication Year (between 1980 and 2025):
          <input
            type="range"name="PubYear"
            min="1980"max="2025" value={state.PubYear}
            onChange={handleChange} />
        </label>
        </div>
        
        <div className="form-group">
        <center>
            <input type="submit" value="Add this book" className="btn btn-primary" />
        </center>                   
        </div>
                
      </form>
      
    </div>
  );
 
}


