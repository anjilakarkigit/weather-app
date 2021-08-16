import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './styles';
import { Grid, Typography} from '@material-ui/core';
import {getNewDate} from './components/date'
import "./components/app.css"; 


function App() {
   const [weatherData, setWeatherData] = useState([{}])
   const [city, setCity] = useState('')
   const API_KEY = '8bb7846273347ac278873aa9b41eb528'


   const getWeather =  event => {
     if(event.key === 'Enter')
           fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`).then(
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
   <div className={(typeof weatherData.main!='undefined')?((weatherData.main.temp > 50)?'app-warm':'app-cold'):'app'}>
   <main>
      <CssBaseline />
        <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.grid} >
        
        <input type="text" 
              placeholder="Search for a city..."
              className="inputs"
              onChange={e=>setCity(e.target.value)}
              value={city}
              onKeyPress={getWeather}
        />

        

        {(weatherData.cod === '404')?(
          <Typography variant="h5" className={classes.typos}>No city found. Maybe try just putting the city name?</Typography>
        ) : ('')
        }

        <br></br>

        {typeof weatherData.main !== 'undefined' ? (
          <div>
        <Typography variant="h5" className={classes.country}>{weatherData.name},{weatherData.sys.country}</Typography>
        <br/>
        <Typography variant="h5" className={classes.date}>{getNewDate(new Date())}</Typography>
        <br/>
        <Typography variant="h5" className={classes.temp}>Temp:{Math.round(weatherData.main.temp)}{` °F`}</Typography>
        <br/>
        <Typography variant="h5" className={classes.tempFeel}>Feels Like:{weatherData.main.feels_like}{` °F`}</Typography>
        <br/>
        <Typography variant="h4" className={classes.clouds}>{weatherData.weather[0].main}</Typography>
      </div>
    ):(
      <div>
        <Typography variant="h5" className={classes.date}>{getNewDate(new Date())}</Typography>
        <Typography variant="h5" className={classes.name}>Weather Indicator</Typography>
      </div> 
    )}
        </Grid>
    </main> 
    </div>
  );
}
export default App;
