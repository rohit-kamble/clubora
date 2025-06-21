import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display, Lato, Montserrat } from "next/font/google";
import Image from "next/image";
import logo from "../logo.png";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "services", label: "Services", href: "#services" },
    { id: "featured", label: "Featured", href: "#featured" },
    { id: "testimonials", label: "Testimonials", href: "#testimonials" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150; // Increased offset for mobile

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    // Initial call to set correct active section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu first
      setIsOpen(false);

      // Add a small delay to ensure menu closes before scrolling
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } else {
      console.warn(`Section with id "${sectionId}" not found`);
    }
  };

  // Debug function to check if sections exist
  useEffect(() => {
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (!element) {
        console.warn(`Section with id "${item.id}" not found in the DOM`);
      }
    });
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/15 backdrop-blur-md shadow-card border-b border-clubora-gray/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${playfair.className} text-2xl md:text-3xl font-bold ${
              isScrolled ? "text-clubora-navy" : "text-clubora-white"
            } cursor-pointer select-none`}
            onClick={() => scrollToSection("home")}
          >
            <Image
              src={logo}
              alt="Clubora Logo"
              width={40}
              height={40}
              className="drop-shadow-lg"
              style={{
                filter: "brightness(0) invert(1)",
              }}
              priority
            />{" "}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`${
                  montserrat.className
                } relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? isScrolled
                      ? "text-clubora-gold"
                      : "text-clubora-gold"
                    : isScrolled
                    ? "text-clubora-white hover:text-clubora-gold"
                    : "text-clubora-white/90 hover:text-clubora-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-clubora-gold`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 rounded-lg transition-colors duration-300 touch-manipulation ${
              isScrolled
                ? "text-clubora-navy hover:bg-clubora-sky/20 active:bg-clubora-sky/30"
                : "text-clubora-white hover:bg-clubora-white/10 active:bg-clubora-white/20"
            }`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className={`w-6 h-0.5 ${
                  isScrolled ? "bg-clubora-navy" : "bg-clubora-white"
                } transition-all duration-300`}
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`w-6 h-0.5 mt-1 ${
                  isScrolled ? "bg-clubora-navy" : "bg-clubora-white"
                } transition-all duration-300`}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className={`w-6 h-0.5 mt-1 ${
                  isScrolled ? "bg-clubora-navy" : "bg-clubora-white"
                } transition-all duration-300`}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div
                className={`py-4 space-y-2 border-t ${
                  isScrolled
                    ? "border-clubora-gray/20 bg-clubora-white/95 backdrop-blur-md"
                    : "border-clubora-white/20 bg-clubora-navy/20 backdrop-blur-md"
                }`}
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`${
                      montserrat.className
                    } w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                      activeSection === item.id
                        ? "bg-clubora-gold text-clubora-white shadow-card"
                        : isScrolled
                        ? "text-clubora-navy hover:bg-clubora-sky/20"
                        : "text-clubora-white hover:bg-clubora-white/10"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
