import Footer from '../components/Footer';
import Header from '../components/Header';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/globals.css';
export default function App( { Component, pageProps } ) {
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize('G-L94B336WFM');
    // Report pageview when route changes
    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    // Unsubscribe to event when changing page
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
  return <>
    <Header />
    <Component { ...pageProps } />
    <Footer />
  </>;
}
