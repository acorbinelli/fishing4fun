import { CssBaseline, Box, ThemeProvider } from "@mui/material";
import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import { appRoutes } from "./routes";
import {theme} from './theme'
import BG from 'images/backgrounds/boat.jpg'
import BG2 from 'images/backgrounds/dunare.jpg'
import BG3 from 'images/backgrounds/ieselnita.jpeg'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box
          sx={{
            background:"radial-gradient(circle, rgba(44,84,138,1) 0%, rgba(44,84,138,1) 35%, rgba(13,26,43,1) 100%)",
            backgroundSize:'cover',
            backgroundPosition:'center',
            flex:1,
            height: "100vh",
          }}
        >
          <CssBaseline />
          <Routes>
            {appRoutes.map((route) => (
              <Route key={route.name} path={route.pathName} element={route.element} />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
