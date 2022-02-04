import GlobalContext from '../context';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContext>
      <Component {...pageProps} />
    </GlobalContext>
  );
}

export default MyApp;
