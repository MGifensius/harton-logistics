import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutUs from "./components/About";

export default function App() {
  return (
    <div className="overflow-x-hidden scroll-smooth bg-white text-gray-800 font-poppins">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
