import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LogoHarton from '../assets/Logo-Harton.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['About', 'Service', 'Contact'];

  return (
    <>
      {/* Desktop Island Navigation */}
      <nav className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-2xl border border-white/40 rounded-2xl shadow-2xl min-w-[600px]" // Increased to 600px
        >
          <div className="flex items-center px-10 py-2.5"> {/* Increased horizontal padding */}
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mr-16" // Increased margin
            >
              <img 
                src={LogoHarton} 
                alt="Harton Logistics" 
                className="h-10 w-auto"
              />
            </motion.div>

            {/* Navigation Links */}
            <div className="flex items-center gap-6"> {/* Increased gap between links */}
              {navItems.map((item, index) => (
                <div key={item} className="flex items-center">
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(59, 130, 246, 0.1)"
                    }}
                    className="relative px-6 py-1.5 rounded-xl text-sm font-medium text-gray-700 hover:text-slate-950 transition-all duration-300" // Increased horizontal padding
                  >
                    {item}
                  </motion.a>
                  {/* Separator - only show between items, not after last item */}
                  {index < navItems.length - 1 && (
                    <div className="w-px h-4 bg-gray-200/60 mx-3" /> // Increased margin around separator
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-lg"
        >
          <div className="flex items-center justify-between px-4 py-2.5">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={LogoHarton} 
                alt="Harton Logistics" 
                className="h-9 w-auto"
              />
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-gray-200"
              >
                <div className="px-4 py-3 space-y-1">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium text-sm"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </nav>
    </>
  );
}
