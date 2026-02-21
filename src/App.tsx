import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurProducts from "./pages/OurProducts";
import ContactUs from "./pages/ContactUs";
import ChatBot from "./components/ChatBot";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [chatOpen, setChatOpen] = useState(false);

  // 🔹 Handle navigation with optional productId
  const handleNavigate = (page: string, productId?: string) => {
    setCurrentPage(page);
    setSelectedProduct(productId || null);
  };

  // 🔹 Update page title
  useEffect(() => {
    const titles: Record<string, string> = {
      home: "Perfect Union Insurance",
      about: "About Us - Perfect Union Insurance",
      products: "Our Products - Perfect Union Insurance",
      contact: "Contact Us - Perfect Union Insurance",
    };

    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={handleNavigate} />;

      case "about":
        return <AboutUs />;

      case "products":
        return <OurProducts selectedProduct={selectedProduct} />;

      case "contact":
        return <ContactUs />;

      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* HEADER */}
      <Navigation
        onNavigate={handleNavigate}
        onOpenChat={() => setChatOpen(true)}
      />

      {/* MAIN CONTENT */}
      <main className="flex-grow pt-[120px]">
        {renderPage()}
      </main>

      {/* FOOTER */}
      <Footer onNavigate={handleNavigate} />

      {/* CHATBOT */}
      <ChatBot open={chatOpen} setOpen={setChatOpen} />

    </div>
  );
}

export default App;