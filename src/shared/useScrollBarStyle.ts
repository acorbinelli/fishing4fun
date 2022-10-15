import { useTheme } from "@mui/material";

const useScrollBarStyle = () => {
  const theme = useTheme();
  const scrollBarProps = {
    "&::-webkit-scrollbar": { background: "none", width: 6 },
    "&::-webkit-scrollbar-track": { background: "none" },
    "&::-webkit-scrollbar-thumb": { background: theme.palette.warning.main, borderRadius: 2 },
    "&::-webkit-scrollbar-thumb:hover": { background: theme.palette.warning.dark },
  };
  return scrollBarProps;
};

export default useScrollBarStyle;
