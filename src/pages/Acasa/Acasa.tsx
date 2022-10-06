import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import IntroText from "shared/components/IntroText";
import Background from "images/backgrounds/bg1.jpg";
import { useSpring, animated } from "react-spring";

const Acasa = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [pictureSpring] = useSpring(() => ({
    to: {
      clipPath: isSmall ? "polygon(0 0, 100% 0, 100% 31%, 0% 100%)" : "polygon(0 0, 100% 0, 100% 50%, 0% 100%)",
      opacity: 0.4,
      backgroundImage: `url(${Background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: 1,
    },
    from: {
      clipPath: isSmall ? "polygon(0 0, 100% 0, 100% 31%, 0% 100%)" : "polygon(0 0, 100% 0, 100% 50%, 0% 100%)",
      opacity: 0,
      backgroundImage: `url(${Background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: 1,
    },
    config: { mass: 2, tension: 300, friction: 40, bounce: 1 },
  }));
  return (
    <Box sx={{ height: "100%", overflowY: "auto", zIndex: 2, width: "100%", position: "relative" }}>
      <animated.div style={{ ...pictureSpring, position: "absolute", width: "100%", height: "100%", zIndex: 3 }} />
      <IntroText title="Acasa" subtitle="" position="top" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          position: "absolute",
          top: isSmall ? "60%" : "50%",
          transform: "translateY(-50%)",
          zIndex: 22,
          px: 4,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "primary.light",
            textAlign: isSmall ? "left" : "right",
            zIndex: 2,
            maxWidth: isSmall ? "100%" : `calc(100% - ${theme.spacing(25)})`,
          }}
        >
          Fishing 4 Fun vă va purta într-o călătorie fascinantă pe Dunăre.
        </Typography>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: isSmall ? "flex-start" : "flex-end",
            mb: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "primary.light",
              textAlign: isSmall ? "left" : "right",
              zIndex: 2,
              maxWidth: isSmall ? "100%" : `calc(100% - ${theme.spacing(35)})`,
            }}
          >
            Veți descoperi pescuitul sportiv cu tehnici și echipamente specifice Dunării, locuri mirifice de pescuit
            într-o natură absolut unică în lume, partide de pescuit în familie și cu prietenii, rețete de mâncare cu
            pește tradiționale și nu în ultimul rând locuri de cazare aflate în apropierea Dunării.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Acasa;
