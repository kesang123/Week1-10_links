import React, {useEffect, useState } from "react";
import axios from 'axios';
import {useParams } from "react-router-dom";
function Team_UpDateForm(props) {
  const [state, setState] = useState({
    Team: "",
    Gamesplayed:0,
    Win: 0,
    Loss:0,
    GoalsFor:0,
    GoalsAgainst:0,
    Points:0,
    Year:0
  });

  let url= "http://localhost:2000/"
  let params = useParams();
 
  const handleChange = (e) => {
  const value = e.target.value;
  setState({
    ...state,
    [e.target.name]: value,
  });
};

// this is on compunt Did Mount Event analogy
useEffect(() => {
  axios.get('http://localhost:5000/getbook/'+params.id)
      .then(res => {
          // set the state variable from 
          //the data received from the axios api
          console.log("update fun"+res.data)
          setState(res.data)
      }) //
     
      .catch(err => {
        console.log("error has occured")
      })
}, []);
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
    
    axios.post(url+"updateteam/"+params.id, teamdata)
    .then(res => console.log(res.data));
      }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Team</h2>

      <label>
        Team Name:
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="Team Name"
          required
        />
      </label>

      <label>
        Games Played:
        <input
          type="number"
          name="GamesPlayed"
          value={formData.GamesPlayed}
          onChange={handleChange}
          placeholder="Games Played"
          required
        />
      </label>

      <label>
        Wins:
        <input
          type="number"
          name="Win"
          value={formData.Win}
          onChange={handleChange}
          placeholder="Wins"
          required
        />
      </label>

      <label>
        Draws:
        <input
          type="number"
          name="Draw"
          value={formData.Draw}
          onChange={handleChange}
          placeholder="Draws"
          required
        />
      </label>

      <label>
        Losses:
        <input
          type="number"
          name="Loss"
          value={formData.Loss}
          onChange={handleChange}
          placeholder="Losses"
          required
        />
      </label>

      <label>
        Goals For:
        <input
          type="number"
          name="GoalsFor"
          value={formData.GoalsFor}
          onChange={handleChange}
          placeholder="Goals For"
          required
        />
      </label>

      <label>
        Goals Against:
        <input
          type="number"
          name="GoalsAgainst"
          value={formData.GoalsAgainst}
          onChange={handleChange}
          placeholder="Goals Against"
          required
        />
      </label>

      <label>
        Points:
        <input
          type="number"
          name="Points"
          value={formData.Points}
          onChange={handleChange}
          
          required
        />
      </label>

      <label>
        Year:
        <input
          type="number"
          name="Year"
          value={formData.Year}
          onChange={handleChange}
          placeholder="Year"
          required
        />
      </label>

      <button type="submit">Update Team</button>
    </form>
  );
}
export default Team_UpDateForm;
