import React, { useState } from 'react';
import Contact from './Contact/Contact';
import Parcel from './Parcel/Parcel';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import RandomHr from '../RandomHr/RandomHr';
const axios = require('axios').default;

const buttonStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      // marginTop: 50
    },
  },
}));

const typoStyles = makeStyles(() => ({
  root: {
    marginTop: 25,
  },
  top: {
    textAlign: 'center',
    marginTop: '5%'
  }
}));

const containerStyles = makeStyles(() => ({
  root: {
    marginLeft: '25%',
    marginRight: '25%'
  }
}));

function Register() {

  const btnClass = buttonStyles();
  const typoClass = typoStyles();
  const containerClass = containerStyles();

  // States
  const [senderInfo, setSenderInfo] = useState([]);
  const [recipientInfo, setRecipientInfo] = useState([]);
  const [parcelInfo, setParcelInfo] = useState([]);

  // form submit handler
  // POST to express @localhost/4000
  async function handleSubmit() {
    //
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

  //form reset handler
  const handleReset = () => {
    setSenderInfo();
    setRecipientInfo();
  }

  return (
    <div className={containerClass.root}>
      <Typography variant="h2" className={typoClass.top} >Parcel Register</Typography>
      <RandomHr width={'100%'} />
      <Typography variant="h4" className={typoClass.root}>Sender</Typography>

      {/* Sender */}
      <Contact setContactInfo={setSenderInfo} />
      <Typography variant="h4" className={typoClass.root}>Recipient</Typography>

      {/* Recipent */}
      <Contact setContactInfo={setRecipientInfo} />
      <Typography variant="h4" className={typoClass.root}>Parcel</Typography>

      {/* Parcel */}
      <Parcel setParcelInfo={setParcelInfo} />

      {/* Button */}
      {/* AXIOX POST HERE */}
      <div className={btnClass.root}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="contained" color="secondary" onClick={handleReset}>
          {/* <Button variant="contained" color="secondary" onClick={resetButton} > */}
          Reset
        </Button>
      </div>


    </div >
  );
}

export default Register
