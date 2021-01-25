import '../Styles/App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Demo = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <div class="w3-container w3-teal">
  <h1>My Car</h1>
</div>
             <div className={classes.root}>
              <Button variant="contained">Default</Button>
              <Button variant="contained" color="primary">
                Primary
              </Button>
              <Button variant="contained" color="secondary">
                Secondary
              </Button>
              <Button variant="contained" disabled>
                Disabled
              </Button>
              <Button variant="contained" color="primary" href="#contained-buttons">
                Link
              </Button>
            </div>
    </div>
  );
}

export default Demo;
