import '../styles/globals.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import { store } from '../redux';
import { Provider } from 'react-redux';

const theme = createTheme({
  palette: {
    primary: {
      main: '#06a05d',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
