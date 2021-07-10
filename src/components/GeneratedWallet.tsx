import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core";

import useGeneratedWallet from "../hooks/useGeneratedWallet";

const useStyles = makeStyles(() => ({
  aligned: { width: "100%", textAlign: "center" },
}));

function GeneratedWallet() {
  const classes = useStyles();
  const wallet = useGeneratedWallet();

  return (
    <Container maxWidth="sm">
      <Box className={classes.aligned} style={{ margin: 15 }}>
        <Typography>This is your generated crypto wallet!</Typography>
      </Box>

      <Divider style={{ margin: 10 }} />

      <Box className={classes.aligned} style={{ margin: 15 }}>
        <TextField
          value={wallet}
          variant="outlined"
          fullWidth
          disabled
          multiline
        />
      </Box>
    </Container>
  );
}

export default GeneratedWallet;
