import { Box, Button, Slide, IconButton, Drawer } from "@mui/material";
import { useCallback, useEffect, useState, FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { appRoutes } from "routes";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import useMobileDetect from "hooks/useMobileDetect";

interface Props {
  isOpen: boolean;
  toggleOpen: (value?: boolean) => void;
}

const Navbar: FC<Props> = ({ isOpen, toggleOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isSmall } = useMobileDetect();

  const onMenuItemClick = useCallback(
    (path: string) => {
      if (isSmall) toggleOpen();
      navigate(path);
    },
    [isSmall, navigate]
  );

  return (
    <>
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
            component="nav"
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
              position: "fixed",
              zIndex: 200,
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
                    size="large"
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
        <Drawer anchor="right" onClose={() => toggleOpen()} open={isOpen}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              sx={{
                border: "1px solid #2C548A",
                width: (theme) => theme.spacing(4),
                height: (theme) => theme.spacing(4),
                mt: 2,
                mr: 2,
                mb: 8,
              }}
              onClick={() => toggleOpen()}
            >
              <CloseIcon color="primary" fontSize="small" />
            </IconButton>
            {appRoutes.map((route, index) => {
              if (index > 0) {
                return (
                  <Button
                    key={index}
                    size="small"
                    variant={location.pathname.toLowerCase() === route.pathName.toLowerCase() ? "outlined" : "text"}
                    onClick={() => onMenuItemClick(route.pathName)}
                    sx={{
                      color: "primary",
                      fontSize: (theme) => theme.typography.h6.fontSize,
                      mx: 4,
                      mb: 3,
                    }}
                  >
                    {route.name}
                  </Button>
                );
              }
              return null;
            })}
          </Box>
        </Drawer>
      )}
      {isSmall && !isOpen && (
        <Box sx={{ width: "100%", position: "absolute" }}>
          <IconButton
            size="large"
            sx={{
              mt: 3,
              position: "fixed",
              left: "82%",
              border: "1px solid #ffcc00",
              zIndex: 200,
            }}
            onClick={() => toggleOpen()}
          >
            <MenuIcon color="warning" />
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default Navbar;
