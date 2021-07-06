import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { makeStyles, createStyles } from "@material-ui/core";

import useMnemonics from "../hooks/useMnemonics";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
  })
);

function MnemonicGeneration() {
  const classes = useStyles();
  const mnemonics = useMnemonics();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Box style={{ width: "100%", textAlign: "center" }}>
        <Typography>
          Write these words in the correct order and keep them in a safe place.
        </Typography>
      </Box>
      {mnemonics.map((mnemonic, index) => (
        <Chip
          key={index}
          variant="outlined"
          style={{ fontSize: 13 }}
          clickable
          label={mnemonic}
          icon={<p>{index + 1}</p>}
        />
      ))}
      <Box style={{ width: "100%", textAlign: "center" }}>
        <Typography>
          1. Write the phrase on paper.
          <br />
          2. Be sure to sign that this is the key to swaponline.io
        </Typography>
      </Box>
    </Container>
  );
}

export default MnemonicGeneration;
