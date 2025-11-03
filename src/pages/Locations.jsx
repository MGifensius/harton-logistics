import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, Phone, ArrowLeft } from 'lucide-react';

const Locations = () => {
  const navigate = useNavigate();

  const locations = [
    {
      id: 'location1',
      name: 'O2 Hexagon Downtown',
      address: 'Jl. Ahmad Yani No. 123, Banjarmasin Tengah',
      city: 'Banjarmasin, Kalimantan Selatan 70122',
      hours: 'Thu - Sat: 9:00 PM - 4:00 AM',
      phone: '+62 511 1234 567',
      description: 'Our flagship location in the heart of downtown Banjarmasin. Features 3 floors of luxury with rooftop VIP lounge.',
      image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800',
      capacity: '500 guests',
      features: ['Rooftop VIP Lounge', 'Main Dance Floor', 'Premium Bar', 'Private Booths']
    },
    {
      id: 'location2',
      name: 'O2 Hexagon Waterfront',
      address: 'Jl. Pierre Tendean No. 88, Banjarmasin Selatan',
      city: 'Banjarmasin, Kalimantan Selatan 70234',
      hours: 'Thu - Sat: 9:00 PM - 4:00 AM',
      phone: '+62 511 7654 321',
      description: 'Experience nightlife by the river with stunning waterfront views. Premium sound system and world-class ambiance.',
      image: 'https://images.unsplash.com/photo-1571266028243-d220c6c1c9fb?w=800',
      capacity: '400 guests',
      features: ['Waterfront Terrace', 'LED Dance Floor', 'Champagne Lounge', 'River View VIP']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 top-0 left-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20 bottom-0 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <div className="relative z-10">
        <nav className="px-6 py-6">
          <div className="max-w-7xl mx-auto flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
            >
              <ArrowLeft size={18} />
              Back
            </button>
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              O2 HEXAGON
            </div>
          </div>
        </nav>

        {/* Title */}
        <div className="text-center px-6 py-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Choose Your Location
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-xl"
          >
            Two exceptional venues, one unforgettable experience
          </motion.p>
        </div>

        {/* Locations Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all shadow-2xl hover:shadow-purple-500/20">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-3xl font-bold text-white">{location.name}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-gray-300">{location.description}</p>

                    {/* Details */}
                    <div className="space-y-3 pt-4 border-t border-purple-500/20">
                      <div className="flex items-start gap-3 text-gray-300">
                        <MapPin size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                        <div>
                          <p>{location.address}</p>
                          <p className="text-sm text-gray-400">{location.city}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-gray-300">
                        <Clock size={20} className="text-pink-400 flex-shrink-0" />
                        <p>{location.hours}</p>
                      </div>

                      <div className="flex items-center gap-3 text-gray-300">
                        <Phone size={20} className="text-blue-400 flex-shrink-0" />
                        <p>{location.phone}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="pt-4">
                      <h4 className="text-white font-semibold mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {location.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Book Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate(`/booking/${location.id}`)}
                      className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/50"
                    >
                      Book This Location
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
