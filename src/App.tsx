import { CssBaseline, Box, ThemeProvider } from "@mui/material";
import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import { appRoutes } from "./routes";
import { theme } from "./theme";
import BG from "images/backgrounds/boat.jpg";
import BG2 from "images/backgrounds/dunare.jpg";
import BG3 from "images/backgrounds/ieselnita.jpeg";
import Layout from "components/Layout/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Layout>
          <Routes>
            {appRoutes.map((route) => (
              <Route key={route.name} path={route.pathName} element={route.element} />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
