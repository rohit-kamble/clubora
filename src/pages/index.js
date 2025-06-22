import { useState, useEffect } from "react";
import { Playfair_Display, Raleway } from "next/font/google";
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

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});
const ralewayFont = Raleway({
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
          }, 2000);
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
      <div className="w-2 h-2 rounded-full bg-clubora-gold/50 transition-all duration-300"></div>
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
    <div
      className={`${ralewayFont.className} min-h-screen w-full bg-clubora-white`}
    >
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
              src={"https://rohit-kamble.github.io/clubora/banner-video.mp4"}
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
        <div className="absolute inset-0 bg-black/50 z-20" />

        {/* Carousel Navigation Dots - Only show if video is not playing */}

        {/* Hero Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-30 flex flex-col items-center justify-center text-center w-full max-w-6xl mx-auto px-4"
        >
          <motion.div variants={fadeIn} className="mb-6">
            {/* <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-center mb-0 text-clubora-white flex items-center gap-2"
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
              Clubora
            </motion.h1> */}
            <Image
              src={logoTitle}
              alt="Clubora Logo"
              width={300}
              // height={40}
              className="drop-shadow-lg"
              style={{
                filter: "brightness(0) invert(1)",
              }}
              priority
            />{" "}
          </motion.div>

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
        className=" mx-auto py-20 text-center bg-clubora-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5" />
        <motion.h2
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-clubora-navy uppercase"
        >
          Clubora
        </motion.h2>
        <div className="max-w-3xl mx-auto relative">
          <motion.p
            variants={fadeIn}
            className="text-lg text-clubora-gray leading-relaxed"
          >
            Clubora is a premium clubhouse management company redefining how
            residents experience community living. We bring the finesse of
            luxury hospitality into residential clubhouses—offering residents a
            seamless blend of service, lifestyle, and comfort typically found
            only in five-star hotels.
          </motion.p>
          <motion.p
            variants={fadeIn}
            className="text-lg text-clubora-gray leading-relaxed"
          >
            Our mission is to transform ordinary common areas into vibrant,
            well-managed lifestyle hubs where every interaction feels curated,
            every experience feels personal, and every detail reflects a higher
            standard of living.
          </motion.p>
          <motion.p
            variants={fadeIn}
            className="text-lg text-clubora-gray leading-relaxed"
          >
            Backed by years of hands-on experience in hospitality and
            residential operations, Clubora was created to meet the growing
            demand for professionally managed, lifestyle-driven community
            spaces.
            <br />
            {`At Clubora, we don't just manage spaces—we elevate lifestyles.`}
          </motion.p>
        </div>
        <StatsSection />
      </motion.section>

      {/* The Clubora Experience Section */}
      <motion.section
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto py-20 px-4 text-center"
      >
        <motion.h2
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-clubora-navy mb-4"
        >
          The Clubora Experience
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-xl text-clubora-gold font-semibold mb-8"
        >
          Bringing Hotel-Style Service to Everyday Community Living
        </motion.p>
        <motion.p
          variants={fadeIn}
          className="text-lg text-clubora-gray mb-16 max-w-4xl mx-auto leading-relaxed"
        >
          {`At Clubora, we believe a great clubhouse is not just about
          amenities—it&apos;s about how they're brought to life. That's why our
          focus is on placing the right people, with the right training, in the
          right roles. Every service we offer is designed to create a warm,
          seamless, and enriching resident experience`}
        </motion.p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: FaConciergeBell,
              title: "Reception & Resident Assistance",
              description:
                "Our front-desk team is trained in hotel-style hospitality—offering courteous service, handling resident queries, managing bookings, and creating a welcoming first impression every time.",
            },
            {
              icon: FaDumbbell,
              title: "Fitness Center Management",
              description:
                "Clubora gym attendants ensure that equipment is monitored, spaces are maintained, and residents feel safe, guided, and motivated in their daily workouts.",
            },
            {
              icon: FaSwimmer,
              title: "Pool Oversight & Lifeguard Services",
              description:
                "Professionally trained lifeguards not only ensure safety at the pool but also maintain a calm, clean, and vacation-like atmosphere for families and swimmers alike.",
            },
            {
              icon: FaGamepad,
              title: "Indoor & Outdoor Game Zone Attendants",
              description:
                "From board games to badminton, our game attendants manage recreational areas, assist residents, and keep these spaces active, friendly, and well-coordinated.",
            },
            {
              icon: FaBaby,
              title: "Kids' Play Area & Crèche Supervision",
              description:
                "Our attentive play area staff create safe, engaging environments for younger residents—with structured activity time, supervision, and gentle care.",
            },
            {
              icon: FaEvent,
              title: "Events, Workshops & Lifestyle Engagement",
              description:
                "Clubora curates and delivers experiences—from cultural celebrations to weekend workshops—making the clubhouse a true social and creative hub for all age groups.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 text-left transition-all duration-300 flex flex-col items-start"
            >
              <service.icon className="w-12 h-12 text-clubora-gold mb-5" />
              <h3 className="text-2xl font-bold text-clubora-navy mb-3">
                {service.title}
              </h3>
              <p className="text-clubora-gray">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeIn}
          className="text-lg text-clubora-gray mt-16 max-w-4xl mx-auto leading-relaxed italic"
        >
          Every service is delivered with a human touch—rooted in hospitality,
          backed by systems, and tailored to your community.
        </motion.p>
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
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-clubora-navy uppercase"
        >
          Our Amazing Clients
        </motion.h2>
        <motion.h2
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-clubora-navy "
        ></motion.h2>
        <LogoCarousel />
      </motion.section>

      {/* Best Practices Section */}
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column - Image and Text */}
          <div className="relative flex items-center justify-center p-8 md:p-12 text-white bg-black">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=1000&q=80"
                alt="Modern Cityscape"
                layout="fill"
                objectFit="cover"
                className="opacity-40"
              />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="relative z-10 max-w-md text-center lg:text-left"
            >
              <motion.h2
                variants={fadeIn}
                className="text-clubora-White text-[32px] mb-3 font-semibold mb-2 uppercase"
              >
                Why Clubora?
              </motion.h2>
              <motion.h2
                variants={fadeIn}
                className="text-sm md:text-xl font-bold leading-tight mb-8"
              >
                Hospitality Mindset. Lifestyle Execution. We bring hotel-style
                service, curated programming, and professionally trained teams
                to elevate the way residents live and connect within their
                communities.
              </motion.h2>
              {/* <motion.a
                href="#contact"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-clubora-gold text-clubora-navy font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </motion.a> */}
            </motion.div>
          </div>

          {/* Right Column - Best Practices List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-clubora-green flex items-center justify-center p-8 md:p-12 text-white"
          >
            <div className="max-w-md">
              <motion.h3 variants={fadeIn} className="text-3xl font-bold mb-8">
                What Sets Us Apart
              </motion.h3>
              <ul className="space-y-6">
                <motion.li variants={fadeIn} className="flex items-start gap-4">
                  <FaUserTie className="w-8 h-8 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold">
                      Trained & Uniformed Staff
                    </h4>
                    <p className="text-white/80 mt-1">
                      Staff across all roles trained in hospitality service &
                      grooming.
                    </p>
                  </div>
                </motion.li>
                <motion.li variants={fadeIn} className="flex items-start gap-4">
                  <FaClipboardCheck className="w-8 h-8 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold">
                      In-House Training & Audits
                    </h4>
                    <p className="text-white/80 mt-1">
                      Regular internal training & audits ensure 100%
                      performance.
                    </p>
                  </div>
                </motion.li>
                <motion.li variants={fadeIn} className="flex items-start gap-4">
                  <FaCalendarAlt className="w-8 h-8 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold">
                      Community Engagement Programs
                    </h4>
                    <p className="text-white/80 mt-1">
                      Workshops, events & wellness sessions designed for all
                      ages.
                    </p>
                  </div>
                </motion.li>
                <motion.li variants={fadeIn} className="flex items-start gap-4">
                  <FaStar className="w-8 h-8 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold">
                      Luxury Service Standards
                    </h4>
                    <p className="text-white/80 mt-1">
                      Every interaction reflects five-star quality and
                      precision.
                    </p>
                  </div>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

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
        <div className=" mx-auto px-4 relative">
          <motion.h2
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-clubora-navy "
          >
            Our Happy Clients!
          </motion.h2>
          <div className="flex justify-center items-center">
            <div className="w-[90%]">
              <Slider {...testimonialSliderSettings}>
                {testimonials.map((t, idx) => (
                  <div key={idx} className="p-4">
                    <motion.div
                      variants={fadeIn}
                      className="bg-clubora-white rounded-lg shadow-xl p-8 text-left border border-clubora-white/20 h-full flex flex-col justify-between min-h-[320px]"
                    >
                      <p className="text-clubora-gray mb-6 italic text-lg leading-relaxed">
                        {`"${t.text}"`}
                      </p>
                      <div className="mt-auto pt-4 border-t border-clubora-gold/20">
                        <p className="font-bold text-clubora-navy text-lg">
                          {t.name}
                        </p>
                        <p className="text-sm text-clubora-gold font-semibold">
                          {t.company}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </Slider>
            </div>
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
                    className="text-[#4caf50] text-center mt-2"
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
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
