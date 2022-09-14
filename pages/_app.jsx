import '../styles/globals.css';
import { Navbar } from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Navbar />
    <Component {...pageProps} />
    <footer className="footer">
        <p>copyright @ 2020 - Hunger Apps</p>
    </footer>
  </>)
}

export default MyApp
