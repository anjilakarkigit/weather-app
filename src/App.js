import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './styles';
 import Paper from '@material-ui/core/Paper';
 import { Grid,TextField, Typography } from '@material-ui/core';
 



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
   <div>
      <CssBaseline />
        <Grid container direction="column" justifyContent="center" alignItems="center" >
        <Typography variant="h3">Weather Indicator</Typography>
        <Paper className={classes.root} >
              <TextField placeholder="Enter the city.."
              color="primary"
              className={classes.inputs}
              onChange={e=>setCity(e.target.value)}
              value={city}
              onKeyPress={getWeather}
              />
        </Paper>
        </Grid>
    {typeof weatherData.main === 'undefined' ? (
      <div>
        <p>Sorry try again!</p>
      </div> 
    ):(
      <div>
        <p>{weatherData.name}{weatherData.id}</p>
        <p>Hi</p>
      </div>
    )} 
    </div>   
  );
}
export default App;
