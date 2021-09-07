/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Body from '../components/Body';

import { getApiData } from '../redux/exampleSlice';

function Dynamic() {
  const dispatch = useDispatch();

  useEffect(() => {
    // this initializes our data
    dispatch(getApiData());
  }, []);

  return (
    <Layout>
      <Heading
        title={'Client Side Rendered Page'}
        description={
          'This page uses useEffect to dispatch an action to grab data from an api and put into the redux store. It provides dynamic links to all the cards. This example is rendered on the client side'
        }
      />
      <Body />
    </Layout>
  );
}

export default Dynamic;
