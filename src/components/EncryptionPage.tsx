import { useState, useEffect } from "react";

import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core";

import useGeneratedWallet from "../hooks/useGeneratedWallet";

const useStyles = makeStyles(() => ({
  aligned: { width: "100%", textAlign: "center" },
}));

function EncryptionPage() {
  const classes = useStyles();

  const [pinCode, setPinCode] = useState<string>("");
  const [pinCodeConfirmation, setPinCodeConf] = useState<string>("");

  useGeneratedWallet([pinCode, pinCodeConfirmation]);

  const handleChangePinCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setPinCode(e.target.value as unknown as string);
  };

  const handleChangePinCodeConf = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setPinCodeConf(e.target.value as unknown as string);
  };

  return (
    <Container maxWidth="sm">
      <Box className={classes.aligned}>
        <Typography>
          <b>Activate PIN-Protected BTC wallet</b>
        </Typography>
        <Typography>Pick a PIN Code</Typography>
      </Box>

      <Divider style={{ margin: 10 }} />

      <form noValidate autoComplete="off">
        <Box className={classes.aligned} style={{ margin: 15 }}>
          <TextField
            name="pin-code"
            label="Your PIN code"
            variant="outlined"
            fullWidth
            type="password"
            onChange={handleChangePinCode}
          />
        </Box>
        <Box className={classes.aligned} style={{ margin: 15 }}>
          <TextField
            name="pin-code-confirm"
            label="Confirm your PIN code"
            variant="outlined"
            fullWidth
            type="password"
            onChange={handleChangePinCodeConf}
            error={pinCode !== pinCodeConfirmation}
          />
        </Box>
      </form>
    </Container>
  );
}

export default EncryptionPage;
