import '../styles/globals.css';
import { Navbar } from '../components/Navbar';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps, session }) {
  return (
  <SessionProvider session={session}>
    <Navbar />
    <Component {...pageProps} />
    <footer className="footer">
        <p>copyright @ 2020 - Hunger Apps</p>
    </footer>
  </SessionProvider>)
}

export default MyApp
