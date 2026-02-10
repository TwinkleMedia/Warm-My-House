import Image from 'next/image';
import Link from 'next/link';

export default function Solution() {
  const services = [
    {
      category: "Plumbing Services",
      title: "Complete Plumbing Solutions",
      description: "We handle all aspects of plumbing work with precision and care. From routine maintenance to emergency repairs, our certified plumbers ensure your systems run smoothly.",
      image: "/assets/solution1.png",
      badgeText: "Most Popular",
      badgeColor: "bg-orange-500",
      buttonText: "Learn More",
      reverse: false,
      items: ["Leak Detection & Repair", "Pipe Installation & Replacement", "Drain Cleaning & Maintenance", "Emergency Plumbing Service"]
    },
    {
      category: "Gas & Heating Services",
      title: "Expert Heating & Gas Solutions",
      description: "Stay warm and safe with our comprehensive heating and gas services. Our Gas Safe registered engineers provide reliable installations and maintenance.",
      image: "/assets/solution2.png",
      badgeText: "Certified",
      badgeColor: "bg-blue-600",
      buttonText: "Learn More",
      reverse: true,
      items: ["Boiler Installation & Repair", "Central Heating Systems", "Gas Safety Inspections", "Radiator Installation"]
    },
    {
      category: "Customer Support",
      title: "Always Here When You Need Us",
      description: "Our dedicated support team is available around the clock to assist you. Get expert advice, schedule appointments, or request emergency services anytime.",
      image: "/assets/solution3.png",
      badgeText: "24/7 Available",
      badgeColor: "bg-green-600",
      buttonText: "Contact Us",
      reverse: false,
      items: ["Available 24/7", "Emergency Response", "Free Consultations", "Transparent Pricing"]
    },
    {
      category: "Boiler Servicing & Repairs",
      title: "Professional Boiler Care",
      description: "Keep your boiler running efficiently and safely with our comprehensive servicing and repair solutions. Prevent breakdowns and extend your system lifespan.",
      image: "/assets/solution4.png",
      badgeText: "Annual Service",
      badgeColor: "bg-purple-600",
      buttonText: "Book Service",
      reverse: true,
      items: ["Annual Boiler Servicing", "Fault Diagnosis & Repair", "Efficiency Optimization", "Safety Certifications"]
    }
  ];

  return (
    <main className="bg-gray-50">
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Main Heading */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Modern <span className="text-orange-500">Plumbing & Heating</span> Solutions
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Professional services delivered with expertise and care to keep your home comfortable and safe
            </p>
          </div>

          {/* Services Loop */}
          {services.map((service, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                
                {/* Image Section */}
                <div className={`relative group ${service.reverse ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-xl  transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="relative h-63 sm:h-80 lg:h-full w-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    {service.badgeText && (
                      <div className={`absolute top-5 left-5 ${service.badgeColor} text-white px-5 py-2 rounded-full font-semibold text-sm z-10`}>
                        {service.badgeText}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className={`space-y-6 ${service.reverse ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                      {service.category}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#FBAA18] mt-3 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="#" 
                    className="inline-flex items-center px-8 py-3.5 bg-orange-500 text-white font-semibold rounded-lg hover:bg-transparent hover:text-orange-500 border-2 border-orange-500 transition-all duration-300 group"
                  >
                    <span>{service.buttonText}</span>
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Show divider if not the last item */}
              {index !== services.length - 1 && (
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16 lg:my-24" />
              )}
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}