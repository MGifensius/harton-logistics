import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Users, Calendar, Clock, Check } from 'lucide-react';

const Booking = () => {
  const { locationId } = useParams();
  const navigate = useNavigate();

  const [selectedTable, setSelectedTable] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    date: '',
    time: '',
    guests: '',
    name: '',
    phone: '',
    email: '',
    specialRequests: ''
  });

  const locationName = locationId === 'location1' ? 'O2 Hexagon Downtown' : 'O2 Hexagon Waterfront';

  // Table layout with different types and prices
  const tables = [
    // VIP Tables
    { id: 'vip1', type: 'VIP Booth', capacity: 8, price: 5000000, position: { x: '15%', y: '15%' }, status: 'available' },
    { id: 'vip2', type: 'VIP Booth', capacity: 8, price: 5000000, position: { x: '75%', y: '15%' }, status: 'available' },
    { id: 'vip3', type: 'VIP Booth', capacity: 10, price: 7000000, position: { x: '45%', y: '12%' }, status: 'available' },

    // Premium Tables
    { id: 'prem1', type: 'Premium Table', capacity: 6, price: 3000000, position: { x: '25%', y: '40%' }, status: 'available' },
    { id: 'prem2', type: 'Premium Table', capacity: 6, price: 3000000, position: { x: '65%', y: '40%' }, status: 'booked' },
    { id: 'prem3', type: 'Premium Table', capacity: 6, price: 3000000, position: { x: '45%', y: '35%' }, status: 'available' },

    // Standard Tables
    { id: 'std1', type: 'Standard Table', capacity: 4, price: 1500000, position: { x: '15%', y: '65%' }, status: 'available' },
    { id: 'std2', type: 'Standard Table', capacity: 4, price: 1500000, position: { x: '35%', y: '65%' }, status: 'available' },
    { id: 'std3', type: 'Standard Table', capacity: 4, price: 1500000, position: { x: '55%', y: '65%' }, status: 'available' },
    { id: 'std4', type: 'Standard Table', capacity: 4, price: 1500000, position: { x: '75%', y: '65%' }, status: 'booked' },

    // Bar Tables
    { id: 'bar1', type: 'Bar Table', capacity: 2, price: 800000, position: { x: '20%', y: '85%' }, status: 'available' },
    { id: 'bar2', type: 'Bar Table', capacity: 2, price: 800000, position: { x: '40%', y: '85%' }, status: 'available' },
    { id: 'bar3', type: 'Bar Table', capacity: 2, price: 800000, position: { x: '60%', y: '85%' }, status: 'available' },
    { id: 'bar4', type: 'Bar Table', capacity: 2, price: 800000, position: { x: '80%', y: '85%' }, status: 'available' },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleTableSelect = (table) => {
    if (table.status === 'booked') return;
    setSelectedTable(table);
  };

  const handleInputChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTable) {
      alert('Please select a table');
      return;
    }

    // Store booking data for payment page
    const bookingData = {
      locationId,
      locationName,
      table: selectedTable,
      details: bookingDetails,
      totalAmount: selectedTable.price
    };

    localStorage.setItem('currentBooking', JSON.stringify(bookingData));
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 top-0 left-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20 bottom-0 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <nav className="px-6 py-6">
          <div className="max-w-7xl mx-auto flex items-center gap-4">
            <button
              onClick={() => navigate('/locations')}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
            >
              <ArrowLeft size={18} />
              Back
            </button>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              {locationName}
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
          >
            Reserve Your Table
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Seating Layout */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Select Your Table</h2>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-600 rounded"></div>
                  <span className="text-gray-300">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-pink-600 ring-2 ring-pink-400 rounded"></div>
                  <span className="text-gray-300">Selected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-600 rounded"></div>
                  <span className="text-gray-300">Booked</span>
                </div>
              </div>

              {/* Seating Map */}
              <div className="relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/30 aspect-square">
                {/* Stage/DJ Area */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-b-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">DJ STAGE</span>
                </div>

                {/* Dance Floor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-dashed border-purple-500/50 rounded-full flex items-center justify-center">
                  <span className="text-purple-400 text-xs">DANCE FLOOR</span>
                </div>

                {/* Tables */}
                {tables.map((table) => (
                  <motion.button
                    key={table.id}
                    onClick={() => handleTableSelect(table)}
                    disabled={table.status === 'booked'}
                    whileHover={table.status === 'available' ? { scale: 1.1 } : {}}
                    whileTap={table.status === 'available' ? { scale: 0.95 } : {}}
                    className={`absolute w-12 h-12 rounded-lg flex items-center justify-center text-white text-xs font-bold transition-all ${
                      table.status === 'booked'
                        ? 'bg-gray-600 cursor-not-allowed'
                        : selectedTable?.id === table.id
                        ? 'bg-pink-600 ring-2 ring-pink-400 shadow-lg shadow-pink-500/50'
                        : 'bg-purple-600 hover:bg-purple-700'
                    }`}
                    style={{
                      left: table.position.x,
                      top: table.position.y,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {table.capacity}
                    {selectedTable?.id === table.id && (
                      <Check className="absolute -top-1 -right-1 bg-green-500 rounded-full p-0.5" size={16} />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Selected Table Info */}
              {selectedTable && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg"
                >
                  <h3 className="text-white font-bold mb-2">Selected Table: {selectedTable.id.toUpperCase()}</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-gray-300">Type:</div>
                    <div className="text-white font-semibold">{selectedTable.type}</div>
                    <div className="text-gray-300">Capacity:</div>
                    <div className="text-white font-semibold">{selectedTable.capacity} guests</div>
                    <div className="text-gray-300">Price:</div>
                    <div className="text-pink-400 font-bold">{formatPrice(selectedTable.price)}</div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Booking Details</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">
                      <Calendar className="inline mr-2" size={16} />
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={bookingDetails.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">
                      <Clock className="inline mr-2" size={16} />
                      Time
                    </label>
                    <select
                      name="time"
                      value={bookingDetails.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                      required
                    >
                      <option value="">Select time</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="22:00">10:00 PM</option>
                      <option value="23:00">11:00 PM</option>
                      <option value="00:00">12:00 AM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    <Users className="inline mr-2" size={16} />
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    name="guests"
                    value={bookingDetails.guests}
                    onChange={handleInputChange}
                    min="1"
                    max={selectedTable?.capacity || 10}
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    placeholder="Number of guests"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={bookingDetails.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingDetails.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    placeholder="+62 812 3456 7890"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={bookingDetails.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="specialRequests"
                    value={bookingDetails.specialRequests}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    placeholder="Birthday celebration, bottle service, etc."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={!selectedTable}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Proceed to Payment
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
