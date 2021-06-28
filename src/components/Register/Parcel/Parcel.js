
import React, { useState } from 'react'
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

  function handleChange(event) {
    const { id, value } = event.target;

    // Handle weight & dimension events
    setParcelInfo(prev => {
      return {
        ...prev,
        [id]: parseFloat(value)
      };
    });

    //Temp value to save cost 
    let calCost = 0
    calCost = calculateCost(id === "weight" ? value : parcel.weight, id === "weight" ? parcel.dimension : value)

    const temp_obj = {
      weight: id === "weight" ? value : parcel.weight,
      dimension: id === "weight" ? parcel.dimension : value,
      cost: calCost,
    }

    props.setParcelInfo(temp_obj)
    setParcelInfo(temp_obj)
  }

  const classes = useStyles();
  return (
    <div>
      <TextField
        label="Parcel weight"
        id="weight"
        className={clsx(classes.margin, classes.textField)}
        InputProps={{
          startAdornment: <InputAdornment position="start">(kg)</InputAdornment>,
        }}
        variant="outlined"
        onChange={handleChange}
        value={parcel.weight}
      />
      <TextField
        label="Parcel dimension"
        id="dimension"
        className={clsx(classes.margin, classes.textField)}
        InputProps={{
          startAdornment: <InputAdornment position="start">(cm.)</InputAdornment>,
        }}
        variant="outlined"
        helperText="Width + Height + Depth"
        onChange={handleChange}
        value={parcel.dimension}
      />
      <TextField
        disabled
        label={"THB"}
        id="cost"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        value={parcel.cost}
        helperText="Weight*5 + Dimension/10"
      />
    </div>
  );
}

export default Parcel;




