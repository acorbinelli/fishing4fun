import { createTheme } from "@mui/material";

export const F4F_BLUE_DEFAULT = "#2C548A";
export const F4F_BLUE_LIGHT = "#ecf1f9";
export const F4F_BLUE_DARK = "#0d1a2b";
export const F4F_GREEN_DEFAULT = "#244D25";

export const theme = createTheme({
  palette: {
    primary: {
      main: F4F_BLUE_DEFAULT,
      light: F4F_BLUE_LIGHT,
      dark:F4F_BLUE_DARK,
      contrastText: "#fff",
    },
    secondary: {
      main: F4F_GREEN_DEFAULT,
      contrastText: "#fff",
    },
    warning:{
      main:"#ffcc00",
      contrastText: "#000"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
