import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './styles';
import { Grid,TextField, Typography } from '@material-ui/core';
import {getNewDate} from './components/date'
 



function App() {
   const apiKey = '8bb7846273347ac278873aa9b41eb528'
   const [weatherData, setWeatherData] = useState([{}])
   const [city, setCity] = useState('')

   const getWeather =  event => {
     if(event.key === 'Enter')
           fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`).then(
           response => response.json()
       ).then(
         data =>{
           setWeatherData(data);
           setCity('');
         }
       )
  }
   const classes = useStyles();

   return(
   <div className={classes.home}>
      <CssBaseline />
        <Grid container direction="column" justifyContent="center" alignItems="center"  >
        <Typography variant="h5" className={classes.typo}>Weather Indicator</Typography>
      
        <TextField placeholder="Search.."
              color="primary"
              className={classes.inputs}
              onChange={e=>setCity(e.target.value)}
              value={city}
              onKeyPress={getWeather}
        />

        <Typography variant="h5">{getNewDate(new Date())}</Typography>

        {(weatherData.cod === '404')?(
          <Typography variant="h4" >No city found. Maybe try just putting the city name?</Typography>
        ) : ('')
        }

        <br></br>

        {typeof weatherData.main === 'undefined' ? (
       <div>
        <Typography variant="h6">Welcome to the weather indicator! Please enter the name of city.</Typography>
      </div> 
    ):(
      <div>
        <Typography variant="h5" color="secondary">{weatherData.name},{weatherData.sys.country}</Typography>
        <br/>
        <Typography variant="h5">Temp:{Math.round(weatherData.main.temp)}{` F`}</Typography>
        <br></br>
        <Typography variant="h5">Feels Like:{weatherData.main.feels_like}{` F`}</Typography>
      </div>
    )}
        </Grid>
     
    </div>   
  );
}
export default App;
