import { Box } from "@mui/material";
import IntroText from "shared/components/IntroText";

const Info = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", height: "100%" }}>
      <IntroText title="Info" subtitle="" position="top" />
      <Box>MAIN</Box>
    </Box>
  );
};

export default Info;
