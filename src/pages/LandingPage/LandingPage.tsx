import { Box } from "@mui/material";
import { useCallback } from "react";
import IntroText from "shared/components/IntroText";
import LandingLogoButton from "./components/LandingLogoButton";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const onLogoClick = useCallback(() => {
    navigate("/Acasa");
  }, []);

  return (
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
      <IntroText title="Fishing4Fun" subtitle="Bun venit pe site-ul nostru" hideAtEnd position="bottom" />
      <LandingLogoButton onLogoClick={onLogoClick} />
    </Box>
  );
};

export default LandingPage;
