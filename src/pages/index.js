import { useState, useEffect } from "react";
import { Playfair_Display, Nunito } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navigation from "../components/Navigation";

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
  }, [isAutoPlaying, isVideoPlaying]); // Added isVideoPlaying dependency

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleVideoError = () => {
    console.error("Video failed to load");
    setVideoError(true);
    setIsVideoPlaying(false);
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

  // Video event listeners
  useEffect(() => {
    const video = document.querySelector("video");
    if (video) {
      video.addEventListener("play", handleVideoPlay);
      video.addEventListener("pause", handleVideoPause);
      video.addEventListener("loadeddata", handleVideoLoad);
      video.addEventListener("error", handleVideoError);

      return () => {
        video.removeEventListener("play", handleVideoPlay);
        video.removeEventListener("pause", handleVideoPause);
        video.removeEventListener("loadeddata", handleVideoLoad);
        video.removeEventListener("error", handleVideoError);
      };
    }
  }, []);

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
        const response = await fetch("/api/contact", {
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
    <div className={`${nunito.className} min-h-screen w-full bg-clubora-white`}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section with Carousel */}
      <section
        id="home"
        className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          >
            <source
              src="https://lotusdevelopers.com/template/front_assets/video/background-video.mp4"
              type="video/mp4"
            />
            {/* Fallback image if video fails to load */}
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
              alt="Luxury Clubhouse Exterior"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </video>
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/80 z-20" />

        {/* Carousel Navigation Dots - Only show if video is not playing */}

        {/* Hero Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-30 flex flex-col items-center justify-center text-center w-full max-w-6xl mx-auto px-4"
        >
          <motion.div variants={fadeIn} className="mb-6">
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-center mb-0 text-clubora-white flex items-center gap-2"
            >
              <Image
                src="/logo.png"
                alt="Clubora Logo"
                width={40}
                height={40}
                className="drop-shadow-lg"
                style={{
                  filter: "brightness(0) invert(1)",
                }}
                priority
              />{" "}
              Clubora
            </motion.h1>
          </motion.div>
          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-clubora-white max-w-2xl leading-relaxed"
          >
            Luxury Clubhouse Management
          </motion.p>

          {/* Video Controls */}
          {/* <motion.div
            variants={fadeIn}
            className="mt-8 flex items-center space-x-4"
          >
            <button
              onClick={() => {
                const video = document.querySelector("video");
                if (video) {
                  if (isVideoPlaying) {
                    video.pause();
                    setIsVideoPlaying(false);
                  } else {
                    video.play();
                    setIsVideoPlaying(true);
                  }
                }
              }}
              className="flex items-center space-x-2 bg-clubora-white/20 backdrop-blur-sm text-clubora-white px-4 py-2 rounded-lg hover:bg-clubora-white/30 transition-all duration-300"
            >
              {isVideoPlaying ? (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Play</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                const video = document.querySelector("video");
                if (video) {
                  video.pause();
                  setIsVideoPlaying(false);
                }
              }}
              className="bg-clubora-white/20 backdrop-blur-sm text-clubora-white px-4 py-2 rounded-lg hover:bg-clubora-white/30 transition-all duration-300"
            >
              Show Images
            </button>
          </motion.div> */}
        </motion.div>
      </section>

      {/* About Clubora Section */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto py-20 px-4 text-center bg-clubora-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5" />
        <motion.h2
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-clubora-navy "
        >
          About Clubora
        </motion.h2>
        <div className="max-w-3xl mx-auto relative">
          <motion.p
            variants={fadeIn}
            className="text-sm text-clubora-gray mb-6 leading-relaxed"
          >
            Clubora is redefining how residential communities experience
            leisure, lifestyle, and hospitality. With over a decade of hands-on
            expertise, we go beyond basic clubhouse operations — delivering
            curated, service-first experiences that turn shared spaces into true
            lifestyle destinations.
          </motion.p>
          <motion.p
            variants={fadeIn}
            className="text-lg text-clubora-gray leading-relaxed"
          >
            From boutique societies to large townships, Clubora brings
            consistent quality and hospitality-driven excellence to every
            community we serve.
          </motion.p>
        </div>
      </motion.section>

      {/* Services We Offer Section */}
      <motion.section
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto py-20 px-4 text-center bg-clubora-sky/20"
      >
        <motion.h2
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-clubora-navy "
        >
          Services We Offer
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-lg text-clubora-gray mb-8 max-w-3xl mx-auto"
        >
          We offer comprehensive clubhouse management with an unwavering focus
          on service, engagement, and operational finesse.
        </motion.p>

        {/* Image Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-4 gap-8 mb-12"
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
              className="relative h-50 rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src={image}
                alt="Service showcase"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.h3
          variants={fadeIn}
          className="text-2xl font-semibold mb-6 text-clubora-navy"
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
              className="flex items-center text-clubora-gray bg-clubora-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <svg
                className="w-5 h-5 text-clubora-gold mr-2"
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

      {/* Featured Clubhouses / Clients Section */}
      <motion.section
        id="featured"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto py-20 px-4 text-center "
      >
        <motion.h2
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-clubora-navy "
        >
          Featured Clubhouses / Clients
        </motion.h2>
        <motion.h2
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-clubora-navy "
        ></motion.h2>
        <LogoCarousel />
      </motion.section>

      {/* Why Choose Clubora Section */}
      <motion.section
        id="why"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="text-center bg-clubora-white"
      >
        <motion.h2
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-clubora-navy "
        >
          Why Clubora
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-lg text-clubora-gray mb-8 max-w-3xl mx-auto"
        >
          While traditional facility management maintains, we elevate.
          <br />
          Where others deliver routine operations, we deliver thoughtful
          service, meaningful engagement, and a luxury-first mindset.
        </motion.p>
        <motion.h3
          variants={fadeIn}
          className="text-2xl font-semibold mb-6 text-clubora-navy"
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
              className="flex items-center text-clubora-gray bg-clubora-sky/20 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <svg
                className="w-5 h-5 text-clubora-gold mr-2"
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
        <StatsSection />
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        id="testimonials"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative py-20 bg-gradient-to-br from-clubora-navy to-clubora-blue"
      >
        {/* Background Image */}
        {/* <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=1920&q=80"
            alt="Happy Clients Background"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-clubora-navy/80 to-clubora-navy/60" />
        </div> */}
        <div className="max-w-4xl mx-auto px-4 relative">
          <motion.h2
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-clubora-navy "
          >
            Our Happy Clients!
          </motion.h2>
          <div className="flex flex-row gap-8 ">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="bg-clubora-white rounded-lg shadow-xl p-8 text-left border border-clubora-white/20"
              >
                {/* Star Rating */}
                <div className="flex items-center mb-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-clubora-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </div>
                <p className="text-clubora-gray mb-4">{t.text}</p>
                <p className="font-bold text-clubora-navy">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Get in Touch / Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative py-20 bg-gradient-to-br from-clubora-navy to-clubora-blue"
      >
        {/* Background Image */}
        {/* <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=1920&q=80"
            alt="Contact background"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-clubora-navy/80 to-clubora-navy/60" />
        </div> */}

        <div className="max-w-6xl mx-auto px-4 relative">
          <motion.div variants={fadeIn} className="text-center mb-12">
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-center mb-12 text-clubora-navy "
            >
              Get in Touch
            </motion.h2>
            <p className="text-clubora-navy text-lg max-w-2xl mx-auto mb-8">
              {`Have questions about our services? We're here to help. Send us a
              message and we'll get back to you shortly.`}
            </p>

            {/* Social Media Handles */}
            <motion.div
              variants={fadeIn}
              className="flex justify-center items-center space-x-6 mb-8"
            >
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/clubora"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-clubora-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-clubora-white/30 transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-6 h-6 text-clubora-navy"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-clubora-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-clubora-white/30 transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-6 h-6 text-clubora-navy"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeIn} className="flex justify-center">
            <div className="w-full max-w-md bg-clubora-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-clubora-white/20">
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
                    className="w-full px-4 py-3 rounded-lg bg-clubora-white/90 text-clubora-navy placeholder-clubora-gray focus:outline-none focus:ring-2 focus:ring-clubora-gold transition-all duration-300"
                    value={form.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  <span
                    className={`absolute left-0 top-[42px] text-clubora-reddish text-xs mt-1 ${
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
                    className="w-full px-4 py-3 rounded-lg bg-clubora-white/90 text-clubora-navy placeholder-clubora-gray focus:outline-none focus:ring-2 focus:ring-clubora-gold transition-all duration-300"
                    value={form.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  <span
                    className={`absolute left-0 top-[42px] text-clubora-reddish text-xs mt-1 ${
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
                    className="w-full px-4 py-3 rounded-lg bg-clubora-white/90 text-clubora-navy placeholder-clubora-gray focus:outline-none focus:ring-2 focus:ring-clubora-gold transition-all duration-300"
                    value={form.mobile}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  <span
                    className={`absolute left-0 top-[42px] text-clubora-reddish text-xs mt-1 ${
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
                    className="w-full px-4 py-3 rounded-lg bg-clubora-white/90 text-clubora-navy placeholder-clubora-gray min-h-[120px] focus:outline-none focus:ring-2 focus:ring-clubora-gold transition-all duration-300"
                    value={form.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  <span
                    className={`absolute left-0 top-[120px] text-clubora-reddish text-xs mt-1 ${
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
                  className={`w-full bg-clubora-gold text-clubora-navy font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl ${
                    isSubmitting
                      ? "opacity-75 cursor-not-allowed"
                      : "hover:bg-clubora-gold/90"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
                {submitted && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-clubora-green text-center mt-2"
                  >
                    Thank you! Your message has been submitted.
                  </motion.span>
                )}
                {submitError && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-clubora-reddish text-center mt-2"
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
