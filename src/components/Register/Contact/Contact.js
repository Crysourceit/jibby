import React, { useState } from 'react'
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

  const [contactAddress, setContactAddress] = useState({
    firstName: "",
    lastName: "",
    telephone: "",
    postalCode: "",
    address: ""
  })


  // IDEA
  // function setterHelper(funk, e) {
  //   const inputText = e.target.value
  //   funk(() => {
  //     return inputText
  //   })
  // }

  //DOUBLE ARROW 
  // const doubleArrow = (tags) => (event) => {
  //   console.log(tags);
  //   console.log(event.target.value);
  // };

  //DOUBLE ARROW LONG-VERSION!
  //Functional programming
  //Accept setter as a parameter!
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [tel, setTel] = useState('')
  // const [postalCode, setPostalCode] = useState('')
  // const [address, setAddress] = useState('')
  // const setterHelper = function handleChange(func) {
  //   return function (e) {
  //     const inputText = e.target.value;
  //     func(() => {
  //       return inputText
  //     });
  //   };
  // };

  //Revised setterHelper
  const handleChange = () => {
    return (event) => {
      const { id, value } = event.target
      //Need previous
      // setContactAddress({ [id]: value })
      setContactAddress(prev => {
        return {
          ...prev, [id]: value
        }
      });
      props.setContactInfo(contactAddress)
      // console.log(`Name is ${id}`)
      // console.log(`Value is ${value}`)
    }
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
        value={contactAddress.firstName}
        onChange={handleChange()}
      />
      <TextField
        required
        id="lastName"
        label="Last Name"
        // defaultValue=""
        variant="outlined"
        helperText="Your last name e.g., Mahanin."
        value={contactAddress.lastName}
        onChange={handleChange()}
      />
      <TextField
        required
        id="telephone"
        label="Tel."
        // defaultValue=""
        variant="outlined"
        helperText=""
        value={contactAddress.lastName}
        onChange={handleChange()}
      />
      <TextField
        required
        id="postalCode"
        label="Postal Code"
        // defaultValue=""
        variant="outlined"
        helperText="Thailand's postal code e.g., 10400."
        value={contactAddress.postalCode}
        onChange={handleChange()}
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
        onChange={handleChange()}
      />
    </form >
  );
}

export default Contact
