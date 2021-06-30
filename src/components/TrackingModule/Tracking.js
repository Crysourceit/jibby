import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./Tracking.css";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

//Material-UI
//https://material-ui.com/components/text-fields/

function Tracking() {
  const classes = useStyles();
  document.title = `Tracking | Saleng.th`;
  const [isFetchSuccess, setIsFetchSuccess] = useState(false);
  const [parcelStatus, setParcelStatus] = useState([]);
  const [salengNo, setSalengNo] = useState('');
  const [helperText, setHelperText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function fetchParcelStatus(id) {
    // console.log("fetchParcelStatus() invoked")
    try {
      const response = await axios.get("/parcel" + `/${id}`);
      console.log("try block reached");
      if (response.status === 200 && response.data != null) {
        console.log(response.data)
        console.log(response.status)
        setParcelStatus(response.data);
        setIsFetchSuccess(true);
        console.log("200 block reached")
      }
    } catch (error) {
      console.log("error block reached")
      // console.log(error);
      setIsFetchSuccess(false);
      if (error.response) {
        // console.log(error.response.data);
        console.log(error.response.status);
      }
    }
  }

  function handleClick() {
    setIsFetchSuccess(false);
    setParcelStatus([]);
    setSalengNo('');
    setHelperText('');
  }

  function handleChange(e) {
    setSalengNo(e.target.value)
  }

  useEffect(() => {

    if (salengNo.length < 24) {
      setHelperText('');
    }

    if (salengNo.length > 1) {
      // setTimeout(() => {
      setTimeout(() => {
        fetchParcelStatus(salengNo);
      }, 500);
      // }, 250);
    }



    if (!isFetchSuccess && salengNo.length >= 24) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setHelperText('Invalid Input')
      }, 1000);
    }

    console.log(`salengNo ${salengNo.length} | salengNo=24 ${salengNo.length === 24} | isFetched= ${isFetchSuccess} | logic ${salengNo.length === 24 && (!isFetchSuccess)}`);
  }, [salengNo])

  const field = fieldStyles();

  return (
    <div>
      <i class="fas fa-vest" style={{ fontSize: '15rem', marginTop: '5rem', color: 'rgb(73,63,251, 1)' }}></i>
      <div className="tracking_container">
        <div className="tracking_child">
          <form className={field.root} noValidate autoComplete="off">
            <TextField id="salengNo" value={salengNo} label="Enter your Saleng's no. (use _id for now)"
              onChange={handleChange} />
          </form>
        </div>
        <div className="tracking_child">
          <Button style={buttonStyles.root} variant="contained" color="secondary" onClick={handleClick}>Reset</Button>
        </div>
        <div id="helper-text">
          {!isFetchSuccess ? <p><em>{helperText}</em></p> : <p style={{ display: 'none' }}><em>{helperText}</em></p>}
        </div>
        <div className={classes.root}>
          {isLoading ? <CircularProgress /> : <CircularProgress style={{ visibility: 'hidden' }} />}
        </div>
        <div id="status-area">
          {isFetchSuccess && <div><h1>Status</h1></div>}
          {isFetchSuccess && <div><p>Sender: <strong>{parcelStatus.sender.firstName}</strong>  |  Recipient: <strong>{parcelStatus.recipient.firstName}</strong>  |  Status: <strong>{parcelStatus.deliverStatus}</strong></p></div>}
        </div>
      </div>

    </div>

  )
}

export default Tracking
