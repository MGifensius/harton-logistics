import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { MapPin, Calendar, Users, Sparkles, LogOut } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 top-0 left-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20 bottom-0 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 top-1/2 left-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <nav className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent"
          >
            O2 HEXAGON
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            {user && (
              <>
                <span className="text-gray-300 hidden sm:inline">Welcome, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
                >
                  <LogOut size={18} />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            O2 HEXAGON
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 tracking-widest">
            BANJARMASIN'S PREMIER NIGHTCLUB
          </p>
          <div className="flex items-center justify-center gap-2 text-purple-400">
            <Sparkles className="animate-pulse" />
            <p className="text-lg">Where Luxury Meets The Night</p>
            <Sparkles className="animate-pulse" />
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black/40 backdrop-blur-xl rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all"
          >
            <MapPin className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-white mb-2">2 Locations</h3>
            <p className="text-gray-400">
              Experience the best of both worlds with our two exclusive venues across Banjarmasin
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-black/40 backdrop-blur-xl rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all"
          >
            <Calendar className="text-pink-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-white mb-2">Easy Booking</h3>
            <p className="text-gray-400">
              Reserve your table instantly with our interactive seating system
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-black/40 backdrop-blur-xl rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all"
          >
            <Users className="text-blue-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-white mb-2">VIP Experience</h3>
            <p className="text-gray-400">
              Exclusive service and premium seating for an unforgettable night
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <button
            onClick={() => navigate('/locations')}
            className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105"
          >
            <span>Book Your Table Now</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.div>
          </button>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-32 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-6">The Ultimate Night Experience</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            O2 Hexagon redefines nightlife in Banjarmasin with state-of-the-art sound systems,
            world-class DJs, and an atmosphere that exudes luxury and sophistication.
          </p>
          <p className="text-gray-400 text-lg">
            Join the elite at Banjarmasin's most exclusive nightclub where every night is an experience to remember.
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-purple-500/20 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 O2 Hexagon. All rights reserved.</p>
          <p className="mt-2 text-sm">Banjarmasin's Premier Nightlife Destination</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
