import { motion } from "framer-motion";
import {
  FaConciergeBell,
  FaDumbbell,
  FaSwimmer,
  FaGamepad,
  FaBaby,
  FaCalendarCheck as FaEvent,
} from "react-icons/fa";

// Use the services array from CluboraExperienceSection.js
const services = [
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
  {
    icon: FaConciergeBell,
    title: "Sports Academies & Coaching",
    description:
      "We bring certified coaches from leading sports academies to your clubhouse—offering expert-led training in badminton, tennis, football, swimming, and more for all age groups.",
  },
];

const fontSizeMap = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

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
  hidden: { opacity: 0, y: 10, scale: 0.5 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      delay: 0,
    },
  },
  hover: {
    scale: 1.045,
    boxShadow:
      "0 8px 32px 0 rgba(211, 84, 0, 0.18), 0 1.5px 8px 0 rgba(0,0,0,0.10)",
    borderColor: "#D35400",
    transition: { duration: 0.25 },
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

const WhatSetsUsApartSection = ({ fontSize = "sm" }) => (
  <motion.section
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="w-full flex flex-col text-center"
  >
    <motion.h2
      variants={titleVariants}
      initial="hidden"
      animate="visible"
      className="text-5xl md:text-6xl font-extrabold mb-4 inline-block text-muted relative"
      // className="text-5xl md:text-6xl font-extrabold mb-4 inline-block bg-gradient-to-r from-burnt-orange via-clubora-gold to-clubora-navy bg-[length:200%_100%] bg-clip-text text-transparent relative"
      // style={{
      //   animation: "shimmer 2.5s linear infinite",
      //   backgroundImage:
      //     "linear-gradient(90deg, #D35400 0%, #FFD580 40%, #0F2C3F 100%)",
      //   backgroundSize: "200% 100%",
      //   backgroundPosition: "-500px 0",
      // }}
    >
      Clubora Experience
    </motion.h2>
    <motion.div
      variants={sectionVariants}
      className="flex-1  flex flex-col justify-center p-8 md:p-16 text-white md:min-h-0"
    >
      <motion.div
        variants={sectionVariants}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.1 }}
            className={`flex  bg-burnt-orange items-start gap-5 bg-opacity-10 rounded-xl shadow-md p-6 border border-white/20 hover:shadow-lg hover:bg-opacity-20 transition`}
          >
            <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white flex-shrink-0 mt-1" />
            <div>
              <div className={`font-bold mb-1 ${fontSizeMap[fontSize]}`}>
                {service.title}
              </div>
              <div className={`${fontSizeMap[fontSize]} opacity-90`}>
                {service.description}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </motion.section>
);

export default WhatSetsUsApartSection;
