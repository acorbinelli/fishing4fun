import { Box, Typography, Button, Fade, Paper, useTheme, Slide } from "@mui/material";
import useMobileDetect from "hooks/useMobileDetect";
import PhishingIcon from "@mui/icons-material/Phishing";
import SetMealIcon from "@mui/icons-material/SetMeal";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Card from "./components/Card";
import { useCallback, useState, FC } from "react";
import { Tutorial } from "types/videoItemTypes";
import ReactPlayer from "react-player";
import VideoComponent from "./components/VideoComponent";
import { videos } from "mocks/Tutorials/videos";

const Tutoriale: FC = () => {
  const { isSmall } = useMobileDetect();
  const theme = useTheme();
  const [selectedCard, setSelectedCard] = useState<Tutorial | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<Number | null>(null);

  const onCardSelect = useCallback(
    (tutorial: Tutorial) => {
      if (selectedCard === tutorial) {
        setSelectedCard(null);
      } else {
        setSelectedCard(tutorial);
      }
    },
    [selectedCard]
  );

  const onPlayVideo = useCallback((id: number) => {
    setPlayingVideoId(id);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: isSmall ? "column" : "row",
        pt: isSmall ? 5 : 0,
        zIndex:100,
        position:'relative'
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection:selectedCard===null ?"row":isSmall?"row":"column",
          justifyContent: "center",
        }}
      >
        <Card
          buttonText="monturi"
          tutorialType={Tutorial.MONTURA}
          selectedCard={selectedCard}
          onSelect={onCardSelect}
        />
        <Card buttonText="momeli" tutorialType={Tutorial.MOMEALA} selectedCard={selectedCard} onSelect={onCardSelect} />
        <Card
          buttonText="retete culinare"
          tutorialType={Tutorial.RETETA_CULINARA}
          selectedCard={selectedCard}
          onSelect={onCardSelect}
        />
      </Box>
      <Slide
        direction={isSmall ? "up" : "left"}
        in={selectedCard !== null}
        timeout={{ enter: 1200, exit: 0 }}
        mountOnEnter
        unmountOnExit
        onAnimationEnd={() => {
          console.log("ENDED");
        }}
      >
        <Paper
          sx={{
            display: "flex",
            overflow: "auto",
            flexDirection: "column",
            background: `linear-gradient(162deg, rgba(6,25,51,1) 0%, rgba(6,25,51,${isSmall ? 0.8 : 0.2}) 60% )`,
            py: 3,
            px: 2,
            my: isSmall ? 2 : 10,
            maxHeight: isSmall ? "60%" : "80%",
            flex: 1,
          }}
        >
          <Fade in timeout={2000} mountOnEnter unmountOnExit>
            <Box>
              {videos.map((video, index) => {
                if (video.tutorialType === selectedCard) {
                  return (
                    <VideoComponent
                      key={index}
                      play={playingVideoId === index}
                      id={index}
                      onPlay={onPlayVideo}
                      videoItem={video}
                    />
                  );
                }
                return null;
              })}
            </Box>
          </Fade>
        </Paper>
      </Slide>
    </Box>
  );
};

export default Tutoriale;
