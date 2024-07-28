import React from 'react';
import Projects from './Projects';
import { CssBaseline, AppBar, Toolbar, Typography, Container } from '@mui/material';

const App = () => (
  <div>
    <CssBaseline />
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Organization Site
        </Typography>
      </Toolbar>
    </AppBar>
    <Container>
      <Projects />
    </Container>
  </div>
);

export default App;
