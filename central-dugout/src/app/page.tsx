/* eslint-disable @next/next/no-img-element */
"use client"; // Required for Framer Motion and interactivity

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa"; // Icons for navigation and testimonials
import Image from "next/image"; // Import the Image component from next/image

const features = [
  {
    icon: "⚽",
    title: "Team Management",
    description: "Easily manage your team roster, schedules, and player stats.",
  },
  {
    icon: "📅",
    title: "Scheduling",
    description: "Plan training sessions and matches with a built-in calendar.",
  },
  {
    icon: "📊",
    title: "Performance Tracking",
    description: "Track player performance and generate detailed reports.",
  },
];

const testimonials = [
  {
    name: "John Doe",
    role: "Head Coach",
    quote:
      "Central Dugout has transformed how we manage our team. Highly recommended!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Team Owner",
    quote:
      "The scheduling feature alone is worth it. A must-have for any football team.",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    role: "Player",
    quote:
      "The performance tracking tools are fantastic. It’s helped me improve my game significantly.",
    rating: 4,
  },
];

const sliderItems = [
  {
    title: "Collecting Payments",
    header: "APP FEATURE", // Dynamic header
    image: "/images/club-management.jpg", // Replace with your image path
  },
  {
    title: "Team Management",
    header: "CLUB FEATURE", // Dynamic header
    image: "/images/manage-teams.jpg", // Replace with your image path
  },
  {
    title: "Player Performance",
    header: "PLAYER FEATURE", // Dynamic header
    image: "/images/group-setup.jpg", // Replace with your image path
  },
  {
    title: "Event Scheduling",
    header: "APP FEATURE", // Dynamic header
    image: "/images/events-planning.jpg", // Replace with your image path
  },
];

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % sliderItems.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + sliderItems.length) % sliderItems.length
    );
  };

  // Automatic slider functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  // Get the previous, active, and next titles
  const prevIndex = (activeIndex - 1 + sliderItems.length) % sliderItems.length;
  const nextIndex = (activeIndex + 1) % sliderItems.length;

  // Navbar scroll effect
  const [navbarBackground, setNavbarBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          navbarBackground ? "bg-white shadow-lg py-1" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={navbarBackground ? "/logo5.png" : "/logo4.png"} // Dynamic logo
              alt="Logo"
              // width={32}
              // height={32}
              className="mr-2"
              style={{ height: "50px", width: "140px" }}
            />
            {/* <span className="text-xl font-bold text-primary">Central Dugout</span> */}
          </div>
          <div className="flex items-center space-x-8 font-bold">
          <a
              href="#about"
              className={`${
                navbarBackground ? "text-gray-800" : "text-white"
              } hover:text-primary`}
            >
              About
            </a>
            <a
              href="#features"
              className={`${
                navbarBackground ? "text-gray-800" : "text-white"
              } hover:text-primary`}
            >
              Features
            </a>
            
            <a
              href="#contact"
              className={`${
                navbarBackground ? "text-gray-800" : "text-white"
              } hover:text-primary`}
            >
              Contact Us
            </a>
            <a
              href="#faqs"
              className={`${
                navbarBackground ? "text-gray-800" : "text-white"
              } hover:text-primary`}
            >
              FAQs
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition">
              Login
            </button>
            <button className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-secondary-dark transition">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary overflow-hidden relative p-8">
        {/* Background Icon */}
        <motion.div
          className="absolute -left-80 -top-56 h-full opacity-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[45rem]">⚽</span> {/* Very big icon */}
        </motion.div>

        {/* Left Section: Header and Slider Titles */}
        <div className="flex flex-col items-start space-y-20 w-[30%] relative mr-8">
          {/* Previous Title */}
          <motion.div
            className="cursor-pointer text-right"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 0.5 }}
            transition={{ duration: 0.5 }}
            onClick={() => setActiveIndex(prevIndex)}
          >
            <div className="text-sm font-bold text-gray-200 uppercase">
              {sliderItems[prevIndex].header} {/* Previous header */}
            </div>
            <div className="text-2xl font-bold text-gray-200">
              {sliderItems[prevIndex].title} {/* Previous title */}
            </div>
          </motion.div>

          {/* Active Title */}
          <motion.div
            className="cursor-pointer text-right"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setActiveIndex(activeIndex)}
          >
            <div className="text-sm font-bold text-white uppercase">
              {sliderItems[activeIndex].header} {/* Active header */}
            </div>
            <div className="text-5xl font-bold text-white">
              {sliderItems[activeIndex].title} {/* Active title */}
            </div>
          </motion.div>

          {/* Next Title */}
          <motion.div
            className="cursor-pointer text-right"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 0.5 }}
            transition={{ duration: 0.5 }}
            onClick={() => setActiveIndex(nextIndex)}
          >
            <div className="text-sm font-bold text-gray-200 uppercase">
              {sliderItems[nextIndex].header} {/* Next header */}
            </div>
            <div className="text-2xl font-bold text-gray-200">
              {sliderItems[nextIndex].title} {/* Next title */}
            </div>
          </motion.div>
        </div>

        {/* Middle Section: Image Container */}
        <motion.div
          className="relative w-[40%] h-64"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ rotate: 5 }} // Rotate on hover
        >
          <Image
            key={activeIndex}
            src={sliderItems[activeIndex].image}
            alt={sliderItems[activeIndex].title}
            width={400}
            height={256}
            className="w-full h-full object-cover rounded-lg shadow-[10px_10px_20px_rgba(0,0,0,0.3)]"
          />

          {/* Navigation Buttons */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <button
              className="text-white p-2 rounded-full hover:bg-gray-100 hover:text-primary transition"
              onClick={handlePrev}
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              className="text-white p-2 rounded-full hover:bg-gray-100 hover:text-primary transition"
              onClick={handleNext}
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Right Section: Header Text and Paragraph */}
        <motion.div
          className="w-[30%] text-white ml-8"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold mb-6">Central Dugout</h1>
          <p className="text-base mb-8">
            Your ultimate football team management system. Simplify how you
            manage your clubs, teams, and groups with ease. Central Dugout
            offers a seamless experience for scheduling, performance tracking,
            and communication.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition">
            Get Started
          </button>
        </motion.div>
      </section>


      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            About Us
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Central Dugout is a comprehensive football team management system
            designed to simplify the way you manage your clubs, teams, and
            groups. Our mission is to provide a seamless experience for
            scheduling, performance tracking, and communication.
          </p>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-100 p-8 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-100 p-8 rounded-lg text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  <FaQuoteLeft className="inline-block mr-2" />
                  {testimonial.quote}
                  <FaQuoteRight className="inline-block ml-2" />
                </p>
                <p className="text-lg font-semibold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Have questions or need support? Reach out to us at{" "}
            <a href="mailto:support@centraldugout.com" className="text-primary">
              support@centraldugout.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            FAQs
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                How do I get started?
              </h3>
              <p className="text-gray-600">
                Sign up for an account and follow the onboarding process to set
                up your team.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Is Central Dugout free?
              </h3>
              <p className="text-gray-600">
                Yes, Central Dugout offers a free plan with basic features.
                Premium plans are available for advanced functionality.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Can I manage multiple teams?
              </h3>
              <p className="text-gray-600">
                Absolutely! Central Dugout supports managing multiple teams and
                clubs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Central Dugout</h3>
              <p className="text-gray-400">
                Your ultimate football team management system.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-primary"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-primary"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="text-gray-400 hover:text-primary">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email:{" "}
                <a
                  href="mailto:support@centraldugout.com"
                  className="text-primary"
                >
                  support@centraldugout.com
                </a>
              </p>
              <p className="text-gray-400">Phone: +1 (233) 50 600-2550</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 py-4">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2025 Central Dugout. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
