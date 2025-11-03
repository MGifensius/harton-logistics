import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Building2, Smartphone, CheckCircle, MapPin, Calendar, Users } from 'lucide-react';

const Payment = () => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const storedBooking = localStorage.getItem('currentBooking');
    if (!storedBooking) {
      navigate('/locations');
      return;
    }
    setBookingData(JSON.parse(storedBooking));
  }, [navigate]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Save booking to localStorage
    const bookings = JSON.parse(localStorage.getItem('o2hexagon_bookings') || '[]');
    const newBooking = {
      id: Date.now().toString(),
      ...bookingData,
      paymentMethod,
      status: 'confirmed',
      bookedAt: new Date().toISOString()
    };
    bookings.push(newBooking);
    localStorage.setItem('o2hexagon_bookings', JSON.stringify(bookings));
    localStorage.removeItem('currentBooking');

    setProcessing(false);
    setSuccess(true);

    // Redirect to home after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (!bookingData) {
    return null;
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="mb-6"
          >
            <CheckCircle className="mx-auto text-green-500" size={100} />
          </motion.div>
          <h1 className="text-4xl font-bold text-white mb-4">Booking Confirmed!</h1>
          <p className="text-gray-300 text-lg mb-2">Your table has been successfully reserved</p>
          <p className="text-gray-400">Confirmation details have been sent to your email</p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-purple-400"
          >
            Redirecting to home...
          </motion.div>
        </motion.div>
      </div>
    );
  }

  const paymentMethods = [
    { id: 'credit', name: 'Credit/Debit Card', icon: CreditCard, description: 'Visa, Mastercard, JCB' },
    { id: 'transfer', name: 'Bank Transfer', icon: Building2, description: 'BCA, Mandiri, BNI, BRI' },
    { id: 'ewallet', name: 'E-Wallet', icon: Smartphone, description: 'GoPay, OVO, Dana, ShopeePay' },
  ];

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
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
            >
              <ArrowLeft size={18} />
              Back
            </button>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              O2 HEXAGON
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-6 py-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
          >
            Complete Your Payment
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Booking Summary */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 h-fit"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Booking Summary</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white font-semibold">{bookingData.locationName}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-gray-300">
                  <Calendar className="text-pink-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Date & Time</p>
                    <p className="text-white font-semibold">
                      {new Date(bookingData.details.date).toLocaleDateString('id-ID', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-white">{bookingData.details.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-gray-300">
                  <Users className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Guests</p>
                    <p className="text-white font-semibold">{bookingData.details.guests} guests</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-purple-500/20">
                  <h3 className="text-white font-semibold mb-3">Table Details</h3>
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Table ID:</span>
                      <span className="text-white font-semibold">{bookingData.table.id.toUpperCase()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Type:</span>
                      <span className="text-white font-semibold">{bookingData.table.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Capacity:</span>
                      <span className="text-white font-semibold">{bookingData.table.capacity} guests</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-purple-500/20">
                  <h3 className="text-white font-semibold mb-3">Contact Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Name:</span>
                      <span className="text-white">{bookingData.details.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Phone:</span>
                      <span className="text-white">{bookingData.details.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Email:</span>
                      <span className="text-white">{bookingData.details.email}</span>
                    </div>
                  </div>
                </div>

                {bookingData.details.specialRequests && (
                  <div className="pt-4 border-t border-purple-500/20">
                    <h3 className="text-white font-semibold mb-2">Special Requests</h3>
                    <p className="text-gray-300 text-sm">{bookingData.details.specialRequests}</p>
                  </div>
                )}

                <div className="pt-4 border-t border-purple-500/20">
                  <div className="flex justify-between text-xl font-bold">
                    <span className="text-white">Total Amount:</span>
                    <span className="text-pink-400">{formatPrice(bookingData.totalAmount)}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Payment Method Selection */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Select Payment Method</h2>

              <form onSubmit={handlePayment} className="space-y-6">
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <motion.label
                      key={method.id}
                      whileHover={{ scale: 1.02 }}
                      className={`block cursor-pointer p-4 rounded-lg border-2 transition-all ${
                        paymentMethod === method.id
                          ? 'border-purple-500 bg-purple-500/20'
                          : 'border-purple-500/20 bg-white/5 hover:border-purple-500/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="sr-only"
                        required
                      />
                      <div className="flex items-center gap-4">
                        <method.icon className="text-purple-400 flex-shrink-0" size={32} />
                        <div className="flex-1">
                          <h3 className="text-white font-semibold">{method.name}</h3>
                          <p className="text-gray-400 text-sm">{method.description}</p>
                        </div>
                        {paymentMethod === method.id && (
                          <CheckCircle className="text-purple-400 flex-shrink-0" size={24} />
                        )}
                      </div>
                    </motion.label>
                  ))}
                </div>

                {paymentMethod && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/30 rounded-lg p-4"
                  >
                    <p className="text-gray-300 text-sm">
                      {paymentMethod === 'credit' && 'You will be redirected to secure payment gateway to enter your card details.'}
                      {paymentMethod === 'transfer' && 'Bank transfer instructions will be displayed after confirmation. Payment must be completed within 24 hours.'}
                      {paymentMethod === 'ewallet' && 'You will be redirected to your selected e-wallet app to complete the payment.'}
                    </p>
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={!paymentMethod || processing}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {processing ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Processing Payment...
                    </span>
                  ) : (
                    `Pay ${formatPrice(bookingData.totalAmount)}`
                  )}
                </motion.button>

                <p className="text-gray-400 text-xs text-center">
                  By completing this payment, you agree to our Terms & Conditions and Cancellation Policy
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
