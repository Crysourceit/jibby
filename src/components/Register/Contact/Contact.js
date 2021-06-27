import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '25ch',
  },
}));

function Contact(props) {

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" >
      <TextField
        required
        id="firstName"
        label="FirstName"
        defaultValue=""
        variant="outlined"
        helperText="Your first name e.g., Sirawit."
      />

      <TextField
        required
        id="lastName"
        label="Last name"
        defaultValue=""
        variant="outlined"
        helperText="Your last name e.g., Mahanin."
      />

      <TextField
        required
        id="telephone"
        label="Tel."
        defaultValue=""
        variant="outlined"
        helperText=""
      />

      <TextField
        required
        id="postalCode"
        label="Postal Code"
        defaultValue=""
        variant="outlined"
        helperText="Thailand's postal code e.g., 10400."
      />
      <TextField
        required
        id="address"
        label="Address"
        multiline
        rows={7}
        defaultValue=""
        variant="outlined"
        style={{ width: '35ch' }}
      />
    </form >
  );
}

export default Contact
