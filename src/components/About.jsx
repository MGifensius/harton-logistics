import { motion } from "framer-motion";
import aboutHartonImage from "../assets/about-harton.png";

export default function AboutUs() {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Clients Served" },
    { number: "15+", label: "Team Members" },
    { number: "24/7", label: "Support" }
  ];

  const values = [
    {
      title: "Reliability & Accountability",
      description: "We deliver on our promises and take full responsibility for every aspect of our service, ensuring consistent and dependable performance."
    },
    {
      title: "Precision & Efficiency",
      description: "Our processes are optimized for accuracy and speed, minimizing delays and maximizing cost-effectiveness for our clients."
    },
    {
      title: "Integrity & Transparency",
      description: "We maintain the highest ethical standards and provide clear, honest communication throughout every business interaction."
    },
    {
      title: "Customer-Centric Excellence",
      description: "Your success is our priority. We tailor our solutions to meet your unique needs and exceed your expectations."
    },
    {
      title: "Innovation & Adaptability",
      description: "We continuously evolve our services and embrace new technologies to stay ahead in the dynamic logistics industry."
    },
    {
      title: "Collaboration & Teamwork",
      description: "We work closely with clients and partners, fostering strong relationships to achieve shared goals and mutual success."
    }
  ];

  return (
    <section id="about" className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-slate-50 via-amber-50/20 to-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(30 58 138) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 sm:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-amber-500 to-transparent"></div>
            <span className="text-amber-600 font-bold text-sm uppercase tracking-widest">About Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-950 mb-6 tracking-tight">
            Trusted Logistics Partner
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            For over a decade, Harton Logistics has been at the forefront of supply chain innovation, 
            delivering reliable and efficient logistics solutions to businesses across Southeast Asia.
          </p>
        </motion.div>

        {/* Hero Image with Overlay Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mb-16 sm:mb-20 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
            <img 
              src={aboutHartonImage} 
              alt="Harton Logistics Team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/40 to-transparent"></div>
            
            {/* Stats Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl sm:text-5xl font-bold text-amber-400 mb-2 drop-shadow-lg">
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base text-slate-200 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vision & Mission Section */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-12 bg-amber-500"></div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Vision & Mission</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-950">
              Our Purpose & Direction
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-950 rounded-lg p-8 text-white"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-4">Our Vision</h4>
              <p className="text-slate-200 leading-relaxed">
                To be Southeast Asia's most trusted and innovative logistics partner, enabling seamless global trade 
                and empowering businesses to reach their full potential through exceptional supply chain solutions.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg p-8 border-2 border-amber-400"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-950 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-blue-950 mb-4">Our Mission</h4>
              <p className="text-slate-600 leading-relaxed">
                To deliver reliable, efficient, and compliant logistics services that simplify complexity, 
                reduce costs, and accelerate growth for our clients through innovative technology, expert knowledge, 
                and unwavering commitment to excellence.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Story Section - Clean Professional Timeline */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-12 bg-amber-500"></div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Our Journey</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-950">
              Built on experience, driven by excellence
            </h3>
          </motion.div>

          {/* Timeline Items - Vertical Layout */}
          <div className="space-y-6">
            {/* 2015 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative bg-white rounded-lg p-8 border-l-4 border-blue-950 shadow-sm"
            >
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0 w-24">
                  <div className="flex flex-col items-center gap-1 bg-blue-950 rounded-lg px-4 py-3 w-full">
                    <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">Year</span>
                    <span className="text-white font-bold text-2xl">2015</span>
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-blue-950 mb-3">The Foundation</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    PT Harton Transportasi Internasional was founded with the goal of helping businesses and individuals who faced 
                    difficulties in managing permissions and customs clearance. We recognized the challenges in dealing with regulatory 
                    compliance and import/export documentation, many people also struggled with handling goods that were detained or 
                    had issues during the import/export process, so we created our company to assist them and provide expert assistance 
                    in these areas.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2017 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-white rounded-lg p-8 border-l-4 border-blue-950 shadow-sm"
            >
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0 w-24">
                  <div className="flex flex-col items-center gap-1 bg-blue-950 rounded-lg px-4 py-3 w-full">
                    <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">Year</span>
                    <span className="text-white font-bold text-2xl">2017</span>
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-blue-950 mb-3">The Evolution</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    As demand for comprehensive logistics solutions grew, we expanded our services to include stevedoring 
                    and trucking. This expansion allowed our customers to simplify their logistics processes, as they no longer 
                    needed to handle cargo unloading and inland transportation separately. Our goal was to meet customer demand 
                    and provide a true one-stop logistics solution. Present: Today, we offer a full suite of logistics services 
                    from permissions handling, customer clearance, stevedoring, trucking including warehousing, providing a truly 
                    end-to-end logistics solution. Our commitment to innovation and excellence continues to drive our growth and 
                    success.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Present */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative bg-white rounded-lg p-8 border-l-4 border-amber-500 shadow-sm"
            >
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0 w-24">
                  <div className="flex flex-col items-center gap-1 bg-amber-500 rounded-lg px-4 py-3 w-full">
                    <span className="text-blue-950 font-bold text-xs uppercase tracking-wider">Current</span>
                    <span className="text-blue-950 font-bold text-xl">Present</span>
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-blue-950 mb-3">Today & Beyond</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Today, we offer a full suite of logistics services from permissions handling, customer clearance, stevedoring, 
                    trucking including warehousing, providing a truly end-to-end logistics solution. Our commitment to innovation 
                    and excellence continues to drive our growth and success.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-12 bg-amber-500"></div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Why Choose Us</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-950">
              Your Success is Our Priority
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg p-6 border border-slate-200 hover:border-amber-400 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-blue-950 mb-2">Proven Expertise</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Over a decade of experience in customs clearance, freight forwarding, and regulatory compliance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg p-6 border border-slate-200 hover:border-amber-400 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-950 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-blue-950 mb-2">Fast & Reliable</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Streamlined processes and dedicated support ensure your shipments arrive on time, every time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg p-6 border border-slate-200 hover:border-amber-400 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-blue-950 mb-2">Cost-Effective</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Competitive pricing and optimized routes help you maximize value and reduce operational costs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg p-6 border border-slate-200 hover:border-amber-400 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-950 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-blue-950 mb-2">24/7 Support</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Round-the-clock customer service means you always have access to real-time updates and assistance.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Core Values - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-12 bg-amber-500"></div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Core Values</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-950">
              What Drives Us Forward
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-lg p-6 border border-slate-200 hover:border-amber-400 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded bg-blue-950 flex items-center justify-center">
                    <span className="text-amber-400 font-bold text-sm">{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-950">
                    {value.title}
                  </h4>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
