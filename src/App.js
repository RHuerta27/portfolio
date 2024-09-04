import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Proyectos from './pages/Projects';
import Carrera from './pages/Career';
import Curriculum from './pages/Curriculum';
import AboutMe from './pages/AboutMe';

// Crear el tema oscuro
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#171717', // Fondo oscuro predeterminado
      paper: '#1a1a1a',   // Fondo de componentes como tarjetas, etc.
    },
    text: {
      primary: '#ffffff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Proyectos />} />
            <Route path="/career" element={<Carrera />} />
            <Route path="/curriculum" element={<Curriculum />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
