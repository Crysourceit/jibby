import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
}));

function Contact(props) {

  function handleChange(event) {
    props.setContactInfo(event)
  }

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" >
      <TextField
        required
        id="firstName"
        label="First Name"
        // defaultValue=""
        variant="outlined"
        helperText="Your first name e.g., Sirawit."
        value={props.contactInfo.firstName}
        onChange={handleChange}
      />
      <TextField
        required
        id="lastName"
        label="Last Name"
        // defaultValue=""
        variant="outlined"
        helperText="Your last name e.g., Mahanin."
        value={props.contactInfo.lastName}
        onChange={handleChange}
      />
      <TextField
        required
        id="telephone"
        label="Tel."
        // defaultValue=""
        variant="outlined"
        helperText=""
        value={props.contactInfo.telephone}
        onChange={handleChange}
      />
      <TextField
        required
        id="postalCode"
        label="Postal Code"
        // defaultValue=""
        variant="outlined"
        helperText="Thailand's postal code e.g., 10400."
        value={props.contactInfo.postalCode}
        onChange={handleChange}
      />
      <TextField
        required
        id="address"
        label="Address"
        multiline
        rows={5}
        // defaultValue=""
        variant="outlined"
        value={props.contactInfo.address}
        onChange={handleChange}
      // style={{ width: '!important' }}
      // ref={(el) => {
      //   if (el) {
      //     el.style.setProperty('width', '30px !important');
      //   }
      // }}
      />
    </form >
  );
}

export default Contact
