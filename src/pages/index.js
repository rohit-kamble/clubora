import { useState, useEffect } from "react";
import { Playfair_Display, Nunito } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const carouselContent = [
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
    alt: "Luxury Clubhouse Exterior",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80",
    alt: "Modern Swimming Pool",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1920&q=80",
    alt: "Fitness Center",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80",
    alt: "Luxury Lounge",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1920&q=80",
    alt: "Spa & Wellness",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80",
    alt: "Outdoor Recreation",
  },
];

// Dynamically import StatsSection with SSR disabled
const StatsSection = dynamic(() => import("./api/StatsSection"), {
  ssr: false,
});

const logos = [
  { src: "/logos/resort.png", alt: "The Resort Mumbai" },
  { src: "/logos/company2.png", alt: "Company 2" },
  { src: "/logos/company3.png", alt: "Company 3" },
  // Add more logos as needed
];

const LogoCarousel = dynamic(() => import("./api/LogoCarousal"), {
  ssr: false,
});

const testimonials = [
  {
    text: "The organization is known for its exceptional support and quality, with an experienced and cooperative team. The management is excellent, and the entire team is proactive in their approach. The organization maintains an excellent level of compliance, and their work culture is phenomenal.",
    name: "Vrushali Kapse",
    rating: 5,
  },
  {
    text: "EVERGREEN SERVICES stands out for its proactive approach, which is evident from the top down to every member of their team. They have successfully managed multiple offices for us, and their observant and analytical approach has helped us significantly reduce our administration and purchase costs.",
    name: "Kuldeep Jain",
    rating: 5,
  },
  // Add more testimonials as needed
];

