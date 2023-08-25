import '../App.css'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from "react";


const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/6seasons/TVShowReview">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// const cards = [1, "ab",];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const HomePage = () => {
    const [shows, setShows] = useState([]);
    const ShowData = () => {
      
        useEffect(() => {
            const getShows = async () => {
            const response = await fetch('http://localhost:3000/api/shows')
            const data = await response.json()
            setShows(data)
            }
            getShows()
        }, []);
      }
    ShowData();
  return (
    <>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              TV SHOW REVIEW
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              WELCOME TO 6 SEASON REVIEWS
            </Typography>
          </Container>
          </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {shows.map((shows) => (
              <Grid item key={shows} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {shows.name}
                      {/* We will use `${card.name} */}
                    </Typography>
                    <Typography>
                    {shows.details}
                      {/* We will use `${card.content} */}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Review</Button>
                    <Button size="small">Admin Edit</Button>

                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>


      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          The End
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Thank you for visiting, please check out our Github Code
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
    </>
  );
}

export default HomePage;