import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display, Lato, Montserrat, Raleway } from "next/font/google";
import Image from "next/image";
import logo from "../logo.png";
import logoTitle from "../logoTiltle.png";

const ralewayFont = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-Raleway",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-montserrat",
});

const Navigation = ({ forceScrolled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFirstSectionCompleted, setIsFirstSectionCompleted] = useState(false);

  const navItems = [
    { id: "home", label: "Home", href: "home" },
    { id: "about", label: "About", href: "about" },
    { id: "services", label: "Services", href: "services" },
    // { id: "featured", label: "Featured", href: "#featured" },
    // { id: "testimonials", label: "Testimonials", href: "#testimonials" },
    { id: "contact", label: "Contact", href: "contact" },
  ];

  // Handle scroll events
  useEffect(() => {
    if (forceScrolled) {
      setIsScrolled(true);
      return;
    }
    let scrollTimeout;

    const handleScroll = () => {
      // Clear previous timeout
      clearTimeout(scrollTimeout);

      // Check if page is scrolled
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150; // Consistent offset for section detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }

      // Check if first section (home) is completed - more reliable detection
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const homeSectionTop = homeSection.offsetTop;
        const homeSectionHeight = homeSection.offsetHeight;
        const currentScrollY = window.scrollY;

        // Check if we've scrolled past 80% of the home section
        const threshold = homeSectionTop + homeSectionHeight * 0.8;
        const isHomeCompleted = currentScrollY > threshold;

        setIsFirstSectionCompleted(isHomeCompleted);
      }

      // Set scroll completed state after scrolling stops
      scrollTimeout = setTimeout(() => {
        // Additional logic can be added here if needed
      }, 150); // Wait 150ms after scroll stops
    };

    // Initial call to set correct active section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [forceScrolled]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    // const element = document.getElementById(sectionId);
    // if (element) {
    // Close mobile menu first
    setIsOpen(false);

    // Add a small delay to ensure menu closes before scrolling
    setTimeout(() => {
      window.location.href = `#${sectionId}`;
    }, 100);
    // } else {
    //   console.warn(`Section with id "${sectionId}" not found`);
    // }
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
        isFirstSectionCompleted
          ? "bg-black/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] shadow-[0_4px_16px_rgba(255,255,255,0.1)] border-b border-white/20 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none"
          : isScrolled || forceScrolled
          ? "bg-black/60 backdrop-blur-md shadow-card border-b border-clubora-gray/20"
          : "bg-transparent"
      }`}
    >
      <div className={`max-w-7xl mx-auto py-4 `}>
        <div className="flex items-center justify-between h-10 md:h-12">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${playfair.className} text-2xl md:text-3xl font-bold ${
              isFirstSectionCompleted
                ? "text-white"
                : isScrolled || forceScrolled
                ? "text-clubora-navy"
                : "text-clubora-white"
            } cursor-pointer select-none`}
            onClick={() => scrollToSection("home")}
          >
            {isScrolled || isFirstSectionCompleted || forceScrolled ? (
              <Image
                src={logoTitle}
                alt="Clubora Logo"
                width={200}
                height={200}
                className="drop-shadow-lg"
                style={{
                  filter: isFirstSectionCompleted
                    ? "brightness(0) invert(1)"
                    : "brightness(0) invert(1)",
                }}
                priority
              />
            ) : (
              <Image
                src={logo}
                alt="Clubora Logo"
                width={56}
                height={56}
                className="drop-shadow-lg relative top-[20px]"
                style={{
                  filter: "brightness(0) invert(1)",
                }}
                priority
              />
            )}
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
                  ralewayFont.className
                } relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? isFirstSectionCompleted
                      ? "text-white"
                      : isScrolled || forceScrolled
                      ? "text-clubora-gold"
                      : "text-clubora-gold"
                    : isFirstSectionCompleted
                    ? "text-white/90 hover:text-white"
                    : isScrolled || forceScrolled
                    ? "text-clubora-white hover:text-clubora-gold"
                    : "text-clubora-white/90 hover:text-clubora-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      isFirstSectionCompleted ? "bg-white" : "bg-clubora-gold"
                    }`}
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
              isFirstSectionCompleted
                ? "text-white hover:bg-white/20 active:bg-white/30"
                : isScrolled || forceScrolled
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
                  isFirstSectionCompleted
                    ? "bg-white"
                    : isScrolled || forceScrolled
                    ? "bg-clubora-navy"
                    : "bg-clubora-white"
                } transition-all duration-300`}
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`w-6 h-0.5 mt-1 ${
                  isFirstSectionCompleted
                    ? "bg-white"
                    : isScrolled || forceScrolled
                    ? "bg-clubora-navy"
                    : "bg-clubora-white"
                } transition-all duration-300`}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className={`w-6 h-0.5 mt-1 ${
                  isFirstSectionCompleted
                    ? "bg-white"
                    : isScrolled || forceScrolled
                    ? "bg-clubora-navy"
                    : "bg-clubora-white"
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
                  isFirstSectionCompleted
                    ? "border-white/20 bg-black/40 backdrop-blur-2xl shadow-[0_4px_16px_rgba(0,0,0,0.3)] shadow-[0_2px_8px_rgba(255,255,255,0.05)] relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/3 before:to-transparent before:pointer-events-none"
                    : isScrolled || forceScrolled
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
                      ralewayFont.className
                    } w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                      activeSection === item.id
                        ? isFirstSectionCompleted
                          ? "bg-white text-black shadow-card"
                          : "bg-clubora-gold text-clubora-white shadow-card"
                        : isFirstSectionCompleted
                        ? "text-white hover:bg-white/20"
                        : isScrolled || forceScrolled
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
