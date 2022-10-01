import { Box, Button, Typography, Slide, IconButton, Fade, useMediaQuery, useTheme, Drawer } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { appRoutes } from "routes";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));

  const onExpandClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);

  const onMenuItemClick = useCallback((path: string) => {
    navigate(path);
    if (isSmall) setIsOpen(false);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (!isSmall) setIsOpen(true);
    }, 1000);
  }, []);

  return (
    <Box sx={{ position: "absolute", height: "100%", width: "100%" }}>
      {!isSmall && (
        <Slide
          in={isOpen}
          direction="right"
          easing={{
            enter: "cubic-bezier(0, 1, .8, 1)",
            exit: "cubic-bezier(0, 1, .8, 1)",
          }}
          timeout={500}
        >
          <Box
            sx={{
              background: "linear-gradient(162deg, rgba(6,25,51,1) 0%, rgba(6,25,51,0.5) 39%, rgba(140,189,255,0) 67%)",
              py: 1,
              px: 2,
              pb: 4,
              borderLeft: "none",
              borderBottomRightRadius: 30,
              borderTopRightRadius: 30,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              position: "absolute",
              zIndex: 2,
              top: "25%",
              transform: "translate(-50%,-50%)",
            }}
          >
            {appRoutes.map((route, index) => {
              if (index > 0) {
                return (
                  <Button
                    key={index}
                    fullWidth
                    size="small"
                    variant="text"
                    onClick={() => onMenuItemClick(route.pathName)}
                    sx={{
                      mb: 2,
                      color: "primary.light",
                      borderBottom:
                        location.pathname.toLowerCase() === route.pathName.toLowerCase() ? "2px solid white" : "none",
                    }}
                  >
                    {route.name}
                  </Button>
                );
              }
              return null;
            })}
          </Box>
        </Slide>
      )}
      {isSmall && (
        <Drawer
          anchor="right"
          PaperProps={{
            sx: {
              py: 4,
              px: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "space-between",
            },
          }}
          open={isOpen}
        >
          <IconButton
            size="large"
            sx={{
              border: "1px solid #2C548A",
              width: (theme) => theme.spacing(5),
              height: (theme) => theme.spacing(5),
              zIndex: 11,
            }}
            onClick={onExpandClick}
          >
            <CloseIcon color="primary" />
          </IconButton>
          {appRoutes.map((route, index) => {
            if (index > 0) {
              return (
                <Button
                  key={index}
                  size="small"
                  variant="text"
                  onClick={() => onMenuItemClick(route.pathName)}
                  sx={{
                    color: "primary",
                    fontSize: (theme) => theme.typography.h6.fontSize,
                    borderBottom:
                      location.pathname.toLowerCase() === route.pathName.toLowerCase() ? "2px solid #2C548A" : "none",
                  }}
                >
                  {route.name}
                </Button>
              );
            }
            return null;
          })}
        </Drawer>
      )}
      <>
        {!isOpen && (
          <IconButton
            size="large"
            sx={{
              position: "absolute",
              left: !isSmall ? (theme) => theme.spacing(5) : `calc(100% - ${theme.spacing(10)})`,
              top: (theme) => theme.spacing(6),
              transform: "translateY(-50%)",
              border: "1px solid #ffcc00",
              zIndex: 11,
            }}
            onClick={onExpandClick}
          >
            <MenuIcon color="warning" />
          </IconButton>
        )}
        {isOpen && (
          <IconButton
            size="large"
            onClick={onExpandClick}
            sx={{
              position: "absolute",
              left: !isSmall ? (theme) => theme.spacing(5) : `calc(100% - ${theme.spacing(10)})`,
              top: (theme) => theme.spacing(6),
              zIndex: 11,
              transform: "translateY(-50%)",
              border: "1px solid #ffcc00",
            }}
          >
            <CloseIcon color="warning" />
          </IconButton>
        )}
      </>
    </Box>
  );
};

export default Navbar;
