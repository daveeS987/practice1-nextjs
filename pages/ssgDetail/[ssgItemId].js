import axios from 'axios';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  makeStyles,
} from '@material-ui/core';

import Layout from '../../components/Layout';
import Heading from '../../components/Heading';

export async function getStaticProps(context) {
  const selectedId = context.params.ssgItemId;
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${selectedId}`
  );

  return {
    props: result.data,
  };
}

export async function getStaticPaths() {
  const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const sliced = result.data.slice(0, 9);

  let paths = sliced.map((item) => {
    return {
      params: {
        ssgItemId: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

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

function SsgDetails(props) {
  const classes = useStyles();

  return (
    <Layout>
      <Heading
        title={props.title}
        description={
          'This detail page was rendered dynamically using getStaticPaths.'
        }
      />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item key={props.id} xs={12}>
            <Card className={classes.card}>
              <Typography gutterBottom variant="h4" component="h2">
                {props.title}
              </Typography>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography>Description: {props.body}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default SsgDetails;
