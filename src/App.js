import React, { useEffect } from 'react';
import './App.css';
import ResponsiveAppBar from './AppBar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const svgIcon = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23047857"/><stop offset="100%" stop-color="%23064e3b"/></linearGradient><linearGradient id="a" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%2334d399"/><stop offset="100%" stop-color="%2310b981"/></linearGradient></defs><rect width="64" height="64" rx="14" fill="url(%23g)" stroke="%2310b981" stroke-width="3"/><path d="M16 46V18L32 34L48 18V46" fill="none" stroke="url(%23a)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="48" cy="46" r="3.5" fill="%2334d399"/></svg>`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#047857',
      light: '#10b981',
      dark: '#064e3b',
    },
    secondary: {
      main: '#10b981',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  useEffect(() => {
    document.title = "Moataz Ashraf | AI & Machine Learning Engineer";

    // Set tab icon dynamically to bypass browser favicon cache
    const existingLinks = document.querySelectorAll("link[rel*='icon']");
    existingLinks.forEach(el => el.parentNode.removeChild(el));

    const newLink = document.createElement('link');
    newLink.type = 'image/svg+xml';
    newLink.rel = 'icon';
    newLink.href = svgIcon;
    document.head.appendChild(newLink);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ResponsiveAppBar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
