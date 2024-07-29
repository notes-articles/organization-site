import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Projects from './Projects';

const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Projects />
  </ThemeProvider>
);

export default App;
