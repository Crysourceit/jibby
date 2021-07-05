import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDialog-container": {
      // backgroundColor: 'red',
      // overflowX: 'hidden'
    },
    "& .MuiDialog-scrollPaper": {
      // backgroundColor: 'red',
      // overflowX: 'hidden'
    },
    // paddingRight: 0,
    // backgroundColor: 'red',
    // overflowX: 'hidden'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  dialogPaper: { overflowX: 'hidden', backgroundColor: 'blue', border: '10px solid red' }
}));

export default function EditDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(String(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditStatus = () => {
    // console.log("status")
    props.editStatus(props._id, status)
    setOpen(false);
    props.fetchReport(false);
  }


  return (
    <div>
      <button onClick={handleClickOpen}>Edit</button>
      <Dialog className={classes.root} open={open} onClose={handleClose}>
        {/* <Dialog className={classes.dialogClass} disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}> */}
        <DialogTitle>Set Status</DialogTitle>
        <DialogContent >
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Select..</InputLabel>
              <Select
                native
                value={status}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option disabled aria-label="None" value="" />
                <option value={"Success"}>Success</option>
                <option value={"Out for deliver"}>Out for deliver</option>
                <option value={"Local Hub"}>Local Hub</option>
                <option value={"Received"}>Received</option>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions >
          <Button onClick={handleEditStatus} color="primary">
            Ok
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}
