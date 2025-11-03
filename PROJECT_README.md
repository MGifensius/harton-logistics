# O2 Hexagon - Nightclub Booking Website

A modern, elegant website for O2 Hexagon nightclub in Banjarmasin with table booking functionality.

## Features

### 1. Authentication System
- **Login Page** (`/login`) - User authentication with email and password
- **Register Page** (`/register`) - New user registration with form validation
- Uses localStorage for demo purposes (replace with backend API in production)

### 2. Landing Page
- **Home Page** (`/`) - Elegant hero section showcasing the nightclub
- Features grid highlighting key benefits
- Call-to-action button for booking

### 3. Location Selection
- **Locations Page** (`/locations`) - Displays both O2 Hexagon locations:
  - O2 Hexagon Downtown (Jl. Ahmad Yani No. 123)
  - O2 Hexagon Waterfront (Jl. Pierre Tendean No. 88)
- Each location card shows:
  - Location details (address, hours, phone)
  - Featured amenities
  - Capacity information
  - Booking button

### 4. Interactive Booking System
- **Booking Page** (`/booking/:locationId`) - Interactive seating layout
- Visual table selection with:
  - VIP Booths (8-10 guests) - IDR 5,000,000 - 7,000,000
  - Premium Tables (6 guests) - IDR 3,000,000
  - Standard Tables (4 guests) - IDR 1,500,000
  - Bar Tables (2 guests) - IDR 800,000
- Real-time availability status (Available/Booked)
- Booking form with:
  - Date and time selection
  - Guest count
  - Contact information
  - Special requests

### 5. Payment Integration
- **Payment Page** (`/payment`) - Complete booking summary and payment
- Three payment methods:
  - Credit/Debit Card
  - Bank Transfer (BCA, Mandiri, BNI, BRI)
  - E-Wallet (GoPay, OVO, Dana, ShopeePay)
- Booking confirmation with success animation

## Design Features

### Visual Style
- **Dark luxury theme** with purple and pink gradients
- **Glassmorphism effects** with backdrop blur
- **Animated backgrounds** with pulsing gradient orbs
- **Smooth animations** using Framer Motion
- **Responsive design** for all screen sizes

### Color Scheme
- Primary: Purple (#9333EA)
- Secondary: Pink (#EC4899)
- Background: Dark gradients (Gray 900 → Purple 900 → Black)
- Accents: Gold and blue for specific elements

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Lucide React** - Icon library

## Installation & Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open browser to `http://localhost:5173`

## Usage Flow

1. **Register/Login** - Create account or login
2. **Choose Location** - Select from 2 available venues
3. **Select Table** - Interactive seating map with pricing
4. **Fill Details** - Booking information and guest details
5. **Payment** - Choose payment method and confirm
6. **Confirmation** - Receive booking confirmation

## Data Storage

Currently uses localStorage for:
- User accounts (`o2hexagon_users`)
- Current user session (`o2hexagon_user`)
- Bookings (`o2hexagon_bookings`)
- Current booking (`currentBooking`)

### For Production

Replace localStorage with:
- Backend API (Node.js/Express, FastAPI, etc.)
- Database (PostgreSQL, MongoDB, etc.)
- Real payment gateway integration (Midtrans, Xendit, etc.)
- Email notifications
- Admin dashboard for booking management

## File Structure

```
src/
├── context/
│   └── AuthContext.jsx          # Authentication context provider
├── pages/
│   ├── Login.jsx               # Login page
│   ├── Register.jsx            # Registration page
│   ├── Home.jsx                # Landing page
│   ├── Locations.jsx           # Location selection
│   ├── Booking.jsx             # Table booking with seating map
│   └── Payment.jsx             # Payment and confirmation
├── App.jsx                     # Main app with routing
└── main.jsx                    # Entry point
```

## Security Notes

⚠️ This is a frontend demo. For production:
- Implement proper backend authentication (JWT, OAuth)
- Secure payment processing
- Input validation and sanitization
- Rate limiting and CSRF protection
- HTTPS only
- Environment variables for sensitive data

## Future Enhancements

- Admin panel for managing bookings
- Real-time table availability updates
- Email/SMS confirmations
- QR code for table check-in
- Loyalty program
- Event calendar
- Photo gallery
- Customer reviews
- Social media integration
- Multi-language support (Indonesian/English)

## License

Proprietary - O2 Hexagon Nightclub, Banjarmasin

## Contact

For inquiries about the nightclub:
- Downtown: +62 511 1234 567
- Waterfront: +62 511 7654 321
