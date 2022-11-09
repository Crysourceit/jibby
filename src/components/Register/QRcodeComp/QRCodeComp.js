import { Redirect } from 'react-router';
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Animated from "./chicken.svg";
const QRCode = require('qrcode.react');

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


export default function QRCodeComp(props) {

  const [isClicked, setisClicked] = useState(false);

  // const handleClickOpen = () => {
  //   props.setOpen(props.open);
  // };
  const handleClose = () => {
    props.setOpen(false);
  };




  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Submit success!
          <object className="jibby-logo" style={{ height: '80px', width: '60px' }} type="image/svg+xml" data={Animated}>svg-animation</object>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            QR code for tracking your jibby parcel.
          </Typography>
          <div style={{ textAlign: 'center' }}>
            <div>
              <QRCode value={"http://139.59.124.21/track/" + props.jibbyTag} />
            </div>
            {isClicked && <Redirect
              to={{
                pathname: "/track",
                // search: "?params=" + props.jibbyTag,
                state: { jibbyTag: props.jibbyTag }
              }}
            />}
            <div>
              <a href="" onClick={() => { setisClicked(true) }}>Track</a>
              {/* <a href={"http://localhost:3000/track" + props.jibbyTag} >Click</a> */}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
