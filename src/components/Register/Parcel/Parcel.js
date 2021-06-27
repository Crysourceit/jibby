
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

function Parcel(props) {

  const [parcel, setParcel] = useState({
    weight: 0,
    dimension: 0,
    cost: 0
  });

  const [cost, setCost] = useState(0);

  const calculateCost = (w, d) => {
    return w * 5 + (d / 10.0)
  }

  function handleChange(event) {
    const { id, value } = event.target;

    setParcel(prev => {
      return {
        ...prev,
        [id]: parseFloat(value)
      };
    });

    //TEMP VALUE TO HANDLE 
    let calCost = 0
    if (id === "weight") {
      calCost = calculateCost(value, parcel.dimension)
      setCost(calCost)
      props.setParcelInfo({ weight: value, dimension: parcel.dimension, cost: calCost })
    }
    else if (id === "dimension") {
      calCost = calculateCost(parcel.weight, value)
      setCost(calCost)
      props.setParcelInfo({ weight: parcel.weight, dimension: value, cost: calCost })
    }

    setParcel(prev => {
      return {
        ...prev, cost: parseFloat(calCost)
      }
    });

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
        value={cost}
        helperText="Weight*5 + Dimension/10"
      />
    </div>
  );
}

export default Parcel;




