import { Box, Typography, Fade } from "@mui/material";
import IntroText from "shared/components/IntroText";
import Background from "images/backgrounds/bg2.jpg";
import useMobileDetect from "hooks/useMobileDetect";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DespreF4F = () => {
  const { isSmall } = useMobileDetect();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        height: (theme) => `calc(100% - ${theme.spacing(25)})`,
        my: 15,
        "&::-webkit-scrollbar": {
          visibility: "hidden",
        },
      }}
    >
      <Typography
        variant={isSmall ? "h5" : "h3"}
        sx={{
          color: "primary.light",
          textAlign: "left",
          width: "100%",
          mb: 2,
        }}
      >
        Fishing4Fun a apărut în anii 96-97 din plăcerea de a pescui și a petrece timp în natură.
      </Typography>
      <Typography
        variant={isSmall ? "body1" : "h5"}
        sx={{
          color: "primary.light",
          textAlign: "left",
          mb: 2,
          width: "100%",
        }}
      >
        Trei prieteni am pornit la drum, fiecare cu metoda lui de pescuit, am învățat unii de la alții tehnici și metode
        de pescuit la răpitor, dar și la staționar.
      </Typography>
      <Typography
        variant={isSmall ? "body1" : "h5"}
        sx={{
          color: "primary.light",
          textAlign: "left",
          width: "100%",
          mb: 2,
        }}
      >
        În anul 2022, după mai multe cereri cu privire la tainele pescuitului pe Dunăre, primite de la diverse persoane,
        am hotărât împreună să demarăm acest proiect Fishing 4 Fun – Pescuit din plăcere.
      </Typography>
      <Typography
        variant={isSmall ? "body1" : "h5"}
        sx={{
          color: "primary.light",
          textAlign: "left",
          width: "100%",
          mb: 2,
        }}
      >
        În prezent echipa noastră este formată din: un inginer , un IT-ist, un cadru didactic și un pensionar, împreună
        dorim să vă purtăm într-o călătorie fascinantă pe Dunăre, în care veți descoperi pescuitul sportiv cu tehnici și
        echipamente specifice Dunării, locuri mirifice de pescuit într-o natură absolut unică în lume, partide de
        pescuit în familie și cu prietenii, rețete de mâncare tradiționale cu pește și nu în ultimul rând locuri de
        cazare aflate în apropierea Dunării.
      </Typography>
      <Typography
        variant={isSmall ? "body1" : "h5"}
        sx={{
          color: "primary.light",
          textAlign: "left",
          width: "100%",
          mb: 2,
        }}
      >
        În cadru acestui site veți găsi materiale video cu partide de pescuit, locuri de pescuit , monturi, momeli, idei
        practice, cele mai potrivite bețe, mulinete, cârlige, momeli, precum și alte echipamente pentru pescuit, cazare
        pentru toate gusturile, facilități, mâncare cu pește, rețete tradiționale și sfaturi de la bucatari.
      </Typography>
      <Typography
        variant={isSmall ? "body1" : "h5"}
        sx={{
          color: "primary.light",
          textAlign: "left",
          width: "100%",
          mb: 2,
        }}
      >
        În cadrul Blog-ului dorim să ne cunoaștem, iar prin comentarii pe anumite videoclipuri dorim să asigurăm
        împreună îndrumare, sprijin și înțelegere pentru începători, dar și pentru avansați, formare de echipe, pescuit
        în familie și cu prietenii. Echipa Fishing4Fun vă urează fire întinse și nu uitați, pescuiți din plăcere!
      </Typography>
    </Box>
  );
};

export default DespreF4F;
