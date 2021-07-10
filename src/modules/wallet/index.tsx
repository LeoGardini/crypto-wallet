import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Step from "@material-ui/core/Step";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import StepLabel from "@material-ui/core/StepLabel";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core";

import ProcedureInfo from "../../components/ProcedureInfo";
import EncryptionPage from "../../components/EncryptionPage";
import GeneratedWallet from "../../components/GeneratedWallet";
import MnemonicGeneration from "../../components/MnemonicGeneration";
import MnemonicConfirmation from "../../components/MnemonicConfirmation";

interface IStep {
  description: string;
  component: React.ReactElement;
}

const steps: IStep[] = [
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

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 0.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "100px",
  },
  buttons: {
    width: "100%",
    height: "20vh",
    paddingBottom: 0,
    marginTop: theme.spacing(1),
  },
}));

export default function WalletStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleReset = () => setActiveStep(0);
  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <div className={classes.container}>
      <Container maxWidth="lg">
        <Card component={Paper}>
          <Stepper activeStep={activeStep} style={{ height: "100%" }}>
            {steps.map((step, index) => {
              return (
                <Step key={index}>
                  <StepLabel>{step.description}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <Box className={classes.container}>{steps[activeStep].component}</Box>
          <div className={classes.buttons}>
            {activeStep === steps.length ? (
              <>
                <Typography>All steps completed - you're finished</Typography>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "17vh",
                  }}
                >
                  <Box style={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>RESET</Button>
                </Box>
              </>
            ) : (
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: "15vh",
                }}
              >
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
          </div>
        </Card>
      </Container>
    </div>
  );
}
