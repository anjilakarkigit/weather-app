import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400, 
    height: 60,
    margin: '50px 0',
  
  },
  input: {
    marginLeft: theme.spacing(9),
    flex: 1,
    fontSize: '20px',
    letterSpacing: '2px'
  },
  

  }

));

export default useStyles 