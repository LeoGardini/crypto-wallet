import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import Step from "@material-ui/core/Step";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";

interface ISteps {
  id: number;
  description: string;
  component: React.ReactElement;
}

const steps: ISteps[] = [
  {
    id: 1,
    description: "Procedure information",
    component: (
      <div>
        <p>Test</p>
      </div>
    ),
  },
  {
    id: 2,
    description: "Mnemonic generation",
    component: (
      <div>
        <p>Test</p>
      </div>
    ),
  },
  {
    id: 3,
    description: "Mnemonic confirmation",
    component: (
      <div>
        <p>Test</p>
      </div>
    ),
  },
  {
    id: 4,
    description: "Encryption password request",
    component: (
      <div>
        <p>Test</p>
      </div>
    ),
  },
  {
    id: 5,
    description: "Result of generated wallet",
    component: (
      <div>
        <p>Test</p>
      </div>
    ),
  },
];

export default function WalletStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepSkipped = (step: number) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleReset = () => setActiveStep(0);

  return (
    <Box style={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          const stepProps: { completed?: boolean } = {};
          if (isStepSkipped(index)) stepProps.completed = false;
          return (
            <Step key={step.id} {...stepProps}>
              <StepLabel>{step.description}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {steps[activeStep].component}
      {activeStep === steps.length ? (
        <>
          <Typography>All steps completed - you're finished</Typography>
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <Box style={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>RESET</Button>
          </Box>
        </>
      ) : (
        <>
          <Typography>STEP {activeStep + 1}</Typography>
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              BACK
            </Button>
            <Box style={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "FINISH" : "NEXT"}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
