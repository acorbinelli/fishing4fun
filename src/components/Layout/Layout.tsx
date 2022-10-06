import { FC } from "react";
import { Box, useMediaQuery, useTheme, Fade,Typography } from "@mui/material";
import Navbar from "components/Navbar/Navbar";
import Logo from "images/logo/avatar.png";
import { useLocation } from "react-router-dom";

interface Props {
  children?: JSX.Element[] | JSX.Element | any;
}
const Layout: FC<Props> = ({ children }) => {
  const location = useLocation();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box
        sx={{
          background: "radial-gradient(circle, rgba(44,84,138,1) 0%, rgba(44,84,138,1) 35%, rgba(13,26,43,1) 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          flex: 1,
          height: "100vh",
          overflow: "hidden",
        }}
        component="main"
      >
        {location.pathname !== "/" && (
          <>
            <Navbar />
            <Fade in>
              <Box sx={{ zIndex: 1, position: "absolute", bottom: "0%", right: "0%", opacity: 1 }}>
                <img width={isSmall ? 200 : 300} height={isSmall ? 200 : 300} src={Logo} alt="4f4 logo"/>
              </Box>
            </Fade>
          </>
        )}
        {children}
        <Box
          sx={{ width: "100%",display:'flex',justifyContent:'center',alignItems:'center', height: theme.spacing(5), position: "absolute", bottom: 0,zIndex:2 }}
          component="footer"
        >
          <Typography variant='caption' sx={{color:'primary.light'}}>Copyright © 2023 Fishing4Fun. All Rights Reserved</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
