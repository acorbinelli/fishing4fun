import { Box, Typography, Fade } from "@mui/material";
import IntroText from "shared/components/IntroText";
import Background from "images/backgrounds/bg1.jpg";
import useMobileDetect from "hooks/useMobileDetect";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Acasa = () => {
  const { isSmall } = useMobileDetect();

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        pl: isSmall ? 0 : 20,
        flexDirection: "column",
        justifyContent: "center",
        zIndex: 30,
        position: "relative",
      }}
    >
      <Typography
        variant={isSmall ? "h5" : "h3"}
        sx={{
          color: "primary.light",
          textAlign: "left",
          width: "100%",
          mb: 2,
        }}
      >
        Fishing 4 Fun vă va purta într-o călătorie fascinantă pe Dunăre.
      </Typography>

      <Typography
        variant={isSmall ? "body1" : "h5"}
        sx={{
          color: "primary.light",
          textAlign: "left",
          width: "100%",
        }}
      >
        Veți descoperi pescuitul sportiv cu tehnici și echipamente specifice Dunării, locuri mirifice de pescuit într-o
        natură absolut unică în lume, partide de pescuit în familie și cu prietenii, rețete de mâncare cu pește
        tradiționale și nu în ultimul rând locuri de cazare aflate în apropierea Dunării.
      </Typography>
    </Box>
  );
};

export default Acasa;
