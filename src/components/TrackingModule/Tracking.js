import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./Tracking.css";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
const PUBLIC_URL = process.env.PUBLIC_URL;

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
    // background: 'linear-gradient(151deg, #2446ff 25%, #f96262 90%)',
    background: 'crimson',
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

function Tracking(props) {
  document.title = `Tracking | Jibby`;
  const [isFetchSuccess, setIsFetchSuccess] = useState(false);
  const [parcelStatus, setParcelStatus] = useState([]);
  const [jibbyTag, setJibbyTag] = useState('');
  const [helperText, setHelperText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRedirectedFromRegister, setIsRedirectedFromRegister] = useState(false);
  const [isRedirectedFromQR, setIsRedirectedFromQR] = useState(false);
  const params = useParams();

  /////////////// Check if redirected from register page
  try {
    if (props.location.state && !isRedirectedFromRegister) {
      setJibbyTag(props.location.state.jibbyTag);
      setIsRedirectedFromRegister(true);
    }
  } catch (error) {
    console.log(error)
  }
  /////////////// Check if accessed from QR code
  if (params.jibbyTag && !isRedirectedFromQR) {
    setJibbyTag(params.jibbyTag);
    setIsRedirectedFromQR(true);
  }
  /////////////// Normal root

  async function fetchParcelStatus(id) {
    // console.log("fetchParcelStatus() invoked")
    try {
      const response = await axios.get("/parcel" + `/${id}`);
      // console.log("try block reached");
      if (response.status === 200 && response.data != null) {
        // console.log(response.data)
        // console.log(response.status)
        setParcelStatus(response.data);
        setIsFetchSuccess(true);
        // console.log("200 block reached")
      }
    } catch (error) {
      // console.log("error block reached")
      // console.log(error);
      setIsFetchSuccess(false);
      if (error.response) {
        // console.log(error.response.data);
        // console.log(error.response.status);
      }
    }
  }

  function handleClick() {
    setIsFetchSuccess(false);
    setParcelStatus([]);
    setJibbyTag('');
    setHelperText('');
  }

  function handleChange(e) {
    setJibbyTag(e.target.value)
  }

  useEffect(() => {

    if (jibbyTag.length < 24) {
      setHelperText('');
    }

    if (jibbyTag.length > 1) {
      // setTimeout(() => {
      setTimeout(() => {
        fetchParcelStatus(jibbyTag);
      }, 450);
      // }, 250);
    }

    if (!isFetchSuccess && jibbyTag.length >= 24) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setHelperText('Invalid Input')
      }, 1000);
    }

    // console.log(`salengNo ${jibbyTag.length} | salengNo=24 ${jibbyTag.length === 24} | isFetched= ${isFetchSuccess} | logic ${jibbyTag.length === 24 && (!isFetchSuccess)}`);
  }, [jibbyTag])

  const field = fieldStyles();
  const classes = useStyles();

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Jibby Track</h1>
      <div className="tracking_logo">
        <object style={{ height: "300px", width: "300px" }} type="image/svg+xml" data={PUBLIC_URL + "/svg/tracking_motion.svg"}>svg-animation</object>
      </div>
      <div className="tracking_container">
        <div className="tracking_child">
          <form className={field.root} noValidate autoComplete="off">
            <TextField id="salengNo" value={jibbyTag} label="Enter your Jibby-tags (use _id for now)"
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
