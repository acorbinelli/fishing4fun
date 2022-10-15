import { CssBaseline, ThemeProvider,CircularProgress,Box } from "@mui/material";
import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import { theme } from "./theme";
import { Suspense, lazy } from "react";
import Layout from "components/Layout/Layout";

const LandingPage = lazy(() => import("pages/LandingPage"));
const Acasa = lazy(() => import("pages/Acasa"));
const Blog = lazy(() => import("pages/Blog"));
const Contact = lazy(() => import("pages/Contact"));
const DespreF4F = lazy(() => import("pages/DespreF4F"));
const Dunarea = lazy(() => import("pages/Dunarea"));
const Info = lazy(() => import("pages/Info"));
const Tutoriale = lazy(() => import("pages/Tutoriale"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Layout>
          <Suspense fallback={<Box sx={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><CircularProgress color='warning'/></Box>}>
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
