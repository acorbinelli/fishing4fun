import { CssBaseline, ThemeProvider, CircularProgress, Box, Typography } from "@mui/material";
import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import { theme } from "./theme";
import { Suspense, lazy } from "react";
import Layout from "components/Layout";
import useMobileDetect from "hooks/useMobileDetect";

const LandingPage = lazy(() => import("pages/LandingPage"));
const Acasa = lazy(() => import("pages/Acasa"));
const Blog = lazy(() => import("pages/Blog"));
const Contact = lazy(() => import("pages/Contact"));
const DespreF4F = lazy(() => import("pages/DespreF4F"));
const Dunarea = lazy(() => import("pages/Dunarea"));
const Info = lazy(() => import("pages/Info"));
const Tutoriale = lazy(() => import("pages/Tutoriale"));

function App() {
  const { isSmall } = useMobileDetect();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Layout>
          <Suspense
            fallback={
              <Box
                sx={{
                  width: (theme) => `calc(100vw - ${theme.spacing(isSmall ? 3 : 20)})`,
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  background:
                    "radial-gradient(circle, rgba(44,84,138,1) 0%, rgba(44,84,138,1) 35%, rgba(13,26,43,1) 100%)",
                }}
              >
                <CircularProgress size={50} sx={{ color: "warning.main" }} />
                <Typography variant="h4" sx={{ color: "warning.main" }}>
                  Se incarca...
                </Typography>
              </Box>
            }
          >
            <Routes>
              <Route path="/acasa" element={<Acasa />} />
              <Route path="/dunarea" element={<Dunarea />} />
              <Route path="/tutoriale" element={<Tutoriale />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/info" element={<Info />} />
              <Route path="/despre-f4f" element={<DespreF4F />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
