import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              Perfect Union Insurance
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Protecting America's commercial trucking industry for over 30 years.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Commercial Truck Insurance</li>
              <li>Fleet Insurance</li>
              <li>Owner-Operator Insurance</li>
              <li>Cargo Insurance</li>
              <li>General Liability</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start text-gray-400">
                <Phone size={18} className="mt-1 mr-3 flex-shrink-0" />
                <span>1-800-TRUCKING</span>
              </div>
              <div className="flex items-start text-gray-400">
                <Mail size={18} className="mt-1 mr-3 flex-shrink-0" />
                <span>quotes@apextrucking.com</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin size={18} className="mt-1 mr-3 flex-shrink-0" />
                <span>1500 Commerce Drive<br />Suite 300<br />Atlanta, GA 30318</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Perfect Union Insurance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
