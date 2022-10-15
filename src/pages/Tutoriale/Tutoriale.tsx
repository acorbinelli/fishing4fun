import { Box, Fade, Paper, Slide, Badge } from "@mui/material";
import useMobileDetect from "hooks/useMobileDetect";
import Card from "./components/Card";
import { useCallback, useState, FC, useEffect } from "react";
import { Tutorial } from "types/videoItemTypes";
import VideoComponent from "./components/VideoComponent";
import { videos } from "mocks/Tutorials/videos";
import useScrollBarStyle from "shared/useScrollBarStyle";

const Tutoriale: FC = () => {
  const { isSmall } = useMobileDetect();
  const scrollBarStyle = useScrollBarStyle();
  const [selectedCard, setSelectedCard] = useState<Tutorial | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<Number | null>(null);
  const [momeliCount, setMomeliCount] = useState<number>(0);
  const [monturiCount, setMonturiCount] = useState<number>(0);
  const [reteteCount, setReteteCount] = useState<number>(0);

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

  useEffect(() => {
    let newMomeliCount: number = 0;
    let newMonturiCount: number = 0;
    let newReteteCount: number = 0;

    videos.forEach((video) => {
      switch (video.tutorialType) {
        case Tutorial.MOMEALA: {
          newMomeliCount++;
          return;
        }
        case Tutorial.MONTURA: {
          newMonturiCount++;
          return;
        }
        case Tutorial.RETETA_CULINARA: {
          newReteteCount++;
          return;
        }
        default:
          return;
      }
    });

    setMomeliCount(newMomeliCount);
    setMonturiCount(newMonturiCount);
    setReteteCount(newReteteCount);
    // eslint-disable-next-line
  }, [videos]);

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
        zIndex: 100,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: selectedCard === null ? "row" : isSmall ? "row" : "column",
          justifyContent: "center",
        }}
      >
        <Badge
          sx={{ "& .MuiBadge-badge": { right: "10%", top: 2, fontWeight: 900, fontSize: 15, color: "primary.main" } }}
          color="warning"
          badgeContent={momeliCount}
        >
          <Card
            buttonText="momeli"
            tutorialType={Tutorial.MOMEALA}
            selectedCard={selectedCard}
            onSelect={onCardSelect}
          />
        </Badge>
        <Badge
          sx={{ "& .MuiBadge-badge": { right: "10%", top: 2, fontWeight: 900, fontSize: 15, color: "primary.main" } }}
          color="warning"
          badgeContent={monturiCount}
        >
          <Card
            buttonText="monturi"
            tutorialType={Tutorial.MONTURA}
            selectedCard={selectedCard}
            onSelect={onCardSelect}
          />
        </Badge>
        <Badge
          sx={{ "& .MuiBadge-badge": { right: "12%", top: 2, fontWeight: 900, fontSize: 15, color: "primary.main" } }}
          color="warning"
          badgeContent={reteteCount}
        >
          <Card
            buttonText="retete culinare"
            tutorialType={Tutorial.RETETA_CULINARA}
            selectedCard={selectedCard}
            onSelect={onCardSelect}
          />
        </Badge>
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
            ...scrollBarStyle,
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
