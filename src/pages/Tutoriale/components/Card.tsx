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
  const { isSmall } = useMobileDetect();

  const cardIcon = useMemo(() => {
    switch (tutorialType) {
      case Tutorial.MONTURA:
        return <PhishingIcon sx={{ fontSize: isSmall ? 50 : 120, color: "primary.light" }} />;
      case Tutorial.MOMEALA:
        return <SetMealIcon sx={{ fontSize: isSmall ? 50 : 120, color: "primary.light" }} />;
      case Tutorial.RETETA_CULINARA:
        return <MenuBookIcon sx={{ fontSize: isSmall ? 50 : 120, color: "primary.light" }} />;
      default:
        return <></>;
    }
  }, [tutorialType, isSmall]);

  return (
    <Fade in timeout={{ enter: 1200, exit: 0 }}>
      <Paper
        elevation={isHovering ? 2 : isSmall ? 11 : 10}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        sx={{
          overflow: "hidden",
          mr: isSmall ? 0.5 : 2,
          mb: 2,
          height: "100%",
          background: "linear-gradient(162deg, rgba(6,25,51,1) 0%, rgba(6,25,51,0.9) 39%, rgba(140,189,255,0) 67%)",
        }}
      >
        <Button
          onClick={() => onSelect(tutorialType)}
          variant="text"
          color="primary"
          sx={{
            flexDirection: "column",
            width: "100%",
            height: "100%",
            p: 0,
            opacity: selectedCard !== tutorialType ? (selectedCard === null ? 1 : 0.5) : 1,
          }}
        >
          {cardIcon}

          <Box
            sx={{
              width: "100%",
              backgroundColor: "warning.main",
              mt: 2,
            }}
          >
            <Typography
              variant={isSmall ? "body1" : "h5"}
              sx={{ px: 1, color: "primary", letterSpacing: isSmall ? 0:3, fontWeight: 500,whiteSpace:"pre" }}
            >
              {buttonText.toUpperCase()}
            </Typography>
          </Box>
        </Button>
      </Paper>
    </Fade>
  );
};

export default Card;
