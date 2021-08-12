import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  home:{
    backgroundColor: 'pink',
    height: '100vh'
  },
  typo:{
    '&&':{
    margin:"40px",
    color: "white",
    letterSpacing: '3px',
    fontWeight: '500'
    }
  },
  inputs: {
    '&&':{
    width: '400px',
    paddingBottom : '60px',
    }
  },
  

  }

));

export default useStyles 