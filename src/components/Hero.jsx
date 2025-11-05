import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import BackgroundHeader from '../assets/Background-Header.mp4';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Preload video and handle loading states
    if (videoRef.current) {
      videoRef.current.preload = "auto";
      videoRef.current.load();
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Optimized Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            perspective: 1000,
            willChange: 'transform'
          }}
        >
          <source src={BackgroundHeader} type="video/mp4" />
        </video>
        
        {/* Dark blue overlay to match theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-950/70 to-slate-900/80"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 z-5 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(251 191 36) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 max-w-6xl mx-auto text-center pt-16 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-4 py-2 mb-6"
          >
            <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider">Leading Logistics Provider</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6"
          >
            Offering the Ultimate{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600"
            >
              Enabler
            </motion.span>{" "}
            for Business{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400"
            >
              Growth
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-slate-200 leading-relaxed px-2"
          >
            Driving Indonesia's logistics transformation through technology,
            trust, and precision.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-blue-950 rounded-lg font-bold text-sm sm:text-base shadow-lg transition-all duration-300"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-blue-950/50 backdrop-blur-sm border-2 border-amber-500/50 hover:bg-blue-950/70 hover:border-amber-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Scroll Indicator - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-12 sm:mt-16 hidden sm:flex flex-col items-center gap-2"
          >
            <span className="text-xs text-slate-300 uppercase tracking-wider">Scroll to Explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-950 to-transparent z-5"></div>
    </section>
  );
}
