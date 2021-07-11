import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  aligned: { textAlign: "center", width: "100%" },
}));

function ProcedureInfo() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Box className={classes.aligned}>
        <Typography>
          <b>To activate 2fa you must save secret phrase (12 words).</b>
        </Typography>
      </Box>

      <Box className={classes.aligned}>
        <Typography>Please save your secret phrase (12 words)!</Typography>
      </Box>

      <Divider style={{ margin: 10 }} />

      <Box className={classes.aligned}>
        <Typography>
          Now we will show you 12 words of your secret phrase.
        </Typography>
      </Box>
      <Box className={classes.aligned}>
        <Typography>
          If you lose it, we will not be able to restore your wallet.
        </Typography>
      </Box>
    </Container>
  );
}

export default ProcedureInfo;
