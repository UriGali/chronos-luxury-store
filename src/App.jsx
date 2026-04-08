import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollection from './components/FeaturedCollection';
import LimitedEdition from './components/LimitedEdition';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-dark text-white min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <LimitedEdition />
      <Footer />
    </div>
  );
}

export default App;
