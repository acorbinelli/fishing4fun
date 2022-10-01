import { Box } from "@mui/material";
import IntroText from "shared/components/IntroText";
const Contact = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", height: "100%" }}>
      <IntroText title="Contact" subtitle="" position="top" />
      <Box>MAIN</Box>
    </Box>
  );
};

export default Contact;
