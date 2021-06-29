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
  const [isFetched, setIsFetched] = useState(false);
  const [parcelStatus, setParcelStatus] = useState([]);
  const [salengNo, setSalengNo] = useState([]);
  const [helperText, setHelperText] = useState('');

  async function fetchParcelStatus(id) {
    // console.log("fetchParcelStatus() invoked")
    try {
      // console.log("try invoked")
      const response = await axios.get("/parcel" + `/${id}`);
      console.log("Fetching data...");
      if (response.status === 200) {
        console.log(response.status)
        setParcelStatus(response.data);
        setIsFetched(true);
        console.log("End of try/if reached")
      }
    } catch (error) {
      // console.log("error invoked")
      // console.log(error);
      setIsFetched(false);
      if (error.response) {
        // console.log(error.response.data);
        console.log(error.response.status);
      }
    }
  }

  function handleClick() {
    setParcelStatus([]);
    setIsFetched(false);
    setHelperText('');
    setSalengNo('');
  }


  useEffect(() => {
    // Get started to fetch when almost done typing

    if (salengNo.length === 0) {
      setIsFetched(prev => {
        if (prev === true) {
          return false
        }
      });
      setHelperText('')
    }

    if (salengNo.length > 20 && salengNo.length <= 24) {
      // setHelperText(`${(24 - salengNo.length)} characters left.`)
      fetchParcelStatus(salengNo);

    }

    if (!isFetched && salengNo.length === 24) {
      console.log("Fuck You")
      setHelperText('Invalid input');
    }

    console.log(`salengNo ${salengNo.length} | salengNo=24 ${salengNo.length === 24} | isFetched= ${isFetched} | logic ${salengNo.length === 24 && (!isFetched)}`);

  }, [salengNo])


  const field = fieldStyles();

  return (
    <div>
      <i class="fas fa-vest" style={{ fontSize: '15rem', marginTop: '5rem', color: 'rgb(73,63,251, 1)' }}></i>
      <div className="tracking_container">
        <div className="tracking_child">
          <form className={field.root} noValidate autoComplete="off">
            <TextField id="salengNo" value={salengNo} label="Enter your Saleng's no."
              onChange={(e) => {
                setSalengNo(e.target.value)
              }} />
          </form>
        </div>
        <div className="tracking_child">
          <Button style={buttonStyles.root} variant="contained" color="secondary" onClick={handleClick}>Reset</Button>
        </div>
        <div id="helper-text"> <p><em>{helperText}</em></p> </div>
        <div id="status-area">
          {isFetched && <div><h1>Status</h1><p></p></div>}
          {/* {isFetched && <div><p>From {parcelStatus.sender.firstName} to {parcelStatus.recipient.firstName}, status {parcelStatus.deliverStatus}.</p></div>} */}
        </div>
      </div>

    </div>

  )
}

export default Tracking
