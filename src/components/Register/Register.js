import React, { useState } from 'react';
import "./Register.css";
import Contact from './Contact/Contact';
import Parcel from './Parcel/Parcel';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const axios = require('axios').default;

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

  const [senderInfo, setSenderInfo] = useState();
  const [recipientInfo, setRecipientInfo] = useState();
  const [parcelInfo, setParcelInfo] = useState();


  // With promise
  // function handleSubmit() {
  //   //With promise
  //   axios.post('/parcel', {
  //     senderInfo: senderInfo,
  //     recipientInfo: recipientInfo,
  //     parcelInfo: parcelInfo
  //   })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  async function handleSubmit() {
    try {
      await axios.post('/parcel', {
        senderInfo: senderInfo,
        recipientInfo: recipientInfo,
        parcelInfo: parcelInfo
      });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='register_container'>
      <Typography variant="h2" className='register_child'>Parcel register</Typography>
      <Typography variant="h4" className='register_child'>Sender</Typography>

      {/* Sender */}
      <Contact setContactInfo={setSenderInfo} />
      <Typography variant="h4" className='register_child'>Recipient</Typography>

      {/* Recipent */}
      <Contact setContactInfo={setRecipientInfo} />
      <Typography variant="h4" className='register_child'>Parcel</Typography>

      {/* Parcel */}
      <Parcel setParcelInfo={setParcelInfo} />

      {/* Button */}
      {/* AXIOX POST HERE */}
      <div className={classes.root}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
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
