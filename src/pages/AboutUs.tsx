import { Award, Target, Heart, TrendingUp } from 'lucide-react';
//import trucksImage from "";

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
    <div className="">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Built on Trust.<br />Driven by Excellence.
          </h1>
          <p className="text-xl text-gray-200 font-light">
          Driven to protect America’s commercial trucking industry
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
              <div className="space-y-6 text-gray-700 leading-relaxed">
  

  <p>
    In the world of transportation, every mile matters and every journey carries responsibility.
    At <strong>Perfect Union Insurance Agency LLC</strong>, we understand that a truck is more than
    just a vehicle — it is a livelihood, a promise, and a commitment to keep goods and businesses
    moving forward. That is why we have dedicated ourselves to protecting what drives you.
    We are not just an insurance provider. We are your partners on the road.
  </p>

  <p className="font-semibold text-slate-900">
    What makes us different?
  </p>

  <p>
    We know that behind every policy is a person: a driver working long hours, a family
    depending on steady income, a business owner building something meaningful.
    Your success is our success, and your peace of mind is our priority.
    When challenges arise, we stand beside you, guiding you through the process
    with honesty and care.
  </p>

  <p>
    Customers choose us because they trust us.
    They stay with us because we deliver.
  </p>

  <p className="font-medium text-slate-900">
    Have a question? We are ready. <br />
    Need advice? We are here. <br />
    Looking for better rates? Let us work for you.
  </p>

  <p>
    Wherever your next mile takes you, we will be right there with you.
  </p>
</div>

              </div>
            </div>
            <div className="bg-gray-100 h-96 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800"
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
          To goes beyond offering competitive pricing. We stay updated with industry changes, compliance requirements, and market trends so you don’t have to. We ensure that every aspect of your coverage fulfills legal obligations while also protecting you from unexpected situations. Whether it’s liability, cargo, physical damage, or specialized trucking coverage, we aim to be your single, reliable destination — your one solution for all insurance-related queries.
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
            Custom insurance solutions designed around your journey, your risks, and your goals. Complete protection, complete confidentiality.

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
                Why Choose Perfect Union Insurance?
              </h2>
              <ul className="space-y-6 text-lg">
                <li className="flex items-start">
                  <span className="text-2xl mr-4">•</span>
                  <span>Personalized service from dedicated industry experts who knows your business.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-4">•</span>
                  <span>Competitive rates backed by comprehensive coverage options.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-4">•</span>
                  <span>24/7 claims support ensuring minimal disruption to your operations.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-4">•</span>
                  <span>Quick response with real solutions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-4">•</span>
                  <span>Reliable protection that keeps your fleet moving.</span>
                </li>
              </ul>
            </div>
           
            <div className="relative p-16 rounded-lg bg-gradient-to-r from-slate-900 to-slate-800 text-white">
  
  <div className="max-w-3xl">
    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
      5+ Years of Experience in Customer Relationships
    </h2>

    <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
      Our vision is to set the standard of excellence among insurance providers
      by being innovative, financially strong, and delivering the right support
      and service to our customers — consistently exceeding their expectations.
      <br /><br />
      Our dedicated team brings over five years of hands-on experience in
      building trusted client relationships, ensuring reliability, transparency,
      and long-term protection for every business we serve.
    </p>
  </div>

</div>
          </div>
        </div>
      </section>
    </div>
  );
}
