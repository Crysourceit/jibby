import store from "../../state/store";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { contactActions } from "../../state/_Actions";
import clsx from 'clsx';
import Contact from './Contact/Contact';
import Parcel from './Parcel/Parcel';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import RandomHr from '../RandomHr/RandomHr';
import { setContact } from "../../state/action-creators/contact";
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
    marginLeft: '10%',
    marginRight: '10%'
  }
}));

function Register() {

  document.title = `Register | Saleng.th`;
  const btnClass = buttonStyles();
  const typoClass = typoStyles();
  const containerClass = containerStyles();

  // States
  // const [senderInfo, setSenderInfo] = useState([]);
  // const [recipientInfo, setRecipientInfo] = useState([]);
  const [parcelInfo, setParcelInfo] = useState([]);

  const emptyContactList = {
    firstName: "",
    lastName: "",
    telephone: "",
    postalCode: "",
    address: ""
  }

  ////////// Redux 

  // Dispatch
  const dispatch = useDispatch();

  //Sender
  const senderInfo = useSelector((state) => state.sender)
  let { setContact: setSenderInfo, resetContact: resetSenderInfo } = bindActionCreators(contactActions, dispatch);


  //Recipient
  const recipientInfo = useSelector((state) => state.recipient)
  let { setContact: setRecipientInfo, resetContact: resetRecipientInfo } = bindActionCreators(contactActions, dispatch);


  // Form submit handler
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


  ////////// Dispatch example
  // Works
  // store.dispatch({
  //   type: "set",
  //   payload: {
  //     id: "firstName",
  //     value: "Sirawit"
  //   },
  //   name: "sender"
  // })

  // Works
  // setSenderInfo({
  //   target: {
  //     id: "firstName",
  //     value: "kronthip"
  //   }
  // }, 'sender')

  // Works 
  // store.dispatch({
  //   type: "set",
  //   payload: {
  //     id: "firstName",
  //     value: "sirawit"
  //   }
  // })

  // WORKS 
  // store.dispatch({
  //   type: "reset",
  //   payload: {}
  // })
  ////////// Dispatch example

  function handleReset() {
    // store.dispatch({
    //   type: "set",
    //   payload: {
    //     id: "firstName",
    //     value: "Sirawit"
    //   },
    //   name: "sender"
    // })
    // resetSenderInfo('sender')
    // resetRecipientInfo('recipient')
  }

  return (
    <div className={clsx(true && containerClass.root)}>
      <Typography variant="h3" className={typoClass.top} >Parcel Register</Typography>
      <RandomHr width={'100% !important'} />
      <Typography variant="h4" className={typoClass.root}>Sender</Typography>

      {/* Sender */}
      <Contact name="sender" setContactInfo={setSenderInfo} contactInfo={senderInfo} />
      <Typography variant="h4" className={typoClass.root}>Recipient</Typography>

      {/* Recipent */}
      <Contact setContactInfo={setRecipientInfo} contactInfo={recipientInfo} />
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
