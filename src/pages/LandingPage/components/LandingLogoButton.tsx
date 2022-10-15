import { IconButton,useTheme } from "@mui/material";
import Logo from "images/logo/avatar.png";
import { useSpring, animated } from "react-spring";
import { useCallback, useEffect, FC } from "react";
import useMobileDetect from "hooks/useMobileDetect";

interface Props {
  onLogoClick: () => void;
}

const LandingLogoButton: FC<Props> = ({ onLogoClick }) => {
  const { isSmall } = useMobileDetect();
  const theme = useTheme()
  const [landingLogoSpring, landingLogoApi] = useSpring(() => ({
    from: {
      width:theme.spacing(isSmall ? 30 : 50),
      height: theme.spacing(isSmall ? 30 : 50),
      rotateY: 0,
      rotateX: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      filter: "drop-shadow(-1px 6px 13px rgba(0, 0, 0, .5))",
    },
    config: { mass: 5, tension: 350, friction: 40, bounce: 1 },
  }));

  const onLandingLogoHover = useCallback(async () => {
    await Promise.all(
      landingLogoApi.start({
        to: [{ rotateY: 20, rotateX: 2, y: -20, filter: "drop-shadow(21px 11px 13px rgba(0, 0, 0, .5))" }],
        from: {
          rotateY: 0,
          rotateX: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          filter: "drop-shadow(-1px 6px 13px rgba(0, 0, 0, .5))",
        },
        config: { mass: 5, tension: 350, friction: 40, bounce: 1 },
      })
    );
  }, [landingLogoApi]);

  const onLandingLogoLeave = useCallback(async () => {
    landingLogoApi.start({
      loop: true,
      to: [
        { rotateY: -20, rotateX: 2, y: 0, filter: "drop-shadow(21px 11px 13px rgba(0, 0, 0, .5))" },
        { rotateY: 0, rotateX: 0, y: 0, filter: "drop-shadow(-1px 6px 13px rgba(0, 0, 0, .5))" },
      ],
      from: {
        rotateY: 0,
        rotateX: 0,
        y: 0,
        filter: "drop-shadow(-1px 6px 13px rgba(0, 0, 0, .5))",
      },
      config: { mass: 5, tension: 350, friction: 40, bounce: 1 },
    });
  }, [landingLogoApi]);

  useEffect(() => {
    landingLogoApi.start({
      loop: true,
      to: [
        { rotateY: -20, rotateX: 2, y: 0, filter: "drop-shadow(21px 11px 13px rgba(0, 0, 0, .5))" },
        { rotateY: 0, rotateX: 0, y: 0, filter: "drop-shadow(-1px 6px 13px rgba(0, 0, 0, .5))" },
      ],
      from: {
        rotateY: 0,
        rotateX: 0,
        y: 0,
        filter: "drop-shadow(-1px 6px 13px rgba(0, 0, 0, .5))",
      },
      config: { mass: 5, tension: 350, friction: 40, bounce: 1 },
    });
    // eslint-disable-next-line
  }, []);

  return (
    <IconButton
      onClick={onLogoClick}
      color="primary"
      onMouseOver={onLandingLogoHover}
      onMouseOut={onLandingLogoLeave}
      sx={{
        width: (theme) => theme.spacing(isSmall ? 30 : 50),
        height: (theme) => theme.spacing(isSmall ? 15 : 35),
      }}
    >
      <animated.img style={landingLogoSpring} src={Logo} />
    </IconButton>
  );
};

export default LandingLogoButton;
