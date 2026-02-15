import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurProducts from './pages/OurProducts';
import ContactUs from './pages/ContactUs';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'Perfect Union Insurance',
      about: 'About Us - Perfect Union Insurance',
      products: 'Our Products - Perfect Union Insurance',
      contact: 'Contact Us - Perfect Union Insurance',
    };
    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutUs />;
      case 'products':
        return <OurProducts />;
      case 'contact':
        return <ContactUs />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
