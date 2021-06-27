import React from 'react';
import "./Register.css";
import Contact from './Contact/Contact';
import Parcel from './Parcel/Parcel';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      marginTop: 50
    },
  },
}));

function Register() {
  const classes = useStyles();
  return (

    <div className='register_container'>
      <Typography variant="h2" className='register_child'>Parcel register</Typography>
      <Typography variant="h4" className='register_child'>Sender</Typography>
      <Contact />
      <Typography variant="h4" className='register_child'>Recipient</Typography>
      <Contact />
      <Typography variant="h4" className='register_child'>Parcel</Typography>
      <Parcel />
      <div className={classes.root}>
        <Button variant="contained" color="primary">
          Submit
        </Button>
        <Button variant="contained" color="secondary">
          Reset
        </Button>
      </div>


    </div >
  );
}

export default Register
