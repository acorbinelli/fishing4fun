import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useCallback, useEffect, FC } from "react";
import { Collapse } from "@mui/material";
import { useSpring, animated, SpringValues, SpringRef } from "react-spring";

interface Props {
  title: string;
  subtitle?: string;
  hideAtEnd?: boolean;
  position: "top" | "bottom";
}

const AnimatedIntro: FC<Props> = ({ title, subtitle, hideAtEnd, position }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));
  const [boundBoxSpring, boundBoxSpringAPI] = useSpring(() => ({
    from: { x: isSmall ? "10%" : "50%" },
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const [lineSpring, lineSpringAPI] = useSpring(() => ({
    from: { y: 200, x: 0 },
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const [titleSpring, titleSpringAPI] = useSpring(() => ({
    from: {
      y: 200,
      x: 0,
    },
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const [subtitleSpring, subtitleSpringApi] = useSpring(() => ({
    from: {
      y: 200,
      x: 0,
    },
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const startAnimation = useCallback(async () => {
    titleSpringAPI.start({ y: 0 });
    subtitleSpringApi.start({ y: 0 });
    lineSpringAPI.start({ y: 0 });
    setTimeout(() => {
      boundBoxSpringAPI.start({ x: "5%" });
    }, 1500);

    if (hideAtEnd) {
      setTimeout(() => {
        boundBoxSpringAPI.start({ x: isSmall ? "5%" : "50%" });
      }, 4000);
      setTimeout(() => {
        titleSpringAPI.start({ y: 200 });
        subtitleSpringApi.start({ y: 200 });
        lineSpringAPI.start({ y: 200 });
      }, 5000);
    }
  }, [titleSpringAPI, subtitleSpringApi, lineSpringAPI, boundBoxSpringAPI, hideAtEnd]);

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: position === "bottom" ? "10%" : !isSmall ? "89%" : `calc(100% - ${theme.spacing(8)})`,
        left: position === "bottom" ? "0%" : !isSmall ? "8%" : "0%",
        display: "flex",
        overflow: "hidden",
        width: "80%",
        zIndex: 2,
      }}
    >
      <animated.div style={boundBoxSpring}>
        <Box display="flex">
          <animated.div style={lineSpring}>
            <Box
              sx={{
                width: (theme) => theme.spacing(2),
                height: "100%",
                mr: 2,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  zIndex: 9,
                  backgroundColor: "primary.light",
                }}
              />
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "warning.main",
                  position: "absolute",
                  zIndex: 10,
                }}
              />
            </Box>
          </animated.div>
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Box sx={{ overflow: "hidden" }}>
              <animated.div style={titleSpring}>
                <Typography
                  variant={isSmall ? "h5" : "h3"}
                  sx={{ letterSpacing: 5, fontWeight: 500, color: "primary.light" }}
                >
                  {title.toUpperCase()}
                </Typography>
              </animated.div>
            </Box>

            <Box sx={{ overflow: "hidden" }}>
              <animated.div style={subtitleSpring}>
                <Typography variant={isSmall ? "h6" : "h4"} sx={{ fontWeight: 500, color: "warning.main" }}>
                  {subtitle?.toUpperCase()}
                </Typography>
              </animated.div>
            </Box>
          </Box>
        </Box>
      </animated.div>
    </Box>
  );
};

export default AnimatedIntro;
