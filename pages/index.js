import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Body from '../components/Body';

import { getApiData } from '../redux/exampleSlice';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    // this initializes our data
    dispatch(getApiData());
  }, []);

  return (
    <>
      <Layout>
        <Heading title={'Main Page'} />
        <Body />
      </Layout>
    </>
  );
}
