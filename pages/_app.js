import '../styles/global.scss';
import Preloader from '../components/Preloader';

export default function VergeApp({ Component, pageProps }) {
  return (
    <>
      <Preloader />
      <Component {...pageProps} />
    </>
  );
}
