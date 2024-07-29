import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Button, TextField } from '@mui/material';
import useStyles from './styles';
import projects from './projectsData';

const categories = ["All", ...new Set(projects.flatMap(project => project.categories))];

const Projects = () => {
  const classes = useStyles();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(project =>
    (selectedCategory === "All" || project.categories.includes(selectedCategory)) &&
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box className={classes.root}>
      <Container>
        <Typography variant="h2" className={classes.sectionTitle}>
          Explore Case Studies and Examples
        </Typography>
        <Typography variant="body1" align="center">
          Browse, search, and personalize detailed case studies. Looking for inspiration? 
        </Typography>
        <Box className={classes.searchContainer}>
          <TextField
            variant="outlined"
            placeholder="Search"
            className={classes.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>
        <Box className={classes.navButtons}>
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={selectedCategory === category ? "contained" : "outlined"}
              color="primary"
              onClick={() => setSelectedCategory(category)}
              className={classes.button}
            >
              {category}
            </Button>
          ))}
        </Box>
        <Grid container spacing={4}>
          {filteredProjects.map((project, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card className={classes.card}>
                <Box
                  className={classes.cardMedia}
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" className={classes.cardTitle}>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" className={classes.cardDescription}>
                    {project.description}
                  </Typography>
                </CardContent>
                <Box className={classes.overlay}>
                  <Button
                    variant="outlined"
                    className={classes.overlayButton}
                    href={project.url}
                    target="_blank"
                  >
                    View Details
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
