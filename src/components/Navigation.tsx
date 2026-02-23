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

  /* ================= CLOSE DROPDOWN ON OUTSIDE CLICK ================= */
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
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const productItems = [
    { id: "commercial-truck", label: "Commercial Truck Insurance" },
    { id: "auto-physical", label: "Auto Physical Damage" },
    { id: "motor-cargo", label: "Motor Truck Cargo" },
    { id: "general-liability", label: "General Liability Insurance" },
    { id: "non-trucking", label: "Non-Trucking Liability / Bobtail" },
    { id: "auto-insurance", label: "Auto Insurance" },
  ];

  const handlePageChange = (page: string) => {
    onNavigate(page);
    setIsMobileOpen(false);
    setIsProductsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProductClick = (productId: string) => {
    onNavigate("products", productId);
    setIsMobileOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 inset-x-0 bg-white border-b shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">

          {/* LOGO */}
          <button
            onClick={() => handlePageChange("home")}
            className="flex items-center gap-2"
          >
            <img
              src="/logo3.png"
              alt="Perfect Union Insurance"
              className="h-8 sm:h-9 w-auto"
            />
            <span className="hidden lg:block font-semibold text-slate-800">
              Perfect Union Insurance
            </span>
          </button>

          {/* DESKTOP CONTACT */}
          <div className="hidden xl:flex items-center gap-8 text-sm font-medium text-slate-700">
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

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handlePageChange("contact")}
              className="hidden md:block bg-slate-900 text-white px-4 py-2 text-sm rounded-md hover:bg-slate-800 transition"
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
      </header>

      {/* ================= DESKTOP NAV ================= */}
      <nav className="hidden md:block fixed top-16 inset-x-0 bg-white border-b z-40">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-center gap-8 text-sm">

          <button
            onClick={() => handlePageChange("home")}
            className="font-medium text-slate-600 hover:text-black"
          >
            Home
          </button>

          <button
            onClick={() => handlePageChange("about")}
            className="font-medium text-slate-600 hover:text-black"
          >
            About Us
          </button>

          {/* PRODUCTS */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => {
                onNavigate("products");
                setIsProductsOpen(true);
              }}
              className="flex items-center gap-1 font-medium text-slate-600 hover:text-black"
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
              <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border rounded-md shadow-xl py-2">
                {productItems.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {product.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handlePageChange("contact")}
            className="font-medium text-slate-600 hover:text-black"
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isMobileOpen && (
        <div className="fixed top-16 inset-x-0 bottom-0 bg-white z-30 md:hidden overflow-y-auto">
          <div className="px-6 py-8 space-y-6 text-base font-medium text-slate-800">

            <button onClick={() => handlePageChange("home")} className="block w-full text-left">
              Home
            </button>

            <button onClick={() => handlePageChange("about")} className="block w-full text-left">
              About Us
            </button>

            <button onClick={() => handlePageChange("products")} className="block w-full text-left">
              Our Products
            </button>

            <button onClick={() => handlePageChange("contact")} className="block w-full text-left">
              Contact
            </button>

            <div className="pt-6 border-t space-y-4 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(463) 245-6061</span>
              </div>

              <button
                onClick={onOpenChat}
                className="flex items-center gap-2"
              >
                <MessageCircle size={16} />
                <span>Chat</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}