import React, { useState } from 'react';
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

  const [senderInfo, setSenderInfo] = useState();
  const [recipientInfo, setRecipientInfo] = useState();
  const [parcelInfo, setParcelInfo] = useState();
  const [newParcel, setNewParcel] = useState();

  // const examSender = {
  //   _id: new mongoose.Types.ObjectId(),
  //   firstName: "Sirawit",
  //   lasName: "Mahain",
  //   telephone: "064-002-2069",
  //   postalCode: "10400",
  //   address: "Secret"
  // }

  // const examRecipient = {
  //   _id: new mongoose.Types.ObjectId(),
  //   firstName: "Kornthip",
  //   lasName: "Meenarin",
  //   telephone: "087-174-4290",
  //   postalCode: "10400",
  //   address: "Secret"
  // }

  // const examParcel = {
  //   weight: 10,
  //   dimension: 15,
  //   cost: 1500
  // }

  // const testParcel = new Parcel({
  //   salengNo: 'SL-XXXX (future feature)',
  //   deliverStatus: 'จัดส่งสำเร็จ (future feature)',
  //   sender: examSender._id,
  //   recipient: examRecipient._id,
  //   parcel: examParcel,
  // });

  function handleSender() {

  }


  function handleRecipient() {

  }

  function handleResetButton() {

  }

  function handleSubmitButton() {

  }

  return (

    <form>
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
        <div className={classes.root}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
          <Button variant="contained" color="secondary">
            Reset
          </Button>
        </div>
      </div >
    </form>
  );
}

export default Register
