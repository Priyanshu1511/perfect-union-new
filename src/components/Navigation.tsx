import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

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

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "products", label: "Our Products" },
    { id: "contact", label: "Contact Us" },
  ];

  const handlePageChange = (page: string) => {
    onNavigate(page);
    setIsMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ================= TOP HEADER ================= */}
      <div className="fixed top-0 inset-x-0 bg-white border-b border-gray-200 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">

          {/* LEFT: Logo */}
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

          {/* CENTER (Desktop Only) */}
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

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* CTA Desktop */}
            <button
              onClick={() => handlePageChange("contact")}
              className="hidden md:block bg-slate-900 text-white px-6 py-2 text-sm font-medium rounded-md hover:bg-slate-800 transition"
            >
              Get a Quote
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= NAVIGATION ROW ================= */}
      <nav className="fixed top-16 inset-x-0 bg-white shadow-sm z-40 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handlePageChange(item.id)}
              className={`text-sm font-medium transition ${
                currentPage === item.id
                  ? "text-slate-900 border-b-2 border-slate-900 pb-1"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isMobileOpen && (
        <div className="fixed top-16 inset-x-0 bg-white border-t border-gray-200 z-40 md:hidden">
          <div className="px-6 py-6 space-y-5">

            {/* Mobile Phone */}
            <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
              <Phone size={16} />
              <span>(463) 245-6061</span>
            </div>

            {/* Mobile Chat */}
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

            <button
              onClick={() => handlePageChange("contact")}
              className="w-full bg-slate-900 text-white px-6 py-2.5 text-sm font-medium rounded-md"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
}
