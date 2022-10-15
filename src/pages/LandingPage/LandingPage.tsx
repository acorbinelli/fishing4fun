import { Box } from "@mui/material";
import { useCallback, useState, useEffect } from "react";
import IntroText from "shared/components/IntroText";
import LandingLogoButton from "./components/LandingLogoButton";
import { useNavigate } from "react-router-dom";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import { useSpring, animated } from "react-spring";

const LandingPage = () => {
  const navigate = useNavigate();
  const onLogoClick = useCallback(() => {
    navigate("/Acasa");
  }, [navigate]);
  const [showFinger, setShowFinger] = useState<boolean>(false);
  const [fingerSpring] = useSpring(() => ({
    loop: true,
    to: {
      y:40,
      scale: 1,
      opacity: 1,
      filter: "drop-shadow(-1px 6px 3px rgba(0, 0, 0, .5))",
    },
    from: {
      y:100,
      scale: 0.9,
      opacity: 0,
      filter: "drop-shadow(-1px 6px 3px rgba(0, 0, 0, .5))",
    },
    config: {  mass: 5, tension: 350, friction: 40, bounce: 1 },
  }));

  useEffect(() => {
    setTimeout(() => {
      setShowFinger(true);
    }, 10000);
  }, []);

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 100,
      }}
    >
      <LandingLogoButton onLogoClick={onLogoClick} />
      {showFinger && (
        <animated.div style={{...fingerSpring,position:'absolute',zIndex:1}} onClick={onLogoClick}>
          <PanToolAltIcon fontSize="large" color='warning'/>
        </animated.div>
      )}
      <IntroText
        title="Fishing4Fun"
        subtitle="Bun venit pe site-ul nostru"
        hideAtEnd
        position="bottom"
        toggleOpen={() => {}}
      />
    </Box>
  );
};

export default LandingPage;
