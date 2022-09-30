import { Box, Button, Typography, useMediaQuery, useTheme, IconButton, Fade } from "@mui/material";
import { F4F_BLUE_DEFAULT } from "theme";
import Logo from "images/logo/avatar.png";
import Menu from "images/svgs/menuSVG.svg";
import { useSpring, animated, SpringValues, SpringRef } from "react-spring";
import { useCallback, useEffect, useState } from "react";

const Acasa = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const [isLogoClicked, setIsLogoClicked] = useState<boolean>(false);

  const [landingLogoSpring, landingLogoApi] = useSpring(() => ({
    loop: true,
    to: [
      { rotateY: 20, rotateX: 2, y: -20, filter: "drop-shadow(21px 11px 13px rgba(0, 0, 0, .5))" },
      { rotateY: 0, rotateX: 0, y: 0, filter: "drop-shadow(-1px 6px 13px rgba(0, 0, 0, .5))" },
    ],
    from: {
      rotateY: 0,
      rotateX: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      filter: "drop-shadow(-1px 6px 13px rgba(0, 0, 0, .5))",
    },
    config: { mass: 5, tension: 350, friction: 40, bounce: 1 },
  }));
  const [navLogoSpring] = useSpring(
    useCallback(
      () => ({
        to: [
          { rotateY: 180, scale: 2 },
          { rotateY: 0, scale: 1 },
        ],
        from: { rotateY: 0, scale: 1, filter: "drop-shadow(-1px 6px 3px rgba(0, 0, 0, .5))" },
        config: { duration: 1500 },
      }),
      []
    )
  );

  const onLogoClick = useCallback(async () => {
    if (!isLogoClicked) {
      setTimeout(async () => {
        setIsLogoClicked(true);
      }, 1000);
      landingLogoApi.stop();
      await Promise.all(landingLogoApi.start({ rotateX: 90, rotateY: 90, y: 10, scale: 0.4, opacity: 0 }));
      await Promise.all(landingLogoApi.start({ rotateX: 0, rotateY: 0, y: 0, opacity: 1 }));
    }
  }, [isLogoClicked]);

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      {!isLogoClicked && (
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box sx={{ flex: 0 }}>
            <IconButton onClick={onLogoClick} color="primary">
              <animated.img style={landingLogoSpring} src={Logo} />
            </IconButton>
          </Box>
        </Box>
      )}
      <Fade in={isLogoClicked} unmountOnExit mountOnEnter>
        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,0.5)",
            width:'100%',
            height:"100%"
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: (theme) => theme.spacing(10),
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",

              px: 3,
            }}
          >
            <IconButton color="primary" sx={{ pl: 2 }}>
              <animated.img style={navLogoSpring} src={Logo} width={200} height={200} />
            </IconButton>
            <Box sx={{ mt: 3, ml: 2, display: "flex", flexDirection: "column" }}>
              <Button
                size="large"
                color="primary"
                variant="text"
                sx={{
                  color: "white",
                  mb: 3,
                }}
              >
                <Box sx={{ width: 180, height: 30, display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Typography sx={{ letterSpacing: 5 }}>DUNAREA</Typography>
                </Box>
              </Button>
            </Box>
            <Box sx={{ mt: 3, ml: 2, display: "flex", flexDirection: "column" }}>
              <Button
                size="large"
                color="primary"
                variant="text"
                sx={{
                  color: "white",
                  mb: 3,
                }}
              >
                <Box sx={{ width: 180, height: 30, display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Typography sx={{ letterSpacing: 5 }}>DUNAREA</Typography>
                </Box>
              </Button>
            </Box>
            <Box sx={{ mt: 3, ml: 2, display: "flex", flexDirection: "column" }}>
              <Button
                size="large"
                color="primary"
                variant="text"
                sx={{
                  color: "white",
                  mb: 3,
                }}
              >
                <Box sx={{ width: 180, height: 30, display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Typography sx={{ letterSpacing: 5 }}>DUNAREA</Typography>
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default Acasa;
