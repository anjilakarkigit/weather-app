import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './styles';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import axios from 'axios'


function App() {

   const apiKey = '8bb7846273347ac278873aa9b41eb528'
   const [weatherData, setWeatherData] = useState([{}])
   const [city, setCity] = useState("")

   const getWeather =  (event)=>{
     if(event.key === "Enter"){
       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`).then(
         response => response.json()
       ).then(
         data =>{
           setWeatherData(data)
         }
       ).catch(alert("fetch failed"))
     }
   }

 

  const classes = useStyles();

  return (
    <>
    <CssBaseline />
    <Grid container direction="column" justifyContent="center" alignItems="center" >
    <Paper component="form" className={classes.root}>
      <InputBase 
      className={classes.input} 
      placeholder="Enter the name of a city" 
      onChange = {e=>setCity(e.target.value)}
      onKeyPress={getWeather}
      value={city}
    />
    </Paper>
    </Grid>

    <p>{city}</p>

    {typeof weatherData.main === 'undefined' ? (
      <div>
        <p>Sorry try agian!</p>
      </div> 
    ):(
      <div>
        <p>{weatherData.name}</p>
        <p>Hi</p>
  
      </div>
    )} 

    </>
    

  
    
  );
}

export default App;
