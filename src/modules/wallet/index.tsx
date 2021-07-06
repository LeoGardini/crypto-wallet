import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import Step from "@material-ui/core/Step";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";

import ProcedureInfo from "./components/ProcedureInfo";
import EncryptionPage from "./components/EncryptionPage";
import GeneratedWallet from "./components/GeneratedWallet";
import MnemonicGeneration from "./components/MnemonicGeneration";
import MnemonicConfirmation from "./components/MnemonicConfirmation";

interface ISteps {
  description: string;
  component: React.ReactElement;
}

const steps: ISteps[] = [
  {
    description: "Procedure information",
    component: <ProcedureInfo />,
  },
  {
    description: "Mnemonic generation",
    component: <MnemonicGeneration />,
  },
  {
    description: "Mnemonic confirmation",
    component: <MnemonicConfirmation />,
  },
  {
    description: "Encryption password request",
    component: <EncryptionPage />,
  },
  {
    description: "Result of generated wallet",
    component: <GeneratedWallet />,
  },
];

export default function WalletStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const handleReset = () => setActiveStep(0);
  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <Box style={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          return (
            <Step key={index}>
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
      )}
    </Box>
  );
}
