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
import OneItem from '../components/OneItem';

function About() {
  return (
    <>
      <Layout>
        <Heading
          title={'About Page'}
          description={'About page description goes here'}
        />
        <OneItem
          imageUrl={
            'https://www.rcrwireless.com/wp-content/uploads/2016/08/11888402_l.jpg'
          }
          description={'About Page'}
        />
      </Layout>
    </>
  );
}

export default About;
