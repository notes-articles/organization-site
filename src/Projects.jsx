import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const projects = [
  { name: "Weather-App", url: "https://weather-app.yangzhengyao.cn/" },
//   { name: "Project 2", url: "https://your-username.github.io/project2/" },
  // 你可以继续添加更多项目
];

const Projects = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Our Projects
    </Typography>
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                {project.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href={project.url} target="_blank">
                Visit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Projects;
