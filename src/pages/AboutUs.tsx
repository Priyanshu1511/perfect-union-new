import { Award, Target, Heart, TrendingUp } from 'lucide-react';

export default function AboutUs() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards of service and professionalism in everything we do.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Every policy is carefully crafted to meet the specific needs of your trucking operation.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build lasting relationships through honest communication and transparent practices.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Your success is our success. We partner with you as your business expands and evolves.',
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Built on Trust.<br />Driven by Excellence.
          </h1>
          <p className="text-xl text-gray-200 font-light">
            Three decades of protecting America's commercial trucking industry
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded in 1993, Apex Trucking Insurance was born from a simple observation:
                  commercial truckers deserved insurance partners who truly understood their business.
                </p>
                <p>
                  What started as a small regional operation has grown into one of the nation's most
                  trusted providers of commercial trucking insurance. Our success stems from an
                  unwavering commitment to our clients and a deep understanding of the transportation
                  industry.
                </p>
                <p>
                  Today, we protect thousands of trucking businesses across the country, from
                  owner-operators to large fleet operations. Our team of industry specialists works
                  tirelessly to ensure your business stays protected on every journey.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 h-96 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/1470166/pexels-photo-1470166.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Commercial trucks"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
            Our Mission
          </h2>
          <p className="text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-light">
            To provide commercial trucking businesses with comprehensive, reliable insurance solutions
            that protect their assets, support their growth, and deliver exceptional value through
            personalized service and industry expertise.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every relationship we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 text-slate-900">
                  <value.icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">
                Why Choose Apex?
              </h2>
              <ul className="space-y-6 text-lg">
                <li className="flex items-start">
                  <span className="text-2xl mr-4">•</span>
                  <span>Over 30 years of specialized experience in commercial trucking insurance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-4">•</span>
                  <span>Personalized service from dedicated industry experts who know your business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-4">•</span>
                  <span>Competitive rates backed by comprehensive coverage options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-4">•</span>
                  <span>24/7 claims support ensuring minimal disruption to your operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-4">•</span>
                  <span>Proven track record with thousands of satisfied clients nationwide</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-12 backdrop-blur-sm">
              <div className="space-y-8">
                <div className="border-l-4 border-white pl-6">
                  <div className="text-5xl font-bold mb-2">30+</div>
                  <div className="text-lg text-gray-300">Years of Experience</div>
                </div>
                <div className="border-l-4 border-white pl-6">
                  <div className="text-5xl font-bold mb-2">5,000+</div>
                  <div className="text-lg text-gray-300">Businesses Protected</div>
                </div>
                <div className="border-l-4 border-white pl-6">
                  <div className="text-5xl font-bold mb-2">24/7</div>
                  <div className="text-lg text-gray-300">Claims Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
