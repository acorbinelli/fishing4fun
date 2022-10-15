import { Box, Typography, Button, Fade, Paper, useTheme } from "@mui/material";
import useMobileDetect from "hooks/useMobileDetect";
import PhishingIcon from "@mui/icons-material/Phishing";
import SetMealIcon from "@mui/icons-material/SetMeal";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useCallback, useState, FC } from "react";
import ReactPlayer from "react-player";
import { VideoItem } from "types/videoItemTypes";

interface Props {
  play: boolean;
  id: number;
  onPlay: (id: number) => void;
  videoItem: VideoItem;
}
const VideoComponent: FC<Props> = ({ play, onPlay, id, videoItem }) => {
  const { isSmall } = useMobileDetect();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        mb:1,
        flexDirection: isSmall ? "column" : "row",
      }}
    >
      <Box sx={{ height:isSmall? 200:270, flex: isSmall ? "initial" : 0.5 }}>
        <ReactPlayer
          style={{ flex: 0.5 }}
          height="100%"
          width="100%"
          controls
          light
          playing={play}
          onPlay={() => onPlay(id)}
          url={videoItem.url}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ ml: isSmall ? 0 : 3, flex: 1, borderBottom: "1px solid white", borderTop: "1px solid white", py: 2 }}
      >
        <Typography variant={isSmall ? "h6" : "h4"} sx={{ color: "primary.light", mb: 2, fontWeight: 600 }}>
          {videoItem.title}
        </Typography>
        {videoItem.description && (
          <Box display="flex" sx={{ mb: 2, flexDirection: isSmall ? "column" : "row" }}>
            <Typography
              variant={isSmall ? "h6" : "h5"}
              sx={{ color: "primary.light", mr: 2,mb:2, fontWeight: 600, lineHeight: isSmall ? 1 : 1.2 }}
            >
              Descriere:
            </Typography>
            <Typography variant={isSmall ? "body1" : "h5"} sx={{ color: "primary.light" }}>
              {videoItem.description}
            </Typography>
          </Box>
        )}
        {videoItem.materials?.length && (
          <Box display="flex" sx={{ mb: 2 }}>
            <Typography variant={isSmall ? "h6" : "h5"} sx={{ color: "primary.light", mr: 2, fontWeight: 600 }}>
              Materiale:
            </Typography>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1" sx={{ color: "primary.light" }}>
                {videoItem.materials.map((material) => (
                  <Typography variant="body1" sx={{ color: "primary.light" }}>
                    {material}
                  </Typography>
                ))}
              </Typography>
              <Typography variant="body1" sx={{ color: "primary.light" }}>
                fir monofilamnet de 0,40 cu rezistenta de 41,630 kg,
              </Typography>
              <Typography variant="body1" sx={{ color: "primary.light" }}>
                vartej tip T nr 1 cu rezistenta de 62 kg,
              </Typography>
              <Typography variant="body1" sx={{ color: "primary.light" }}>
                2 stopere,
              </Typography>
              <Typography variant="body1" sx={{ color: "primary.light" }}>
                plumb culisant de 120 gr,
              </Typography>
              <Typography variant="body1" sx={{ color: "primary.light" }}>
                agrafa cu vartej rezistenta 62 kg,
              </Typography>
              <Typography variant="body1" sx={{ color: "primary.light" }}>
                2 varnisuri de aproximativ 4 cm.
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default VideoComponent;
