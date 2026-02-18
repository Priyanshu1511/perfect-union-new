import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenChat: () => void;
}

/* ================= SVG ICONS ================= */

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="#14b8a6" className="w-4 h-4">
    <path d="M6.6 10.8a15.05 15.05 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.36 2.3.56 3.6.56a1 1 0 011 1V21a1 1 0 01-1 1C10.3 22 2 13.7 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.3.2 2.5.56 3.6a1 1 0 01-.24 1l-2.2 2.2z" />
  </svg>
);

const ChatIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="black">
    <path d="M22,70.217C22,77,22,83,18,87c6.709,0,15-2,20.18-9.376C41.916,78.518,45.885,79,50,79c22.091,0,40-13.879,40-31S72.091,17,50,17S10,30.879,10,48c0,8.671,4.595,16.514,12,22.141V70.217z"></path>
    <circle cx="50" cy="48" r="3.5"></circle>
    <circle cx="33" cy="48" r="3.5"></circle>
    <circle cx="67" cy="48" r="3.5"></circle>
  </svg>
);

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
      {/* ================= TOP CONTACT BAR ================= */}
      <div className="fixed top-0 inset-x-0 bg-blue-50 border-b border-blue-100 z-50">
        <div className="max-w-7xl mx-auto px-4 h-9 flex items-center justify-between text-sm">

          {/* Left spacer (keeps center perfect) */}
          <div className="w-24 hidden sm:block"></div>

          {/* Centered Phone + Chat */}
          <div className="flex items-center gap-6 text-blue-700 font-medium">

            <div className="flex items-center gap-1 whitespace-nowrap">
              <PhoneIcon />
              <span className="hidden sm:inline">
              (463) 245-6061
              </span>
            </div>

            <button
              onClick={onOpenChat}
              className="flex items-center gap-1 hover:underline"
            >
              <ChatIcon />
              <span className="hidden sm:inline">
                Chat
              </span>
            </button>

          </div>

          {/* Right Sign In */}
          <div className="text-blue-700 font-medium">
            <span className="cursor-pointer hover:underline">
              Sign In
            </span>
          </div>

        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav className="fixed top-9 inset-x-0 bg-white shadow-sm z-40 h-16">
        <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">

          {/* Logo + Brand */}
          <button
            onClick={() => handlePageChange("home")}
            className="flex items-center gap-3"
          >
            <img
              src="./logo3.png"
              alt="Perfect Union Insurance"
              className="h-9 w-auto object-contain"
            />
            <span className="hidden sm:block text-lg font-semibold text-slate-800">
              Perfect Union Insurance
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handlePageChange("contact")}
              className="bg-slate-900 text-white px-5 py-2 text-sm font-medium rounded-md hover:bg-slate-800 transition shadow"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-slate-900"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}
        {isMobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-5 space-y-4">

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePageChange(item.id)}
                  className="block w-full text-left text-base font-medium text-slate-700 hover:text-slate-900"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={onOpenChat}
                className="flex items-center gap-2 text-sm font-medium text-slate-800"
              >
                <ChatIcon />
                Chat
              </button>

              <button
                onClick={() => handlePageChange("contact")}
                className="w-full bg-slate-900 text-white px-6 py-2.5 text-sm font-medium rounded-md"
              >
                Get a Quote
              </button>

            </div>
          </div>
        )}
      </nav>
    </>
  );
}
