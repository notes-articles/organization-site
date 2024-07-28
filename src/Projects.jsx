
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const projects = [
  { name: "Weather-App", url: "https://weather-app.yangzhengyao.cn/" },
  { name: "Lama-Dev-Material-UI-5-MUI-React-Tutorial", url: "https://lama-dev-material-ui5-react-tutorial.yangzhengyao.cn/" },
  { name: "GreatStack_react-bootstrap_website_news", url: "https://greatstack-react-bootstrap-website-news.yangzhengyao.cn/" },
  { name: "Codevolution_Material-UI-Tutorial", url: " https://codevolution-material-ui-tutorial.yangzhengyao.cn/" },
  { name: "Nilesh-Dadheech_website_bootstrap5", url: "https://nilesh-dadheech-website-bootstrap5.yangzhengyao.cn/" },
  { name: "DailyTuition-_01_books_website_bootstrap", url: "http://books-website-bootstrap.yangzhengyao.cn/" },
  { name: "GreatStack_website_bootstrap", url: "http://greatstack-website-bootstrap.yangzhengyao.cn/" },

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
