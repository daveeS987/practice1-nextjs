import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  makeStyles,
} from '@material-ui/core';

import Layout from '../components/Layout';
import Heading from '../components/Heading';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function About() {
  const classes = useStyles();
  return (
    <>
      <Layout>
        <Heading
          title={'About Page'}
          description={'About page description goes here'}
        />
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item key={1} xs={12}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://www.rcrwireless.com/wp-content/uploads/2016/08/11888402_l.jpg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography align="center">About Us</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}

export default About;
