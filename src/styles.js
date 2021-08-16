import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  typos:{
    '&&':{
    fontSize: '24px',
    letterSpacing: '2px',
    color: 'black',
    fontWeight: '300',
    fontFamily: 'sans-serif',
    alignContent: 'center'
    }
  },
  country:{
    '&&':{
    color: "white",
    letterSpacing: '1px',
    fontWeight: '500',
    fontSize: '35px',
    marginLeft: '50px'
    }
  },
  date:{
    '&&':{
    color: 'white',
    fontSize: '25px',
    fontStyle: 'italic',
    marginLeft: '20px'
    }
  },
  temp:{
    '&&':{
      fontSize: '55px',
      textShadow: '3px 3px rgba(50, 50, 70, 0.5)',
      color:'white',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      padding: '10px',
      borderRadius: "10px",
      cursor: 'pointer'
    }
  },
  clouds:{
    '&&':{
    marginLeft: '89px',
    color: "white",
    }
  },
  tempFeel:{
    '&&':{
    marginLeft: '49px',
    color: "white",
    fontWeight: '500',
    fontSize: '25px',
    }
  },
  name:{
    '&&':{
      margin: '20px',
      fontSize: '35px',
      textShadow: '3px 3px rgba(50, 50, 70, 0.3)',
      color:'white',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      padding: '10px',
      borderRadius: "10px",
      cursor: 'pointer'
    }
  }
})
);

export default useStyles 