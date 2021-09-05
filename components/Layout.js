import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginBottom: theme.spacing(2),
  },
}));

function Layout({ children }) {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Page Title Goes here</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={classes.root}>
        <div className={classes.main}>
          <Header />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
