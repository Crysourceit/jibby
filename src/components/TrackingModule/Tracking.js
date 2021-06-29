import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./Tracking.css";
import Button from '@material-ui/core/Button';
import axios from 'axios';

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
  document.title = `Tracking | Saleng.th`;
  const [isFetched, setIsFetch] = useState(false);
  const [parcelStatus, setParcelStatus] = useState([]);
  const [salengNo, setSalengNo] = useState([])


  async function fetchParcelStatus(id) {
    const response = await axios.get("/parcel" + `/${id}`);
    setParcelStatus(response.data);
    // console.log(response.data);
    console.log("Fetching data...");
  }

  function handleClick() {
    setIsFetch(true);
  }

  function Status() {
    return (<p>From {parcelStatus.sender.firstName} to {parcelStatus.recipient.firstName}, status {parcelStatus.deliverStatus}.</p>)
  }

  useEffect(() => {
    //effect
    console.log("Effect invoked")
    if (salengNo.length == 24) {
      fetchParcelStatus(salengNo);
    }

    if (salengNo.length == 0) {
      setIsFetch(false);
    }

  }, [salengNo])


  const field = fieldStyles();

  return (
    <div>
      <i class="fas fa-vest" style={{ fontSize: '15rem', marginTop: '5rem', color: 'rgb(73,63,251, 1)' }}></i>
      <div className="tracking_container">
        <div className="tracking_child">
          <form className={field.root} noValidate autoComplete="off">
            <TextField id="salengNo" label="Enter your Saleng's no."
              onChange={(e) => {
                setSalengNo(e.target.value)
              }} />
            <p>just use _id for now</p>
          </form>
        </div>
        <div className="tracking_child">
          <Button style={buttonStyles.root} variant="contained" color="secondary" onClick={handleClick}>Track</Button>
        </div>
        <div id="status-area">
          {isFetched && <div><h1>Status</h1><p></p></div>}
          {isFetched && <Status />}
        </div>
      </div>

    </div>

  )
}

export default Tracking
