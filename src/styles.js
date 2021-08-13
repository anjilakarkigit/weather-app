import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  typo:{
    '&&':{
    margin:"40px",
    color: "white",
    letterSpacing: '3px',
    fontWeight: '500',
    }
  },
  typos:{
    '&&':{
    color: 'white',
    fontSize: '25px'
    }
  }

  }

));

export default useStyles 