import { Box, Typography, Button, Slide, Paper, Fade } from "@mui/material";
import useMobileDetect from "hooks/useMobileDetect";
import PhishingIcon from "@mui/icons-material/Phishing";
import SetMealIcon from "@mui/icons-material/SetMeal";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useState, FC, useMemo } from "react";
import { Tutorial } from "types/videoItemTypes";

interface Props {
  buttonText: string;
  tutorialType: Tutorial;
  selectedCard: Tutorial | null;
  onSelect: (tutorial: Tutorial) => void;
}

const Card: FC<Props> = ({ buttonText, tutorialType, selectedCard, onSelect }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const cardIcon = useMemo(() => {
    switch (tutorialType) {
      case Tutorial.MONTURA:
        return <PhishingIcon sx={{ fontSize: 200, color: "primary.light" }} />;
      case Tutorial.MOMEALA:
        return <SetMealIcon sx={{ fontSize: 200, color: "primary.light" }} />;
      case Tutorial.RETETA_CULINARA:
        return <MenuBookIcon sx={{ fontSize: 200, color: "primary.light" }} />;
      default:
        return <></>;
    }
  }, [tutorialType]);

  return (
    <Fade
      in={selectedCard === tutorialType || selectedCard === null}
      unmountOnExit
      mountOnEnter
      timeout={{ enter: 1200, exit: 0 }}
    >
      <Paper
        elevation={isHovering ? 2 : 10}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        sx={{
          display: "flex",
          overflow: "hidden",
          flexDirection: "column",
          alignItems: "center",
          mr: 2,
          background: "linear-gradient(162deg, rgba(6,25,51,1) 0%, rgba(6,25,51,0.9) 39%, rgba(140,189,255,0) 67%)",
        }}
      >
        <Button
          onClick={() => onSelect(tutorialType)}
          variant="text"
          color="primary"
          sx={{ flexDirection: "column", width: "100%", height: "100%" }}
        >
          {cardIcon}

          <Box
            sx={{
              width: "100%",
              backgroundColor: "warning.main",
              px: 2,
            }}
          >
            <Typography variant="h5" sx={{ textAlign: "center", color: "primary", letterSpacing: 3, fontWeight: 500 }}>
              {buttonText.toUpperCase()}
            </Typography>
          </Box>
        </Button>
      </Paper>
    </Fade>
  );
};

export default Card;
