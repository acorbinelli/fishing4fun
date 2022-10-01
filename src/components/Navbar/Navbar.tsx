import { Box, Button, Typography, Slide, IconButton, Fade } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { appRoutes } from "routes";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  const onExpandClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);

  const onMenuItemClick = useCallback((path: string) => {
    navigate(path);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 1000);
  }, []);

  return (
    <Box sx={{ position: "relative", height: "100%", flex: 1 }}>
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
      <>
        {!isOpen && (
          <IconButton
            size="large"
            sx={{
              position: "absolute",
              left: (theme) => theme.spacing(4),
              top: "7%",
              transform: "translateY(-50%)",
              border: "1px solid #ffcc00",
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
              left: (theme) => theme.spacing(4),
              top: "7%",
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
