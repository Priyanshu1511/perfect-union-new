interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Perfect Union Insurance
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Protecting America's commercial trucking industry with reliable,
              affordable and trusted insurance solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("products")}
                  className="text-gray-400 hover:text-white transition"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="text-gray-400 hover:text-white transition"
                >
                  Commercial Truck Insurance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="text-gray-400 hover:text-white transition"
                >
                  Fleet Insurance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="text-gray-400 hover:text-white transition"
                >
                  Owner-Operator Insurance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="text-gray-400 hover:text-white transition"
                >
                  Cargo Insurance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="text-gray-400 hover:text-white transition"
                >
                  General Liability
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📞 (463) 245-6061</li>
              <li>✉️ info@perfectunioninsurance.com</li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="hover:text-white transition"
                >
                  Get a Quote
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Perfect Union Insurance. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
