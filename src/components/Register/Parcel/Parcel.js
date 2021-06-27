
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

  const [cost, setCost] = useState(0);
  const [weight, setWeight] = useState(0);
  const [dimension, setDimension] = useState(0);

  const calCulateCost = (w, d) => {
    return w * 5 + d / 10
  }


  //Refactor alert!  
  //Should combine this two function

  function handleWeight(e) {
    let w = parseFloat(e.target.value)
    setWeight(w)
    // DO THIS WAY
    setCost(calCulateCost(w, dimension))
    props.setParcelInfo({ weight: w, dimension: dimension, cost: cost })
    console.log(w)
    // CANNOT !
    // setCost(calCulateCost(weight, dimension))
  }

  function handleDim(e) {
    let d = parseFloat(e.target.value)
    setDimension(d)
    setCost(calCulateCost(weight, d))
    props.setParcelInfo({ weight: weight, dimension: d, cost: cost })
  }

  const classes = useStyles();
  return (
    <div>
      <TextField
        label="Parcel weight"
        id="parcelWeight"
        className={clsx(classes.margin, classes.textField)}
        InputProps={{
          startAdornment: <InputAdornment position="start">(kg)</InputAdornment>,
        }}
        variant="outlined"
        onChange={handleWeight}
        value={weight}
      />
      <TextField
        label="Parcel dimension"
        id="parcelDimension"
        className={clsx(classes.margin, classes.textField)}
        InputProps={{
          startAdornment: <InputAdornment position="start">(cm.)</InputAdornment>,
        }}
        variant="outlined"
        helperText="Width + Height + Depth"
        onChange={handleDim}
        value={dimension}
      />
      <TextField
        disabled
        label={"THB"}
        id="Cost"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        value={cost}
        helperText="Weight*5 + Dimension/10"
      />
    </div>
  );
}

export default Parcel;




