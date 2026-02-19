import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenChat: () => void;
}

export default function Navigation({
  currentPage,
  onNavigate,
  onOpenChat,
}: NavigationProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact Us" },
  ];

  const productItems = [
    "Commercial Truck Insurance",
    "Fleet Insurance",
    "Owner-Operator Insurance",
    "Cargo Insurance",
    "General Liability",
  ];

  const handlePageChange = (page: string) => {
    onNavigate(page);
    setIsMobileOpen(false);
    setIsProductsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProductClick = () => {
    onNavigate("products");
    setIsProductsOpen(false);
    setIsMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ================= TOP HEADER ================= */}
      <div className="fixed top-0 inset-x-0 bg-white border-b border-gray-200 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">

          {/* Logo */}
          <button
            onClick={() => handlePageChange("home")}
            className="flex items-center gap-3"
          >
            <img
              src="./logo3.png"
              alt="Perfect Union Insurance"
              className="h-10 w-auto"
            />
            <span className="hidden sm:block text-lg font-semibold text-slate-800">
              Perfect Union Insurance
            </span>
          </button>

          {/* Center Contact (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-sm font-medium text-slate-700">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>(463) 245-6061</span>
            </div>

            <button
              onClick={onOpenChat}
              className="flex items-center gap-2 hover:text-black transition"
            >
              <MessageCircle size={16} />
              <span>Chat</span>
            </button>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handlePageChange("contact")}
              className="hidden md:block bg-slate-900 text-white px-6 py-2 text-sm font-medium rounded-md hover:bg-slate-800 transition"
            >
              Get a Quote
            </button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP NAVIGATION ================= */}
      <nav className="fixed top-16 inset-x-0 bg-white shadow-sm z-40 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-center gap-12 relative">

          <button
            onClick={() => handlePageChange("home")}
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            Home
          </button>

          <button
            onClick={() => handlePageChange("about")}
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            About Us
          </button>

          {/* PRODUCTS DROPDOWN */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              Our Products
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  isProductsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isProductsOpen && (
              <div className="absolute top-full mt-3 w-64 bg-white border border-gray-200 rounded-md shadow-xl py-2">
                {productItems.map((product) => (
                  <button
                    key={product}
                    onClick={handleProductClick}
                    className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-gray-100"
                  >
                    {product}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handlePageChange("contact")}
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isMobileOpen && (
        <div className="fixed top-16 inset-x-0 bg-white border-t border-gray-200 z-40 md:hidden">
          <div className="px-6 py-6 space-y-5">

            <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
              <Phone size={16} />
              <span>(463) 245-6061</span>
            </div>

            <button
              onClick={onOpenChat}
              className="flex items-center gap-3 text-sm font-medium text-slate-700"
            >
              <MessageCircle size={16} />
              Chat
            </button>

            <div className="border-t border-gray-200 my-4"></div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePageChange(item.id)}
                className="block w-full text-left text-base font-medium text-slate-700"
              >
                {item.label}
              </button>
            ))}

            <div className="space-y-2">
              <div className="text-base font-semibold text-slate-800">
                Our Products
              </div>
              {productItems.map((product) => (
                <button
                  key={product}
                  onClick={handleProductClick}
                  className="block w-full text-left text-sm text-slate-600 pl-3"
                >
                  {product}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange("contact")}
              className="w-full bg-slate-900 text-white px-6 py-2.5 text-sm font-medium rounded-md mt-4"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
}

