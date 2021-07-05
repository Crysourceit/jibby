import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import "./TrackStepper.css";

const useStyles = makeStyles((theme) => ({
  root: {
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  stepper: {
    flexDirection: 'column-reverse'
  }
}));

function getSteps() {
  return ['Received', 'Local Hub', 'Out for deliver', 'Success'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `รับเข้าระบบ`;
    case 1:
      return 'พัสดุอยู่ที่ Local Hub';
    case 2:
      return `กำลังจัดส่ง`;
    case 3:
      return `จัดส่งสำเร็จ`;
    default:
      return 'Unknown step';
  }
}

export default function TrackStepper(props) {
  const classes = useStyles();

  // currentStep from database
  const [currentStep, setCurrentStep] = useState(props.currentStep === 3 ? 4 : props.currentStep);

  // activeStep within stepper
  const [activeStep, setActiveStep] = useState(currentStep);
  const steps = getSteps();

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleReset = (index) => {
    if (index <= currentStep) {
      setActiveStep((prev) => {
        return index
      });
    }
  }

  return (
    <div className={clsx(classes.root, "stepper")}>
      <Stepper className={clsx(classes.stepper, "stepper-box")} activeStep={activeStep} orientation="vertical" >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel className="stepper-label" onClick={() => { handleReset(index) }}>{label}</StepLabel>
            <StepContent>
              <Typography >{getStepContent(index)}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}



