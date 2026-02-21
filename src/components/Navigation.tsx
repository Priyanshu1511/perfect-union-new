import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface NavigationProps {
  onNavigate: (page: string, productId?: string) => void;
  onOpenChat: () => void;
}

export default function Navigation({
  onNavigate,
  onOpenChat,
}: NavigationProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const productItems = [
    { id: "commercial-truck", label: "Commercial Truck Insurance" },
    { id: "auto-physical", label: "Auto Physical Damage" },
    { id: "motor-cargo", label: "Motor Truck Cargo" },
    { id: "general-liability", label: "General Liability Insurance" },
    { id: "auto-insurance", label: "Auto Insurance" },
    { id: "non-trucking", label: "Non-Trucking Liability / Bobtail" },
  ];

  const handlePageChange = (page: string) => {
    onNavigate(page);
    setIsMobileOpen(false);
    setIsProductsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProductClick = (productId: string) => {
    onNavigate("products", productId);
    setIsProductsOpen(false);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* TOP HEADER */}
      <div className="fixed top-0 inset-x-0 bg-white border-b border-gray-200 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
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

      {/* DESKTOP NAVIGATION */}
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
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-gray-100"
                  >
                    {product.label}
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
    </>
  );
}