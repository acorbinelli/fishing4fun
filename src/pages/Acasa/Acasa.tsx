import { Box, Typography, useMediaQuery, useTheme, Paper } from "@mui/material";
import IntroText from "shared/components/IntroText";
import Background from "images/backgrounds/ieselnita.jpeg";
import { useSpring, animated, SpringValues, SpringRef } from "react-spring";

const Acasa = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));
  const [pictureSpring, pictureSpringAPI] = useSpring(() => ({
    to: {
      clipPath: isSmall ? "polygon(0 0, 100% 0, 100% 31%, 0% 100%)" : "polygon(0 0, 100% 0, 100% 50%, 0% 100%)",
      opacity: 0.4,
      backgroundImage: `url(${Background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: 1,
    },
    from: {
      clipPath: "polygon(0 0, 0% 0, 0% 0%, 0% 0%)",
      opacity: 0,
      backgroundImage: `url(${Background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: 1,
    },
    config: { mass: 30, tension: 150, friction: 140 },
  }));
  return (
    <Box sx={{ height: "100%", overflowY: "auto", zIndex: 2, width: "100%" }}>
      <animated.div style={{ ...pictureSpring, position: "absolute", width: "100%", height: "100%" }} />
      <IntroText title="Acasa" subtitle="" position="top" />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: isSmall ? "flex-start" : "flex-end",
            px: 4,
            mt: (theme) => theme.spacing(15),
            mb: (theme) => theme.spacing(5),
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "primary.light",
              textAlign: isSmall ? "left" : "right",
              maxWidth: isSmall ? "80%" : "52%",
              zIndex: 2,
            }}
          >
            Fishing 4 Fun își propune să vă poarte într-o călătorie fascinantă pe Dunăre.
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: isSmall ? "flex-start" : "flex-end",
            px: 4,
            mb: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "primary.light",
              textAlign: isSmall ? "left" : "right",
              maxWidth: isSmall ? "80%" : "42%",
              zIndex: 2,
            }}
          >
            Pescuit din plăcere: materiale video cu partide de pescuit, locuri de pescuit , monturi, momeli, idei
            practice.
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: isSmall ? "flex-start" : "flex-end",
            px: 4,
            mb: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "primary.light",
              textAlign: isSmall ? "left" : "right",
              maxWidth: isSmall ? "80%" : "42%",
              zIndex: 2,
            }}
          >
            Cele mai potrivite bețe, mulinete, cârlige, momeli, precum și alte echipamente pentru pescuit.
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: isSmall ? "flex-start" : "flex-end",
            px: 4,
            mb: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "primary.light",
              textAlign: isSmall ? "left" : "right",
              maxWidth: isSmall ? "80%" : "42%",
              zIndex: 2,
            }}
          >
            Cazare pentru toate gusturile, facilități, mâncare cu pește, rețete tradiționale și sfaturi de la bucătari.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Acasa;
