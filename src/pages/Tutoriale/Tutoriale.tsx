import { Box } from "@mui/material";
import IntroText from "shared/components/IntroText";

const Tutoriale = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", height: "100%" }}>
      <IntroText title="Tutoriale" subtitle="" position="top" />
      <Box>MAIN</Box>
    </Box>
  );
};

export default Tutoriale;
