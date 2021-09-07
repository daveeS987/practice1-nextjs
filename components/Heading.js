import {
  Button,
  Grid,
  Typography,
  Container,
  Link,
  makeStyles,
} from '@material-ui/core';
import NextLink from 'next/link';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Heading({ title, description }) {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {description}
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary">
                <NextLink href="/">Home Page</NextLink>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                <NextLink href="/ssgPage">Static Site Generated</NextLink>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                <NextLink href="/csrPage">Client Side Rendered</NextLink>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                <NextLink href="/about">About Page</NextLink>
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
