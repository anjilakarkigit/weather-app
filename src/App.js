import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './styles';
import { Grid, Typography} from '@material-ui/core';
import {getNewDate} from './components/date'
import "./components/app.css"; 



function App() {
   const apiKey = '8bb7846273347ac278873aa9b41eb528'
   const [weatherData, setWeatherData] = useState([{}])
   const [city, setCity] = useState('')

   const getWeather =  event => {
     if(event.key === 'Enter')
           fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`).then(
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
        <Typography variant="h5" className={classes.typo}>Weather Indicator</Typography>
      
        <input type="text" 
              placeholder="Search.."
              className="inputs"
              onChange={e=>setCity(e.target.value)}
              value={city}
              onKeyPress={getWeather}
        />

        <Typography variant="h5" className={classes.typos}>{getNewDate(new Date())}</Typography>

        {(weatherData.cod === '404')?(
          <Typography variant="h4" className={classes.typos}>No city found. Maybe try just putting the city name?</Typography>
        ) : ('')
        }

        <br></br>

        {typeof weatherData.main === 'undefined' ? (
       <div>
        <Typography variant="h6" className={classes.typos}>Welcome to the weather indicator! Please enter the name of city.</Typography>
      </div> 
    ):(
      <div>
        <Typography variant="h5" color="secondary" className={classes.typos}>{weatherData.name},{weatherData.sys.country}</Typography>
        <br/>
        <Typography variant="h5" className={classes.typos}>Temp:{Math.round(weatherData.main.temp)}{` F`}</Typography>
        <br/>
        <Typography variant="h5" className={classes.typos}>Feels Like:{weatherData.main.feels_like}{` F`}</Typography>
        <br/>
        <Typography variant="h4" className={classes.typos}>{weatherData.weather[0].main}</Typography>
      </div>
    )}
        </Grid>
    </main> 
    </div>
  );
}
export default App;
