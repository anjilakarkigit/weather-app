import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400, 
    height: 60,
    margin: '50px 0',
    backgroundColor: 'lightblue',
  },
  input: {
    marginLeft: theme.spacing(9),
    flex: 1,
    fontSize: '20px',
    width: '150px'
  },
  

  }

));

export default useStyles 