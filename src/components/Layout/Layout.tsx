import { FC, ReactElement } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "components/Navbar/Navbar";
import Logo from "images/logo/avatar.png";
import { useLocation } from "react-router-dom";

interface Props {
  children?: JSX.Element[] | JSX.Element | any;
}
const Layout: FC<Props> = ({ children }) => {
  const location = useLocation();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box
      sx={{
        background: "radial-gradient(circle, rgba(44,84,138,1) 0%, rgba(44,84,138,1) 35%, rgba(13,26,43,1) 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        flex: 1,
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {location.pathname !== "/" && (
        <>
          <Navbar />
          <img
            width={isSmall ? 200 : 300}
            height={isSmall ? 200 : 300}
            src={Logo}
            style={{
              zIndex: 1,
              position: "absolute",
              bottom: "0%",
              right: "0%",
              opacity: 0.2,
            }}
          />
        </>
      )}
      {children}
    </Box>
  );
};

export default Layout;
