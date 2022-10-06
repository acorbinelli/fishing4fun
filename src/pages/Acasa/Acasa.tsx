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
    <>
      <animated.div style={{ ...pictureSpring, position: "absolute", width: "100%", height: "100%", zIndex: 3 }} />
      <IntroText title="Acasa" subtitle="" position="top" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 22,
          px: 4,
          pl: isSmall ? 5 : 30,
        }}
      >
        <Typography
          variant={isSmall ? "h5" : "h3"}
          sx={{
            color: "primary.light",
            textAlign: "left",
            width:'100%',
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
            width:'100%',
          }}
        >
          Veți descoperi pescuitul sportiv cu tehnici și echipamente specifice Dunării, locuri mirifice de pescuit
          într-o natură absolut unică în lume, partide de pescuit în familie și cu prietenii, rețete de mâncare cu pește
          tradiționale și nu în ultimul rând locuri de cazare aflate în apropierea Dunării.
        </Typography>
      </Box>
    </>
  );
};

export default Acasa;
