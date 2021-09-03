import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import StepOne from './StepOne';

const useStyles = makeStyles({
  root: {
    width: '50%',
    margin: '6rem auto',
    border: '1px solid #999',
    '& .MuiSvgIcon-root.MuiStepIcon-root.MuiStepIcon-active': {
      color: 'red',
    },
    '& .MuiSvgIcon-root.MuiStepIcon-root.MuiStepIcon-completed': {
      color: 'red',
    },
  },
});

const MultiStepForm = () => {
  const [activeStep, setActiveState] = useState(0);
  function getSteps() {
    return ['SignUp', 'ChoosePlan', 'Checkout'];
  }
  const handleNext = () => {
    setActiveState((prevActiveStep) => prevActiveStep + 1);
  };
  const steps = getSteps();
  console.log(steps);
  const getStepsContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <StepOne />;
      case 1:
        return 'Choose Plan';
      case 2:
        return 'step 3 checkout';
      default:
        return 'unknown step';
    }
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          'The Steps Completed'
        ) : (
          <>
            {getStepsContent(activeStep)}
            <Button onClick={handleNext}>{activeStep === steps.length ? 'Finish' : 'Next'}</Button>
          </>
        )}
      </>
    </div>
  );
};

export default MultiStepForm;
