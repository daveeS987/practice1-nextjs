import axios from 'axios';

import Layout from '../components/Layout';
import Heading from '../components/Heading';
import OneItem from '../components/OneItem';

export default function Home() {
  return (
    <>
      <Layout>
        <Heading title={'Landing Page'} description={'The Home Page'} />
        <OneItem
          imageUrl={
            'https://previews.123rf.com/images/monsitj/monsitj1707/monsitj170700082/82427415-programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg'
          }
          description={'home'}
        />
      </Layout>
    </>
  );
}
