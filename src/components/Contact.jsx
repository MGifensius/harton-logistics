import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Services() {
  const services = [
    {
      title: "Freight Forwarding",
      description: "Comprehensive air, sea, and land freight solutions with global coverage and competitive pricing.",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=800"
    },
    {
      title: "Integrated Supply Chain Solutions",
      description: "End-to-end supply chain management optimizing efficiency and reducing operational costs.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800"
    },
    {
      title: "Warehouse & Distribution",
      description: "Strategic warehousing solutions with efficient distribution networks across major regions.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800"
    },
    {
      title: "Last-Mile Delivery",
      description: "Reliable final delivery services ensuring timely and secure product arrival to end customers.",
      image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=800"
    },
    {
      title: "Cold Chain Logistics",
      description: "Temperature-controlled logistics for perishable goods with real-time monitoring.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800"
    },
    {
      title: "Customs Brokerage",
      description: "Expert customs clearance services ensuring compliance and smooth cross-border transactions.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800"
    },
    {
      title: "Project Cargo Management",
      description: "Specialized handling for oversized and complex project cargo with precision planning.",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800"
    }
  ];

  const slides = [
    // Slide 1: Services 1, 2, 3
    [services[0], services[1], services[2]],
    // Slide 2: Services 4, 5, 6
    [services[3], services[4], services[5]],
    // Slide 3: Service 7 + 2 Coming Soon
    [
      services[6],
      { title: "Coming Soon", description: "We're constantly expanding our services to better serve your logistics needs.", empty: true },
      { title: "Coming Soon", description: "New innovative solutions are in development to enhance your supply chain.", empty: true }
    ]
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="service" className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-slate-50 via-amber-50/20 to-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(30 58 138) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Section Header - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 sm:mb-20"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-amber-500"></div>
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 mb-4 tracking-tight">
            What We Deliver
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Comprehensive logistics solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Cards */}
          <div className="relative mb-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {slides[currentSlide].map((service, index) => (
                  <motion.div
                    key={`${currentSlide}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`relative rounded-lg overflow-hidden shadow-lg border transition-all duration-300 h-[280px] md:h-[320px] ${
                      service.empty 
                        ? "bg-gradient-to-br from-slate-50 to-slate-100 border-dashed border-slate-300" 
                        : "border-slate-200 hover:border-amber-400 hover:shadow-xl group"
                    }`}
                  >
                    {/* Background Image with Overlay */}
                    {!service.empty && (
                      <>
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundImage: `url(${service.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/85 to-blue-950/70"></div>
                      </>
                    )}
                    
                    {/* Card Content */}
                    <div className={`relative z-10 p-6 flex flex-col h-full ${service.empty ? '' : 'text-white'}`}>
                      {/* Service Number or Coming Soon Icon - Simplified */}
                      <div className={`mb-4 ${
                        service.empty ? "text-slate-400" : "text-amber-400"
                      }`}>
                        {service.empty ? (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        ) : (
                          <span className="text-3xl font-bold">
                            {String(currentSlide * 3 + index + 1).padStart(2, '0')}
                          </span>
                        )}
                      </div>
                      
                      {/* Service Content */}
                      <h3 className={`text-lg font-bold mb-3 ${
                        service.empty ? "text-slate-500" : "text-white"
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm leading-relaxed flex-1 ${
                        service.empty ? "text-slate-400" : "text-slate-200"
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Navigation - Very Close to Cards */}
          <div className="flex items-center justify-center gap-6 mb-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white border-2 border-slate-300 rounded-full flex items-center justify-center hover:border-amber-400 hover:bg-amber-50 transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-amber-500 scale-125' 
                      : 'bg-slate-300 hover:bg-amber-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white border-2 border-slate-300 rounded-full flex items-center justify-center hover:border-amber-400 hover:bg-amber-50 transition-all duration-300"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Additional Info - Very Close to Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <p className="text-base text-slate-600 mb-3">
            Need a customized logistics solution?
          </p>
          <button className="bg-blue-950 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 hover:text-blue-950 transition-all duration-300 shadow-lg">
            Contact Our Experts
          </button>
        </motion.div>
      </div>
    </section>
  );
}
