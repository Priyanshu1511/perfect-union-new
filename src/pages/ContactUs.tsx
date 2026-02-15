import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby7v6rVenrW1x4LZOnkR_qLDE85W2IpX5hdISFEoKkZ5Zd-yBrYPgPGXOysIqkFzXDb/exec",
        {
          method: "POST",
          mode: "no-cors", // 🔥 THIS FIXES IT
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
  
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
  
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
  
    } catch (error) {
      console.error("Submission error:", error);
    }
  };
  
  
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-200 font-light">
            Let's discuss how we can protect your business
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Request a Quote
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Fill out the form below and one of our insurance specialists will contact you
                within 24 hours to discuss your coverage needs.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-colors duration-200"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-colors duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell us about your insurance needs..."
                  />
                </div>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3">
                    Thank you for your message! We'll be in touch soon.
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white px-8 py-4 text-base font-medium tracking-wide hover:bg-slate-800 transition-colors duration-200"
                >
                  Submit Request
                </button>
              </form>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Phone size={24} className="text-slate-900" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Phone</h3>
                      <p className="text-slate-600">1-800-TRUCKING</p>
                      <p className="text-slate-600">(1-800-878-2546)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Mail size={24} className="text-slate-900" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Email</h3>
                      <p className="text-slate-600">quotes@apextrucking.com</p>
                      <p className="text-slate-600">support@apextrucking.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin size={24} className="text-slate-900" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Address</h3>
                      <p className="text-slate-600">
                        1500 Commerce Drive<br />
                        Suite 300<br />
                        Atlanta, GA 30318
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Clock size={24} className="text-slate-900" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Business Hours</h3>
                      <p className="text-slate-600">Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                      <p className="text-slate-600">Saturday: 9:00 AM - 2:00 PM EST</p>
                      <p className="text-slate-600">Sunday: Closed</p>
                      <p className="text-slate-600 mt-2 font-medium">24/7 Claims Support Available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-slate-600 mb-6">
                  Our claims team is available 24/7 to assist you when you need it most.
                </p>
                <button className="bg-slate-900 text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-slate-800 transition-colors duration-200">
                  Call Claims Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
            Partner with Industry Experts
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            With over 30 years of experience in commercial trucking insurance, our team has
            the knowledge and expertise to provide the coverage your business needs.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-slate-900 mb-2">Fast</div>
              <div className="text-lg text-slate-600">Quote Response</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-slate-900 mb-2">Expert</div>
              <div className="text-lg text-slate-600">Industry Knowledge</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-slate-900 mb-2">Trusted</div>
              <div className="text-lg text-slate-600">By Thousands</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
