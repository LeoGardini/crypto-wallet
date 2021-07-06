import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

function ProcedureInfo() {
  return (
    <Container maxWidth="sm">
      <Box style={{ display: "flex", width: "100%" }}>
        <Typography align="center">
          <b>To activate 2fa you must save secret phrase (12 words).</b>
        </Typography>
      </Box>

      <Box style={{ display: "flex", width: "100%" }}>
        <Typography align="center">
          Please save your secret phrase (12 words)!
        </Typography>
      </Box>
    </Container>
  );
}

export default ProcedureInfo;
