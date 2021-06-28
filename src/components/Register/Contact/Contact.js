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
  textField: {
    width: '25ch',
  },
}));

function Contact(props) {

  const emptyContact = {
    firstName: "",
    lastName: "",
    telephone: "",
    postalCode: "",
    address: ""
  }

  const [contactAddress, setContactAddress] = useState(emptyContact);

  function handleChange(event) {
    const { id, value } = event.target
    setContactAddress(prev => {
      return {
        ...prev, [id]: value
      }
    });
  }

  useEffect(() => {
    props.setContactInfo(contactAddress)
  }, [contactAddress]);

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
        value={contactAddress.firstName}
        onChange={handleChange}
      />
      <TextField
        required
        id="lastName"
        label="Last Name"
        // defaultValue=""
        variant="outlined"
        helperText="Your last name e.g., Mahanin."
        value={contactAddress.lastName}
        onChange={handleChange}
      />
      <TextField
        required
        id="telephone"
        label="Tel."
        // defaultValue=""
        variant="outlined"
        helperText=""
        value={contactAddress.telephone}
        onChange={handleChange}
      />
      <TextField
        required
        id="postalCode"
        label="Postal Code"
        // defaultValue=""
        variant="outlined"
        helperText="Thailand's postal code e.g., 10400."
        value={contactAddress.postalCode}
        onChange={handleChange}
      />
      <TextField
        required
        id="address"
        label="Address"
        multiline
        rows={7}
        // defaultValue=""
        variant="outlined"
        style={{ width: '35ch' }}
        value={contactAddress.address}
        onChange={handleChange}
      />
    </form >
  );
}

export default Contact
