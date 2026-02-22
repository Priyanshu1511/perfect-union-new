import { Truck, Users, Package, Shield, FileCheck, Clock } from "lucide-react";
import { useEffect } from "react";

interface OurProductsProps {
  selectedProduct?: string | null;
}

export default function OurProducts({ selectedProduct }: OurProductsProps) {
  const products = [
    {
      id: "commercial-truck",
      icon: Truck,
      title: "Commercial Truck Insurance",
      description:
        "Our tailored truck insurance includes Auto Liability, Motor Truck Cargo, Auto Physical Damage, and General Liability coverage to protect your business from accidents, vehicle damage, cargo loss, theft, and liability exposures on the road.",
      features: [
        "Bodily Injury Protection",
        "Property Damage Coverage",
        "Legal Defence Cost",
        "Required by Law",
      ],
      image:
        "https://images.pexels.com/photos/1630928/pexels-photo-1630928.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "auto-physical",
      icon: Users,
      title: "Auto Physical Damage",
      description:
        "Physical damage insurance covers repair or replacement costs if your business vehicles are damaged by collisions, theft, fire, vandalism, or weather events.",
      features: [
        "Comprehensive Coverage",
        "Collision Coverage",
        "Towing Expenses",
        "Glass Breakage",
      ],
      image:
        "url('https://github.com/Priyanshu1511/perfect-union-new/blob/main/src/pages/physicaldamage.jpeg')",
    },
    {
      id: "motor-cargo",
      icon: Shield,
      title: "Motor Truck Cargo",
      description:
        "Protect the goods you haul with comprehensive cargo coverage. Whether you transport general freight or specialized commodities, we have you covered.",
      features: [
        "General Freight Coverage",
        "Refrigerated Cargo Protection",
        "High-Value Goods Coverage",
        "Flexible Deductible Options",
      ],
      image:
        "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "general-liability",
      icon: Package,
      title: "General Liability Insurance",
      description:
        "Comprehensive protection against third-party claims for bodily injury and property damage.",
      features: [
        "Bodily Injury Coverage",
        "Property Damage Protection",
        "Legal Defence Cost",
        "Medical Expense Coverage",
      ],
      image:
        "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    
    {
      id: "non-trucking",
      icon: Clock,
      title: "Non-Trucking Liability / Bobtail",
      description:
        "Coverage for your truck when you're not under dispatch. Essential protection for owner-operators.",
      features: [
        "Personal Use Coverage",
        "Deadhead Mile Protection",
        "Own Truck Damage",
        "Affordable Rates",
      ],
      image:
        "https://images.pexels.com/photos/2449600/pexels-photo-2449600.jpeg?auto=compress&cs=tinysrgb&w=800",
    },

    {
      id: "auto-insurance",
      icon: FileCheck,
      title: "Auto Insurance",
      description:
        "Protect your vehicle and peace of mind with our comprehensive car insurance options.",
      features: [
        "Comprehensive Protection",
        "Affordable Rates",
        "Easy Claim Process",
      ],
      image:
        "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  // ✅ Auto Scroll Logic
  useEffect(() => {
    if (selectedProduct) {
      setTimeout(() => {
        const element = document.getElementById(selectedProduct);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);
    }
  }, [selectedProduct]);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Our Insurance Products
          </h1>
          <p className="text-xl text-gray-200 font-light">
            Comprehensive coverage solutions tailored for the commercial
            trucking industry
          </p>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Complete Protection for Your Business
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From single trucks to large fleets, we offer the coverage you
              need to operate with confidence and security.
            </p>
          </div>

          <div className="space-y-24">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={product.id} // ✅ Important for scroll
                className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center scroll-mt-32"
              >
                {/* TEXT SIDE */}
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="mb-6 text-slate-900">
                    <product.icon size={56} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    {product.title}
                  </h3>

                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-slate-700"
                      >
                        <span className="w-2 h-2 bg-slate-900 rounded-full mr-3"></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="bg-slate-900 text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-slate-800 transition-colors duration-200">
                    Learn More
                  </button>
                </div>

                {/* IMAGE SIDE */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="h-80 bg-gray-100 overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
            Custom Coverage Solutions
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Every trucking operation is unique. Our experienced team will work
            with you to create a customized insurance package that perfectly
            fits your business needs and budget.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-900 text-white px-8 py-3 text-base font-medium tracking-wide hover:bg-slate-800 transition">
              Get a Custom Quote
            </button>

            <button className="bg-white text-slate-900 border-2 border-slate-900 px-8 py-3 text-base font-medium tracking-wide hover:bg-slate-50 transition">
              Speak with an Expert
            </button>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">Competitive</div>
              <div className="text-xl text-gray-300">Premium Rates</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Comprehensive</div>
              <div className="text-xl text-gray-300">Coverage Options</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Exceptional</div>
              <div className="text-xl text-gray-300">Customer Service</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}