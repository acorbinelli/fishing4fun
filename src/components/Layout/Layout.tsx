import { FC, useMemo, useState, useCallback, useEffect } from "react";
import { Box, Fade, Typography } from "@mui/material";
import Navbar from "components/Navbar/Navbar";
import Logo from "images/logo/avatar.png";
import { useLocation } from "react-router-dom";
import useMobileDetect from "hooks/useMobileDetect";
import { LazyLoadImage } from "react-lazy-load-image-component";
import IntroText from "shared/components/IntroText";
import Background1 from "images/backgrounds/bg1.jpg";
import Background2 from "images/backgrounds/bg2.jpg";
import Background3 from "images/backgrounds/bg3.jpg";
import Background4 from "images/backgrounds/bg4.jpg";
import Background5 from "images/backgrounds/bg5.jpg";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface Props {
  children?: JSX.Element[] | JSX.Element | any;
}
const Layout: FC<Props> = ({ children }) => {
  const location = useLocation();
  const { isSmall } = useMobileDetect();
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNavOpen = useCallback(
    (value?: boolean) => {
      if (value) {
        setIsNavOpen(true);
      } else {
        setIsNavOpen((prev) => !prev);
      }
    },
    [setIsNavOpen]
  );

  const pageIntroText = useMemo(() => {
    switch (location.pathname.toLowerCase()) {
      case "/acasa":
        return "ACASA";
      case "/despre-f4f":
        return "DESPRE F4F";
      case "/tutoriale":
        return "TUTORIALE";
      case "/dunarea":
        return "DUNAREA";
      case "/blog":
        return "BLOG";
      case "/info":
        return "INFO";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    }
  }, [location]);

  const BackgroundElement = (): ReactJSXElement => {
    switch (location.pathname.toLowerCase()) {
      case "/acasa":
        return (
          <>
            <IntroText title={pageIntroText} position="top" toggleOpen={toggleNavOpen} />
            <Box sx={{ height: "100%", width: "100%", position: "absolute", zIndex: 2 }}>
              <Fade in>
                <Box sx={{ overflow: "hidden", width: "100%", height: "100%" }}>
                  <LazyLoadImage
                    alt="Danube Background Image"
                    src={Background1}
                    effect="blur"
                    height="100%"
                    width="100%"
                    style={{
                      opacity: 0.4,
                      objectFit: "cover",
                      clipPath: isSmall
                        ? "polygon(0 0, 100% 0, 100% 31%, 0% 100%)"
                        : "polygon(0 0, 100% 0, 100% 50%, 0% 100%)",
                    }}
                  />
                </Box>
              </Fade>
            </Box>
          </>
        );
      case "/despre-f4f":
        return (
          <>
            <IntroText title={pageIntroText} position="top" toggleOpen={toggleNavOpen} />
            <Box
              sx={{
                height: "100%",
                width: "100%",
                position: "absolute",
                zIndex: 2,
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <Fade in>
                <Box sx={{ overflow: "hidden", width: "100%", height: "100%" }}>
                  <LazyLoadImage
                    alt="Danube Background Image"
                    src={Background2}
                    effect="blur"
                    height="100%"
                    width="100%"
                    style={{
                      opacity: 0.4,
                      objectFit: "cover",
                      clipPath: isSmall
                        ? "polygon(0 0, 100% 0, 100% 31%, 0% 100%)"
                        : "polygon(0 0, 100% 0, 100% 50%, 0% 100%)",
                    }}
                  />
                </Box>
              </Fade>
            </Box>
          </>
        );
      case "/tutoriale":
        return (
          <>
            <IntroText title={pageIntroText} position="top" toggleOpen={toggleNavOpen} />
            <Box sx={{ height: "100%", width: "100%", position: "absolute", zIndex: 2 }}>
              <Fade in>
                <Box sx={{ overflow: "hidden", width: "100%", height: "100%" }}>
                  <LazyLoadImage
                    alt="Danube Background Image"
                    src={Background4}
                    effect="blur"
                    height="100%"
                    width="100%"
                    style={{
                      opacity: 0.4,
                      objectFit: "cover",
                      clipPath: isSmall
                        ? "polygon(0 0, 100% 0, 100% 31%, 0% 100%)"
                        : "polygon(0 0, 100% 0, 100% 50%, 0% 100%)",
                    }}
                  />
                </Box>
              </Fade>
            </Box>
          </>
        );
      case "/dunarea":
        return (
          <>
            <IntroText title={pageIntroText} position="top" toggleOpen={toggleNavOpen} />
            <Box sx={{ height: "100%", width: "100%", position: "absolute", zIndex: 2 }}></Box>
          </>
        );
      case "/blog":
        return (
          <>
            <IntroText title={pageIntroText} position="top" toggleOpen={toggleNavOpen} />
            <Box sx={{ height: "100%", width: "100%", position: "absolute", zIndex: 2 }}></Box>
          </>
        );
      case "/info":
        return (
          <>
            <IntroText title={pageIntroText} position="top" toggleOpen={toggleNavOpen} />
            <Box sx={{ height: "100%", width: "100%", position: "absolute", zIndex: 2 }}></Box>
          </>
        );
      case "/contact":
        return (
          <>
            <IntroText title={pageIntroText} position="top" toggleOpen={toggleNavOpen} />
            <Box sx={{ height: "100%", width: "100%", position: "absolute", zIndex: 2 }}>
              <Fade in>
                <Box sx={{ overflow: "hidden", width: "100%", height: "100%" }}>
                  <LazyLoadImage
                    alt="Danube Background Image"
                    src={Background5}
                    effect="blur"
                    height="100%"
                    width="100%"
                    style={{
                      opacity: 0.4,
                      objectFit: "cover",
                      clipPath: isSmall
                        ? "polygon(0 0, 100% 0, 100% 31%, 0% 100%)"
                        : "polygon(0 0, 100% 0, 100% 50%, 0% 100%)",
                    }}
                  />
                </Box>
              </Fade>
            </Box>
          </>
        );
      default:
        return <Box sx={{ height: "100%", width: "100%", position: "absolute", zIndex: 2 }}></Box>;
    }
  };

  useEffect(() => {
    !isSmall && setIsNavOpen(true);
    // eslint-disable-next-line
  }, [isSmall]);

  return (
    <Box
      sx={{
        background: "radial-gradient(circle, rgba(44,84,138,1) 0%, rgba(44,84,138,1) 35%, rgba(13,26,43,1) 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        flex: 1,
        height: "100vh",
        position: "relative",
      }}
      component="main"
    >
      <>
        <Navbar isOpen={isNavOpen} toggleOpen={toggleNavOpen} />
        {location.pathname !== "/" && (
          <Fade in style={{ position: "absolute", zIndex: 2, bottom: "0%", right: "0%", opacity: 1 }}>
            <img width={isSmall ? 200 : 300} height={isSmall ? 200 : 300} src={Logo} alt="4f4 logo" />
          </Fade>
        )}
      </>

      {<BackgroundElement />}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          pl: location.pathname === "/" ? 0 : isSmall ? 3 : 20,
          pr: location.pathname === "/" ? 0 : 3,
          zIndex: 102,
        }}
      >
        {children}
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          zIndex: 2,
        }}
        component="footer"
      >
        <Typography variant="caption" sx={{ color: "primary.light" }}>
          Copyright © 2023 Fishing4Fun. All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
