import { useTheme, useMediaQuery } from "@mui/material";

const useMobileDetect = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.down("lg"));
  const isMiddle = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return { isLarge, isMiddle, isSmall };
};

export default useMobileDetect;
