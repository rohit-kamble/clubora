import { useState, useEffect } from "react";
import { Inter, Raleway } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  FaChevronLeft,
  FaChevronRight,
  FaRecycle,
  FaShieldAlt,
  FaDesktop,
  FaCubes,
  FaUserTie,
  FaClipboardCheck,
  FaCalendarAlt,
  FaStar,
  FaConciergeBell,
  FaDumbbell,
  FaSwimmer,
  FaGamepad,
  FaBaby,
  FaCalendarCheck as FaEvent,
} from "react-icons/fa";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import logo from "../logo.png";
import logoTitle from "../logoTiltle.png";
import emailjs from "@emailjs/browser";
import uniformedStaff from "../uniform.jpeg";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import GlobalExpertiseSection from "../components/sections/GlobalExpertiseSection";
import CluboraExperienceSection from "../components/sections/CluboraExperienceSection";
import FeaturedClientsSection from "../components/sections/FeaturedClientsSection";
import BestPracticesSection from "../components/sections/BestPracticesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ContactSection from "../components/sections/ContactSection";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-Inter",
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
    text: "We partnered with Clubora to bring a hospitality-style experience to our residential clubhouse—and they've exceeded expectations. Their trained staff, curated programs, and operational precision have added real lifestyle value for our residents. It's a brand that understands both service and community.",
    name: "Mr. Singh",
    company: "Ashray Developers",
  },
  {
    text: "Clubora brought a sense of luxury and order to our villa community. Their team is structured, proactive, and trained to deliver with finesse. Residents often share how the clubhouse feels alive and welcoming now—it's exactly the kind of partner we were looking for.",
    name: "Mr. Dogra",
    company: "Krishnaparam Villa",
  },
  {
    text: "What impressed us most about Clubora was their systems. From trained staff to internal audits, and regular program updates, everything runs like clockwork. They've brought a new level of professionalism to our clubhouse, and it reflects in the resident satisfaction.",
    name: "Mr. Chaudhary",
    company: "Charvi Reemz",
  },
  {
    text: "What truly sets Clubora apart is their team. From reception to gym attendants, every staff member is professionally trained, well-groomed, and carries the brand with pride. It's rare to find such consistency and courtesy across every level of service.",
    name: "Mr. Tiwari",
    company: "Shalimar Palms",
  },
  {
    text: "Clubora has transformed our clubhouse into a true community space. The energy, the staff presence, the quality of events—it's all elevated. Residents now look forward to weekends, and there's a real sense of connection across age groups. That's the value Clubora brings.",
    name: "Mr. Manchandani",
    company: "Shalimar Fortlez",
  },
];

const CustomArrow = ({ className, style, onClick, direction }) => (
  <button
    className={`absolute top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300
      ${direction === "left" ? "-left-4 md:-left-8" : "-right-4 md:-right-8"}`}
    onClick={onClick}
  >
    {direction === "left" ? (
      <FaChevronLeft className="w-5 h-5 text-clubora-navy" />
    ) : (
      <FaChevronRight className="w-5 h-5 text-clubora-navy" />
    )}
  </button>
);

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

      var templateParams = {
        name: form.name,
        email: form.email,
        mobile: form.mobile,
        message: form.message,
      };

      emailjs
        .send("service_l23oi5m", "template_h5dcxdm", templateParams, {
          publicKey: "MyJrGLYk2-3kOWrwY",
        })
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            setSubmitted(true);
            setIsSubmitting(false);
            setTimeout(() => {
              setSubmitted(false);
            }, 2000);
            setForm({
              name: "",
              email: "",
              mobile: "",
              message: "",
            });
          },
          function (err) {
            console.log("FAILED...", err);
            setIsSubmitting(false);
            setSubmitError("Failed to send message. Please try again.");
          }
        );

      // try {
      //   const response = await fetch("/api/contact", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(form),
      //   });
      //   console.log("response", response);
      //   const data = await response.json();

      //   if (response.ok) {
      //     setSubmitted(true);
      //     setTimeout(() => {
      //       setSubmitted(false);
      //     }, 2000);
      //     setForm({
      //       name: "",
      //       email: "",
      //       mobile: "",
      //       message: "",
      //     });
      //   } else {
      //     setSubmitError(
      //       data.message || "Something went wrong. Please try again."
      //     );
      //   }
      // } catch (error) {
      //   setSubmitError("Failed to send message. Please try again.");
      // } finally {
      //   setIsSubmitting(false);
      // }
    }
  }

  const testimonialSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: (i) => (
      <div className="w-2 h-2 rounded-full bg-burnt-orange/50 transition-all duration-300"></div>
    ),
    appendDots: (dots) => (
      <div>
        <ul className="m-0 p-0" style={{ margin: "20px 0" }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  };

  return (
    <div className={`${inter.className} min-h-screen w-full bg-clubora-white`}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <GlobalExpertiseSection />
      <CluboraExperienceSection />
      <FeaturedClientsSection />
      <BestPracticesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
