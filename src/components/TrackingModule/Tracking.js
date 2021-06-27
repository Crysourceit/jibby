import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./Tracking.css";
import Button from '@material-ui/core/Button';

const fieldStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '40ch'
    },
  }
}));

//https://material-ui.com/customization/components/
const buttonStyles = {
  root: {
    background: 'linear-gradient(151deg, #2446ff 25%, #f96262 90%)',
    borderRadius: 5,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // marginLeft: 20,
    fontSize: '0.9rem',
    fontWeight: 600
  },
}

//Material-UI
//https://material-ui.com/components/text-fields/

function Tracking() {
  const field = fieldStyles();

  return (
    <div>
      <i class="fas fa-vest" style={{ fontSize: '15rem', marginTop: '10rem', color: 'rgb(73,63,251, 1)' }}></i>
      <div className="container">
        <div className="child">
          <form className={field.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Enter your Saleng's no." />
          </form>
        </div>
        <div className="child">
          <Button style={buttonStyles.root} variant="contained" color="secondary">Track</Button>
        </div>
      </div>
    </div>

  )
}

export default Tracking
