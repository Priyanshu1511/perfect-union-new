import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

interface ChatBotProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function ChatBot({ open, setOpen }: ChatBotProps) {
  const [messages, setMessages] = useState([
    { text: "Hi 👋 How can we help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.toLowerCase();
    let botReply = "Our team will contact you shortly.";

    if (userMessage.includes("quote")) {
      botReply = "You can request a quote by visiting our Contact page.";
    } else if (userMessage.includes("claim")) {
      botReply = "Please call our 24/7 claims support at 1-844-328-0306.";
    } else if (userMessage.includes("price") || userMessage.includes("cost")) {
      botReply =
        "Pricing depends on coverage and fleet size. Please request a custom quote.";
    } else if (userMessage.includes("hello") || userMessage.includes("hi")) {
      botReply = "Hello 👋 How can we assist you today?";
    }

    setMessages((prev) => [
      ...prev,
      { text: input, sender: "user" },
      { text: botReply, sender: "bot" },
    ]);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <div
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-slate-900 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-slate-800 transition z-50"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </div>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white shadow-2xl rounded-lg overflow-hidden z-50">
          <div className="bg-slate-900 text-white p-3 font-medium">
            Live Chat
          </div>

          <div className="p-3 h-64 overflow-y-auto text-sm space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-md ${
                  msg.sender === "bot"
                    ? "bg-gray-100 text-left"
                    : "bg-slate-900 text-white text-right"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex border-t">
            <input
              className="flex-1 p-2 text-sm outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button
              onClick={handleSend}
              className="bg-slate-900 text-white px-4 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
