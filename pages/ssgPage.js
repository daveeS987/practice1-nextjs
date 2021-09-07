import axios from 'axios';

import Layout from '../components/Layout';
import Heading from '../components/Heading';
import SsgBody from '../components/SsgBody';

export async function getStaticProps(context) {
  let result = await axios.get('https://jsonplaceholder.typicode.com/posts');
  result = result.data.slice(0, 9);
  const initialData = result.reduce((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
  }, {});

  return {
    props: { initialData },
  };
}

export default function Home({ initialData }) {
  return (
    <>
      <Layout>
        <Heading
          title={'Static Site Generated Page'}
          description={
            'This page is an example of Static Site Generation. The page is generated on build from the server. This uses getStaticProps and getStaticPaths to build the dynamic routes. It will grab data from an api and put it into props.'
          }
        />
        <SsgBody initialData={initialData} />
      </Layout>
    </>
  );
}
