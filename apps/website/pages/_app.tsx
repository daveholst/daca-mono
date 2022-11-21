import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to website!</title>
        {/* Stolen from the daca site to get the fonts */}
        <link
          rel="stylesheet"
          id="parallax-google-fonts-css"
          href="//fonts.googleapis.com/css?family=Cormorant+Garamond%3A400%2C400i%2C700%2C700i%7CQuicksand%3A400%2C500&amp;ver=1.3.3"
          type="text/css"
          media="all"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Bungee"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        ></link>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
