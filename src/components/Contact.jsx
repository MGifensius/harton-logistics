import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      detail: "0852-1380-8290",
      link: "tel:+6285213808290"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      detail: "hartontransindonesia@gmail.com",
      link: "mailto:hartontransindonesia@gmail.com"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Office",
      detail: "PT Harton Transportasi International, Menara Jakarta Office Tower, 25L. Jl. HBR Motik No.Kav. 1, RW.10, East Pademangan, Pademangan, North Jakarta City, Jakarta 10630",
      link: "https://maps.google.com/?q=Menara+Jakarta+Office+Tower"
    }
  ];

  const whatsappLink = "https://wa.me/6285213808290?text=Hello%20Harton%20Logistics,%20I%20would%20like%20to%20inquire%20about%20your%20services.";

  return (
    <section id="contact" className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-slate-50 via-amber-50/20 to-slate-50 overflow-hidden">
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
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Contact Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 mb-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Have questions about our services? We're here to help. Reach out to our team for expert logistics solutions.
          </p>
        </motion.div>

        {/* Contact Details - One Line Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white rounded-lg border border-slate-200 shadow-lg p-6 sm:p-8">
            <div className="space-y-5">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? "_blank" : "_self"}
                  rel={info.link.startsWith('http') ? "noopener noreferrer" : ""}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-blue-950 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider mr-2">
                        {info.title}:
                      </span>
                      <span className="text-sm text-slate-700 group-hover:text-blue-950 transition-colors duration-300">
                        {info.detail}
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Map and Business Hours - Side by Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6"
        >
          {/* Map - Takes 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-lg overflow-hidden border border-slate-200 shadow-lg h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.852332136551!2d106.84660819999999!3d-6.150524900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5cf8bbf12c5%3A0x74b9f0e766236cb1!2sMenara%20Jakarta%20at%20Kemayoran!5e0!3m2!1sen!2sid!4v1762316682581!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Harton Logistics Office Location"
            ></iframe>
          </div>

          {/* Business Hours - Takes 1 column */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-lg p-6 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-blue-950 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Business Hours
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Mon - Fri</span>
                <span className="font-semibold text-blue-950">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Saturday</span>
                <span className="font-semibold text-blue-950">09:00 - 14:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Sunday</span>
                <span className="font-semibold text-blue-950">Closed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us on WhatsApp
        </span>
      </a>
    </section>
  );
}
