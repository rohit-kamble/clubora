import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Inter } from "next/font/google";
import Image from "next/image";
import logo from "../logo.png";
import logoTitle from "../logoTiltle.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-Inter",
});

const Navigation = ({ forceScrolled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

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
      clearTimeout(scrollTimeout);

      // Get hero section
      const heroSection = document.getElementById("home");
      let pastHero = false;
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        pastHero = window.scrollY + 80 > heroBottom; // 80 for nav height offset
      }

      setIsScrolled(pastHero);

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
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.49), rgba(0, 0, 0, 0.29), rgba(0, 0, 0, 0))",
      }}
      className={`navbar-glass fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className={`max-w-7xl mx-auto py-4 `}>
        <div className="flex items-center justify-between h-10 md:h-12">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${inter.className} text-2xl md:text-3xl font-[900] ${
              isScrolled || forceScrolled
                ? "text-clubora-navy"
                : "text-clubora-burntOrange"
            } cursor-pointer select-none`}
            onClick={() => scrollToSection("home")}
          >
            {isScrolled || forceScrolled ? (
              <Image
                src={logoTitle}
                alt="Clubora Logo"
                width={200}
                height={200}
                className="drop-shadow-lg relative left-[-44px]"
                priority
              />
            ) : null}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={` ${
                  inter.className
                } relative  px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? isScrolled || forceScrolled
                      ? "text-clubora-burntOrange"
                      : "text-clubora-white"
                    : isScrolled || forceScrolled
                    ? "text-clubora-burntOrange hover:text-clubora-burntOrange"
                    : "text-clubora-white hover:text-clubora-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      isScrolled || forceScrolled
                        ? "bg-burnt-orange"
                        : "bg-white"
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
              isScrolled || forceScrolled
                ? "text-clubora-navy hover:bg-clubora-sky/20 active:bg-clubora-sky/30"
                : "text-clubora-burntOrange hover:bg-clubora-white/10 active:bg-clubora-white/20"
            }`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className={`w-6 h-0.5 ${
                  isScrolled || forceScrolled
                    ? "bg-clubora-navy"
                    : "bg-clubora-white"
                } transition-all duration-300`}
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`w-6 h-0.5 mt-1 ${
                  isScrolled || forceScrolled
                    ? "bg-clubora-navy"
                    : "bg-clubora-white"
                } transition-all duration-300`}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className={`w-6 h-0.5 mt-1 ${
                  isScrolled || forceScrolled
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
                  isScrolled || forceScrolled
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
                    className={`font-[900] ${
                      inter.className
                    } w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-burnt-orange text-clubora-burntOrange shadow-card"
                        : isScrolled || forceScrolled
                        ? "text-clubora-navy hover:bg-clubora-sky/20"
                        : "text-clubora-burntOrange hover:bg-clubora-white/10"
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
