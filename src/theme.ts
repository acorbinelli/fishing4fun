import { createTheme } from "@mui/material";

export const F4F_BLUE_DEFAULT = "#2C548A";
export const F4F_BLUE_DARK = "#0d1a2b";
export const F4F_GREEN_DEFAULT = "#244D25";

export const theme = createTheme({
  palette: {
    primary: {
      main: F4F_BLUE_DEFAULT,
      contrastText: "#fff",
    },
    secondary: {
      main: F4F_GREEN_DEFAULT,
      contrastText: "#fff",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