export default function Home() {
  console.log("----&&*&*&", process.env.NEXT_PUBLIC_API_URL);
  // Contact form state and validation
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselContent.length);
    }, 4000); // Changed to 4 seconds for better viewing

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleVideoError = () => {
    console.error("Video failed to load");
    setVideoError(true);
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  function validate(form) {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!form.mobile.trim()) {
      errs.mobile = "Mobile is required.";
    } else if (!/^[5-9][0-9]{9}$/.test(form.mobile.trim())) {
      errs.mobile = "Enter a valid 10-digit mobile number starting with 5-9.";
    }
    if (!form.message.trim()) {
      errs.message = "Message is required.";
    }
    return errs;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
    setSubmitError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);
      setSubmitError("");

      try {
        const response = await fetch("http://localhost:3010/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        console.log("response", response);
        const data = await response.json();

        if (response.ok) {
          setSubmitted(true);
          setTimeout(() => {
            setSubmitted(false);
          }, 1000);
          setForm({
            name: "",
            email: "",
            mobile: "",
            message: "",
          });
        } else {
          setSubmitError(
            data.message || "Something went wrong. Please try again."
          );
        }
      } catch (error) {
        setSubmitError("Failed to send message. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  return (
    <div className={`${nunito.className} min-h-screen w-full bg-white`}>
      {/* Hero Section with Carousel */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0.7 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={carouselContent[currentImageIndex].url}
              alt={carouselContent[currentImageIndex].alt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60" />

        {/* Carousel Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {carouselContent.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImageIndex === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-6xl mx-auto px-4"
        >
          <motion.h1
            variants={fadeIn}
            className={`${playfair.className} text-7xl md:text-8xl font-bold mb-6 text-white drop-shadow-lg tracking-tight`}
          >
            CLUBORA
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed"
          >
            Luxury Clubhouse Management
          </motion.p>
        </motion.div>
      </section>

      {/* Luxury Features Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Premium Amenities",
                description:
                  "State-of-the-art facilities designed for luxury living",
                image:
                  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Exclusive Services",
                description: "Personalized attention and white-glove service",
                image:
                  "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Elite Experience",
                description: "Curated lifestyle programs and events",
                image:
                  "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="relative group overflow-hidden rounded-xl shadow-xl"
              >
                <div className="relative h-80">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3
                      className={`${playfair.className} text-2xl font-bold mb-2`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-gray-200">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={staggerContainer}
        className="relative"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
        </div>

        <div className=" px-4 relative z-10">
          <StatsSection />
        </div>
      </motion.section>

      {/* Business Overview Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto py-20 px-4 text-center bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5" />
        <motion.h2
          variants={fadeIn}
          className={`${playfair.className} text-sm md:text-5xl font-bold mb-8 text-gray-900 relative`}
        >
          Business Overview
        </motion.h2>
        <div className="max-w-3xl mx-auto relative">
          <motion.p
            variants={fadeIn}
            className="text-sm text-gray-600 mb-6 leading-relaxed"
          >
            Clubora is redefining how residential communities experience
            leisure, lifestyle, and hospitality. With over a decade of hands-on
            expertise, we go beyond basic clubhouse operations — delivering
            curated, service-first experiences that turn shared spaces into true
            lifestyle destinations.
          </motion.p>
          <motion.p
            variants={fadeIn}
            className="text-lg text-gray-600 leading-relaxed"
          >
            From boutique societies to large townships, Clubora brings
            consistent quality and hospitality-driven excellence to every
            community we serve.
          </motion.p>
        </div>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto py-20 px-4 text-center bg-gray-50"
      >
        <motion.h2
          variants={fadeIn}
          className={`${playfair.className} text-sm md:text-5xl font-bold mb-8 text-gray-900 relative`}
        >
          Our Clients
        </motion.h2>
        <LogoCarousel />
      </motion.section>

      {/* What We Do Section with Image Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto py-20 px-4 text-center bg-gray-50"
      >
        <motion.h2
          variants={fadeIn}
          className={`${playfair.className} text-4xl md:text-5xl font-bold mb-8 text-gray-900`}
        >
          What We Do
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto"
        >
          We offer comprehensive clubhouse management with an unwavering focus
          on service, engagement, and operational finesse.
        </motion.p>

        {/* Image Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {[
            "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=800&q=80",
          ].map((image, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              className="relative h-80 rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src={image}
                alt="Service showcase"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.h3
          variants={fadeIn}
          className="text-2xl font-semibold mb-6 text-gray-800"
        >
          Our Core Services Include:
        </motion.h3>
        <motion.ul
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left"
        >
          {[
            "Clubhouse operations and management",
            "Hospitality-trained staffing & concierge services",
            "Resident engagement programs and community events",
            "Gym, spa, pool & recreation area operations",
            "Premium housekeeping & facility upkeep",
            "Lifestyle curation and personalized resident experiences",
          ].map((service, index) => (
            <motion.li
              key={index}
              variants={fadeIn}
              className="flex items-center text-gray-600 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <svg
                className="w-5 h-5 text-yellow-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {service}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      {/* Mission & Vision Section with Background */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury pattern"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              variants={fadeIn}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-white/20"
            >
              <h3
                className={`${playfair.className} text-3xl font-bold mb-4 text-white`}
              >
                Our Mission
              </h3>
              <p className="text-gray-200 leading-relaxed">
                To elevate everyday living by transforming clubhouses into
                vibrant, hospitality-led spaces that bring comfort, connection,
                and community.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-white/20"
            >
              <h3
                className={`${playfair.className} text-3xl font-bold mb-4 text-white`}
              >
                Our Vision
              </h3>
              <p className="text-gray-200 leading-relaxed">
                To become the most trusted name in luxury clubhouse management —
                known for excellence, innovation, and consistently exceptional
                service.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Clubora Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto py-20 px-4 text-center bg-gray-50"
      >
        <motion.h2
          variants={fadeIn}
          className={`${playfair.className} text-4xl md:text-5xl font-bold mb-8 text-gray-900`}
        >
          Why Clubora?
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto"
        >
          While traditional facility management maintains, we elevate.
          <br />
          Where others deliver routine operations, we deliver thoughtful
          service, meaningful engagement, and a luxury-first mindset.
        </motion.p>
        <motion.h3
          variants={fadeIn}
          className="text-2xl font-semibold mb-6 text-gray-800"
        >
          We bring:
        </motion.h3>
        <motion.ul
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left"
        >
          {[
            "A hospitality-first approach to modern community living",
            "Tailored solutions for mid to high-end residential communities",
            "A professional, trained team focused on resident experience",
            "Proven systems and service standards honed over 10+ years",
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={fadeIn}
              className="flex items-center text-gray-600 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <svg
                className="w-5 h-5 text-yellow-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      {/* Our Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] py-20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            variants={fadeIn}
            className={`${playfair.className} text-4xl md:text-5xl font-bold text-center mb-12 text-white`}
          >
            Our Services
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Clubhouse Management",
                icon: "M3 10.5V8.75a.75.75 0 0 1 .41-.67l8-4a.75.75 0 0 1 .68 0l8 4a.75.75 0 0 1 .41.67v1.75M4.5 19.5h15M4.5 19.5V10.5m0 9V21m15-1.5V10.5m0 9V21M9 19.5v-5.25m6 5.25v-5.25",
              },
              {
                title: "Hospitality Services",
                icon: "M12 6v6l4 2M12 6v6l-4 2M12 6a8 8 0 100 16 8 8 0 000-16z",
              },
              {
                title: "Event Coordination",
                icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
              },
              {
                title: "Maintenance & Support",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl shadow-xl p-8 flex flex-col items-center transition-all duration-300 border border-white/20"
              >
                <svg
                  width="48"
                  height="48"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#eab308"
                  strokeWidth="1.5"
                  className="mb-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={service.icon}
                  />
                </svg>
                <h3 className="font-semibold text-xl text-white text-center">
                  {service.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=1920&q=80"
            alt="Happy Clients Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative">
          <motion.h2
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
          >
            Our Happy Clients!
          </motion.h2>
          <div className="flex flex-row gap-8 ">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="bg-white rounded-lg shadow-xl p-8 text-left border border-white/20"
              >
                {/* Star Rating */}
                <div className="flex items-center mb-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{t.text}</p>
                <p className="font-bold text-gray-900">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=1920&q=80"
            alt="Contact background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2
              className={`${playfair.className} text-4xl md:text-5xl font-bold mb-4 text-white`}
            >
              Get in Touch
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {`Have questions about our services? We're here to help. Send us a
              message and we'll get back to you shortly.`}
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="flex justify-center">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
              <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                    value={form.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  <span
                    className={`absolute left-0 top-[42px] text-red-400 text-xs mt-1 ${
                      errors.name ? "" : "invisible"
                    }`}
                  >
                    {errors.name || " "}
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                    value={form.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  <span
                    className={`absolute left-0 top-[42px] text-red-400 text-xs mt-1 ${
                      errors.email ? "" : "invisible"
                    }`}
                  >
                    {errors.email || " "}
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                    value={form.mobile}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  <span
                    className={`absolute left-0 top-[42px] text-red-400 text-xs mt-1 ${
                      errors.mobile ? "" : "invisible"
                    }`}
                  >
                    {errors.mobile || " "}
                  </span>
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 min-h-[120px] transition-all duration-300"
                    value={form.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  <span
                    className={`absolute left-0 top-[42px] text-red-400 text-xs mt-1 ${
                      errors.message ? "" : "invisible"
                    }`}
                  >
                    {errors.message || " "}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl ${
                    isSubmitting
                      ? "opacity-75 cursor-not-allowed"
                      : "hover:bg-yellow-600"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
                {submitted && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-400 text-center mt-2"
                  >
                    Thank you! Your message has been submitted.
                  </motion.span>
                )}
                {submitError && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-center mt-2"
                  >
                    {submitError}
                  </motion.span>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Rating Card Section */}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
