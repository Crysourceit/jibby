
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

  // // Handle cost update 
  useEffect(() => {
    // console.log("Effect");
    props.setParcelInfo(prev => {
      return ({
        ...prev, cost: calculateCost(props.parcelInfo.weight, props.parcelInfo.dimension)
      })
    });
  }, [props.parcelInfo.weight, props.parcelInfo.dimension]);

  function handleChange(event) {
    const { id, value } = event.target;
    // Handle weight & dimension events
    props.setParcelInfo(prev => {
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
          error: props.parcelInfo.weight < 0 ? true : false,
        }}
        helperText={props.parcelInfo.weight < 0 ? "Don't do this!" : ""}
        variant="outlined"
        onChange={handleChange}
        value={props.parcelInfo.weight}
      />
      <TextField
        type="number"
        label="Parcel dimension"
        id="dimension"
        className={clsx(classes.margin, classes.textField)}
        InputProps={{
          startAdornment: <InputAdornment position="start">(cm.)</InputAdornment>,
          error: props.parcelInfo.dimension < 0 ? true : false,
        }}
        helperText={props.parcelInfo.dimension < 0 ? "Don't do this!" : "Width + Height + Depth"}
        variant="outlined"
        onChange={handleChange}
        value={props.parcelInfo.dimension}
      />
      <TextField
        disabled
        label="THB"
        id="cost"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        helperText="Weight*5 + Dimension/10"
        value={props.parcelInfo.cost}
      />
    </div>
  );
}

export default Parcel;




