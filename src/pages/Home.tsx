import { Shield, Truck, Users, Clock } from 'lucide-react';
//import truckVideo from "../assets/movie/truck-video.mp4";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      icon: Truck,
      title: 'Commercial Truck Insurance',
      description: 'Comprehensive coverage for your commercial fleet, protecting your business and drivers on every journey.',
    },
    {
      icon: Shield,
      title: 'Liability Protection',
      description: 'Industry-leading liability coverage to safeguard your assets and ensure peace of mind.',
    },
    {
      icon: Users,
      title: 'Fleet Management',
      description: 'Tailored insurance solutions for fleets of all sizes, from single trucks to large operations.',
    },
    {
      icon: Clock,
      title: '24/7 Claims Support',
      description: 'Round-the-clock assistance when you need it most, ensuring minimal downtime for your business.',
    },
  ];

  return (
    <div className="">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
  autoPlay
  loop
  muted
  playsInline
  preload="metadata"
  className="absolute inset-0 w-full h-full object-cover"
>
  <source
    src="https://github.com/Priyanshu1511/perfect-union-new/releases/download/v1Video/truck-video3.mp4"
    type="video/mp4"
  />
</video>


        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/70"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Protecting Your Journey.<br />Every Mile.
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 font-light max-w-3xl mx-auto">
            Trusted commercial trucking insurance solutions built for the road ahead.
            Comprehensive coverage, exceptional service, unwavering reliability.
          </p>
          <button
  onClick={() => onNavigate('contact')}
  className="bg-white text-slate-900 px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg rounded-md"
>
  Get a Quote
</button>

        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Your Trusted Partner in Trucking Insurance
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            With decades of experience in commercial trucking insurance, we understand the unique challenges
            your business faces. Our mission is to provide comprehensive, reliable coverage that keeps your
            fleet moving forward with confidence.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Comprehensive Coverage Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tailored insurance products designed specifically for the commercial trucking industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="mb-6 text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                  <service.icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
          <button
  onClick={() => onNavigate('products')}
  className="bg-slate-900 text-white px-8 py-2.5 text-base font-medium tracking-wide rounded-md hover:bg-slate-800 transition-colors duration-200 shadow-md hover:shadow-lg"
>
  View All Products
</button>

          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Protect Your Fleet?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Get a personalized quote tailored to your business needs. Our experts are standing by.
          </p>
          <button
  onClick={() => onNavigate('contact')}
  className="bg-white text-slate-900 px-7 py-2.5 text-base font-medium tracking-wide rounded-md hover:bg-gray-100 transition-all duration-200"
>
  Contact Us Today
</button>

        </div>
      </section>
    </div>
  );
}
