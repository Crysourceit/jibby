
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
  textField: {
    width: '25ch',
  },
}));

// Apply machine learning later
const calculateCost = (w, d) => {
  return w * 5 + (d / 10.0)
}

function Parcel(props) {

  const [parcel, setParcelInfo] = useState({
    weight: 0,
    dimension: 0,
    cost: 0
  });

  // Handle cost update 
  useEffect(() => {
    //effect
    console.log("Effect1");
    setParcelInfo(prev => {
      return ({
        ...prev, cost: calculateCost(parcel.weight, parcel.dimension)
      })
    });
    //cleanup
    //empty
    //input
  }, [parcel.weight, parcel.dimension]);


  // Handle prop
  useEffect(() => {
    console.log("Effect2");
    props.setParcelInfo(parcel)
  }, [parcel])

  function handleChange(event) {
    const { id, value } = event.target;
    // Handle weight & dimension events
    setParcelInfo(prev => {
      return {
        ...prev,
        [id]: parseFloat(value)
      };
    });
  }

  const classes = useStyles();
  return (
    <div>
      <TextField
        type="number"
        label="Parcel weight"
        id="weight"
        className={clsx(classes.margin, classes.textField)}
        InputProps={{
          startAdornment: <InputAdornment position="start">(kg)</InputAdornment>,
          error: parcel.weight < 0 ? true : false,
        }}
        helperText={parcel.weight < 0 ? "Don't do this!" : ""}
        variant="outlined"
        onChange={handleChange}
        value={parcel.weight}
      />
      <TextField
        type="number"
        label="Parcel dimension"
        id="dimension"
        className={clsx(classes.margin, classes.textField)}
        InputProps={{
          startAdornment: <InputAdornment position="start">(cm.)</InputAdornment>,
          error: parcel.dimension < 0 ? true : false,
        }}
        helperText={parcel.dimension < 0 ? "Don't do this!" : "Width + Height + Depth"}
        variant="outlined"
        onChange={handleChange}
        value={parcel.dimension}
      />
      <TextField
        disabled
        label="THB"
        id="cost"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        helperText="Weight*5 + Dimension/10"
        value={parcel.cost}
      />
    </div>
  );
}

export default Parcel;




