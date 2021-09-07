/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { If, Then, Else, When, Unless } from 'react-if';
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

import Layout from '../../components/Layout.js';
import Heading from '../../components/Heading.js';

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

function Details() {
  const classes = useStyles();
  const router = useRouter();
  const { itemId } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    async function getData() {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${itemId}`
      );
      setDetail(result.data);
      setIsLoading(false);
    }
    getData();
  }, []);

  return (
    <Layout>
      <If condition={isLoading}>
        <Then>
          <h2>Is Loading</h2>
        </Then>
        <Else>
          <Heading title={detail.title} />
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              <Grid item key={detail.id} xs={12}>
                <Card className={classes.card}>
                  <Typography gutterBottom variant="h4" component="h2">
                    {detail.title}
                  </Typography>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography>{detail.body}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Else>
      </If>
    </Layout>
  );
}

export default Details;
