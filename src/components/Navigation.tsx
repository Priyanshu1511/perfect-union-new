import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Our Products' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handlePageChange = (page: string) => {
    onNavigate(page);
    setIsMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => handlePageChange('home');
  const handleContactClick = () => handlePageChange('contact');
  const toggleMobileMenu = () => setIsMobileOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 inset-x-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <button onClick={handleHomeClick} className="flex items-center">
            <img
              src="./logo3.jpg"
              alt="Perfect Union Insurance Agency LLC"
              className="h-14 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePageChange(item.id)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-slate-900 border-b-2 border-slate-900 pb-1'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={handleContactClick}
              className="bg-slate-900 text-white px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-slate-800 transition-colors duration-200"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-slate-900"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePageChange(item.id)}
                className={`block w-full text-left text-base font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={handleContactClick}
              className="w-full bg-slate-900 text-white px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-slate-800 transition-colors duration-200"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
