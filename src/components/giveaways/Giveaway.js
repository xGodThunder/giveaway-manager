import {React, useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./style.css";
export default function Giveaway(){
  const [eventData, setEventData] = useState({});

  useEffect(()=>{console.log(eventData);},[]);
  const today = new Date().toISOString().split("T")[0];
  function registerEvent(e){
    e.preventDefault();
    console.log(eventData);
  }
  return(
    <div className="giveaway__body">
      <form onSubmit={registerEvent}>
        <TextField id="name" required label="Event Name" variant="outlined" 
          margin="normal"
          onChange={(e)=>{setEventData({...eventData, name:e.target.value});}}
          value = {eventData.name}/>
        <Gutter/>
        <TextField
          id="start-date"
          label="Start Date"
          type="date"
          variant="outlined"
          margin="normal"
          onChange={(e)=>{setEventData({...eventData, startDate:e.target.value});}}
          style={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{inputProps: { min: `${today}`} }}
        />
         <TextField id="email" type="email" required label="Contact email" variant="outlined" 
          margin="normal"
          onChange={(e)=>{setEventData({...eventData, email:e.target.value});}}
          value = {eventData.email}/>
          <Gutter/>
          <TextField
          id="end-date"
          label="End Date"
          type="date"
          variant="outlined"
          margin="normal"
          onChange={(e)=>{setEventData({...eventData, endDate:e.target.value});}}
          style={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{inputProps: { min: `${today}`} }}
        />
          <br/>
        <Button fullWidth type="submit" variant="contained" size="large" color="primary">Submit</Button>
       
      </form>
    </div>
  );
}
function Gutter(){
  return(
    <span style={{margin:"0px 20px"}}></span>
  );
}