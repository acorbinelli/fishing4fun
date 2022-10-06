import { Box } from "@mui/material";
import { useCallback } from "react";
import IntroText from "shared/components/IntroText";
import LandingLogoButton from "./components/LandingLogoButton";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const onLogoClick = useCallback(() => {
    navigate("/Acasa");
  }, [navigate]);

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection:'column',
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <LandingLogoButton onLogoClick={onLogoClick} />
      <IntroText title="Fishing4Fun" subtitle="Bun venit pe site-ul nostru" hideAtEnd position="bottom" />
    </Box>
  );
};

export default LandingPage;
