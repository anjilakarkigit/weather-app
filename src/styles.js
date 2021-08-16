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
    marginLeft: '50px'
    }
  },
  date:{
    '&&':{
    color: 'white',
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
    fontWeight: '500'
    }
  },
  name:{
    '&&':{
      margin: '20px',
      textShadow: '3px 3px rgba(50, 50, 70, 0.3)',
      color:'white',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      padding: '10px',
      borderRadius: "10px",
      cursor: 'pointer'
    }
  },
  inputs:{
    '&&':{   
    margin: '50px',
    border: 'none',
    padding: '12px',
    width: '17em',
    height: '3em',
    borderRadius: '8px',
    fontSize: '18px',
    letterSpacing: '2px',
    color: 'black',
    }
  }
})
);

export default useStyles 