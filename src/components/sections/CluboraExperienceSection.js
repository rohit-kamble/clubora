import { motion } from "framer-motion";
import {
  FaConciergeBell,
  FaDumbbell,
  FaSwimmer,
  FaGamepad,
  FaBaby,
  FaCalendarCheck as FaEvent,
} from "react-icons/fa";
import Image from "next/image";

// Import background images
import receptionBg from "../../pics/1_Reception.jpg";
import fitnessBg from "../../pics/2_fitness.jpg";
import poolBg from "../../pics/3_pool.jpg";
import gamesBg from "../../pics/4_games.jpg";
import kidsBg from "../../pics/5_play_area.jpg";
import eventsBg from "../../pics/6_events.jpg";
import sportsAcademyBg from "../../pics/7_acadmies.jpg";
import ffmsBg from "../../pics/ffs.jpg";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
  hover: {
    scale: 1.045,
    boxShadow:
      "0 8px 32px 0 rgba(211, 84, 0, 0.18), 0 1.5px 8px 0 rgba(0,0,0,0.10)",
    borderColor: "#D35400",
    transition: { duration: 0.25 },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
  hover: {
    scale: 1.18,
    rotate: -8,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, type: "spring", stiffness: 80, delay: 0.1 },
  },
};

const descVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, delay: 0.16 } },
};

const services = [
  {
    icon: FaConciergeBell,
    title: "Reception & Resident Assistance",
    description:
      "Our front-desk team is trained in hotel-style hospitality—offering courteous service, handling resident queries, managing bookings, and creating a welcoming first impression every time.",
    bgImage: receptionBg,
  },
  {
    icon: FaDumbbell,
    title: "Fitness Center Management",
    description:
      "Clubora gym attendants ensure that equipment is monitored, spaces are maintained, and residents feel safe, guided, and motivated in their daily workouts.",
    bgImage: fitnessBg,
  },
  {
    icon: FaSwimmer,
    title: "Pool Oversight & Lifeguard Services",
    description:
      "Professionally trained lifeguards not only ensure safety at the pool but also maintain a calm, clean, and vacation-like atmosphere for families and swimmers alike.",
    bgImage: poolBg,
  },
  {
    icon: FaGamepad,
    title: "Indoor & Outdoor Game Zone Attendants",
    description:
      "From board games to badminton, our game attendants manage recreational areas, assist residents, and keep these spaces active, friendly, and well-coordinated.",
    bgImage: gamesBg,
  },
  {
    icon: FaBaby,
    title: "Kids' Play Area & Crèche Supervision",
    description:
      "Our attentive play area staff create safe, engaging environments for younger residents—with structured activity time, supervision, and gentle care.",
    bgImage: kidsBg,
  },
  {
    icon: FaEvent,
    title: "Events, Workshops & Lifestyle Engagement",
    description:
      "Clubora curates and delivers experiences—from cultural celebrations to weekend workshops—making the clubhouse a true social and creative hub for all age groups.",
    bgImage: eventsBg,
  },
  {
    icon: FaConciergeBell,
    title: "Sports Academies & Coaching",
    description:
      "We bring certified coaches from leading sports academies to your clubhouse—offering expert-led training in badminton, tennis, football, swimming, and more for all age groups.",
    bgImage: sportsAcademyBg,
  },
  {
    icon: FaConciergeBell,
    title: "FFMS – Facility & Manpower Experts",
    description:
      "FFMS is one of the growing facility management service providers trusted across industries. Their ability to deploy skilled and unskilled trained manpower across locations complements Clubora's service delivery—bringing strength, reliability, and scale to our clubhouse operations.",
    bgImage: ffmsBg,
  },
];

// Add shimmer keyframes to the global style (if not already present)
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes shimmer {
      0% { background-position: -500px 0; }
      100% { background-position: 500px 0; }
    }
  `;
  document.head.appendChild(style);
}

const CluboraExperienceSection = () => (
  <motion.section
    id="services"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="py-12 px-4 max-w-5xl mx-auto text-center"
    // style={{
    //   background: "linear-gradient(135deg, #fff 60%, #fbeee6 100%)",
    //   borderRadius: "2rem",
    // }}
  >
    <motion.h2
      variants={titleVariants}
      initial="hidden"
      animate="visible"
      className="text-5xl md:text-6xl font-extrabold mb-4 inline-block bg-gradient-to-r from-burnt-orange via-clubora-gold to-clubora-navy bg-[length:200%_100%] bg-clip-text text-transparent relative"
      style={{
        animation: "shimmer 2.5s linear infinite",
        backgroundImage:
          "linear-gradient(90deg, #D35400 0%, #FFD580 40%, #0F2C3F 100%)",
        backgroundSize: "200% 100%",
        backgroundPosition: "-500px 0",
      }}
    >
      The Clubora Experience
    </motion.h2>
    <motion.p
      variants={sectionVariants}
      className="text-xl text-clubora-gold font-semibold mb-8"
    >
      Delivering a Luxury Experience in Everyday Residential Life
    </motion.p>
    <motion.p
      variants={sectionVariants}
      className="text-lg text-clubora-gray mb-16 max-w-4xl mx-auto leading-relaxed"
    >
      {`At Clubora, we believe a great clubhouse is not just about amenities—it's about how they're brought to life. That's why our focus is on placing the right people, with the right training, in the right roles. Every service we offer is designed to create a warm, seamless, and enriching resident experience`}
    </motion.p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.2 }}
          className="relative rounded-2xl shadow-xl border border-transparent p-8 text-left transition-all duration-300 flex flex-col items-start group overflow-hidden h-96"
          style={{
            willChange: "transform, box-shadow, border-color",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${service.bgImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Floating gradient accent on hover */}
          <motion.div
            className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-burnt-orange opacity-0 group-hover:opacity-20 blur-2xl z-0"
            animate={{}}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            className="relative z-10"
          >
            <service.icon className="w-12 h-12 text-white mb-5 drop-shadow-lg transition-transform duration-300" />
          </motion.div>
          <motion.h3
            variants={titleVariants}
            whileHover="hover"
            className="text-2xl font-bold text-white mb-3 group-hover:text-clubora-gold transition-colors duration-300 z-10 drop-shadow-lg"
          >
            {service.title}
          </motion.h3>
          <motion.p
            variants={descVariants}
            className="text-gray-200 leading-relaxed z-10 drop-shadow-lg text-sm"
          >
            {service.description}
          </motion.p>
        </motion.div>
      ))}
    </div>
    <motion.p
      variants={sectionVariants}
      className="text-lg text-clubora-gray mt-16 max-w-4xl mx-auto leading-relaxed italic"
    >
      Every service is delivered with a human touch—rooted in hospitality, back
    </motion.p>
  </motion.section>
);

export default CluboraExperienceSection;
