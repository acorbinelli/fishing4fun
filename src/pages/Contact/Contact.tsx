import { Box, TextField, Button, Typography, IconButton } from "@mui/material";
import { useCallback } from "react";
import IntroText from "shared/components/IntroText";
import UnderConstruction from "components/UnderConstruction";
import useMobileDetect from "hooks/useMobileDetect";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Contact = () => {
  const { isSmall } = useMobileDetect();

  const onYoutubeClick = useCallback(() => {
    window.location.href = "https://www.youtube.com/channel/UCAuUBbW9p22VoDlZutn4JYg";
  }, []);
  const onFacebookClick = useCallback(() => {
    window.location.href = "https://www.facebook.com/profile.php?id=100085277480233";
  }, []);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 30,
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          background: "none",
          width: (theme) => theme.spacing(isSmall ? 40 : 100),
        }}
      >
        <Typography variant={isSmall ? "h4" : "h3"} sx={{ color: "primary.light" }}>
          Suntem încântați de cunostință!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          background: "none",
          width: (theme) => theme.spacing(isSmall ? 40 : 100),
        }}
      >
        <TextField
          size="small"
          variant="outlined"
          fullWidth
          color="warning"
          sx={{ backgroundColor: "primary.light", borderRadius: 2, mb: 2 }}
          placeholder="Nume"
        />
        <TextField
          variant="outlined"
          fullWidth
          color="warning"
          sx={{ backgroundColor: "primary.light", borderRadius: 2, mb: 2 }}
          placeholder="Mesaj"
          multiline
          minRows={6}
        />
        <Button variant="contained" color="warning">
          Trimite
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          background: "none",
          width: (theme) => theme.spacing(isSmall ? 40 : 100),
        }}
      >
        <IconButton onClick={onYoutubeClick} size="large">
          <YouTubeIcon fontSize="large" color="warning" />
        </IconButton>
        <IconButton onClick={onFacebookClick} size="large">
          <FacebookIcon fontSize="large" color="warning" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Contact;
