import { motion } from "framer-motion";
import {
  FaTableTennis,
  FaSwimmer,
  FaYinYang,
  FaShoePrints,
  FaMusic,
} from "react-icons/fa";

import { MdSportsTennis } from "react-icons/md";

// Import background images
import tennisBg from "../../clubora_pics/pexels-kampus-8941567.jpg";
import swimmingBg from "../../clubora_pics/pexels-djvvadi-17264037.jpg";
import yogaBg from "../../clubora_pics/iris-lavoie-_45xHZTWlTY-unsplash.jpg";
import sportsBg from "../../clubora_pics/sports-tools.jpg";
import musicBg from "../../clubora_pics/pexels-zachtheshoota-1838640.jpg";
import badmintonBg from "../../clubora_pics/pexels-thatguycraig000-28748061.jpg";

const cardData = [
  {
    icon: <FaTableTennis className="text-white text-5xl mb-4 drop-shadow-lg" />, // 🎾
    title: "Rohan Bopanna Academy",
    desc: "Trained by Rohan Bopanna Academy",
    bgImage: tennisBg,
  },
  {
    icon: <FaSwimmer className="text-white text-5xl mb-4 drop-shadow-lg" />, // 🏊
    title: "Michael Phelps Swim Coaches",
    desc: "Certified Michael Phelps Swim Coaches",
    bgImage: swimmingBg,
  },
  {
    icon: <FaYinYang className="text-white text-5xl mb-4 drop-shadow-lg" />, // 🧘
    title: "Iyengar Yoga Instructors",
    desc: "Iyengar Yoga Instructors",
    bgImage: yogaBg,
  },
  {
    icon: <FaShoePrints className="text-white text-5xl mb-4 drop-shadow-lg" />, // 👟
    title: "Sports Brands Partners",
    desc: "In association with Decathlon, Puma, Nike, Yonex, Wildcraft",
    bgImage: sportsBg,
  },
  {
    icon: <FaMusic className="text-white text-5xl mb-4 drop-shadow-lg" />, // 🎵
    title: "Furtados Music Classes",
    desc: "Music Classes by Furtados",
    bgImage: musicBg,
  },
  {
    icon: (
      <MdSportsTennis className="text-white text-5xl mb-4 drop-shadow-lg" />
    ), // 🏆
    title: "Gopichand Badminton Academy",
    desc: "Powered by Gopichand Badminton Academy",
    bgImage: badmintonBg,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12 + 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  }),
  hover: {
    scale: 1.06,
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

const GlobalExpertiseSection = () => (
  <motion.section className="py-12 px-4 max-w-5xl mx-auto text-center">
    <motion.h2
      variants={titleVariants}
      initial="hidden"
      animate="visible"
      className="text-5xl md:text-6xl font-extrabold mb-10 inline-block bg-gradient-to-r from-burnt-orange via-clubora-gold to-clubora-navy bg-[length:200%_100%] bg-clip-text text-transparent relative"
      style={{
        animation: "shimmer 2.5s linear infinite",
        backgroundImage:
          "linear-gradient(90deg, #D35400 0%, #FFD580 40%, #0F2C3F 100%)",
        backgroundSize: "200% 100%",
        backgroundPosition: "-500px 0",
      }}
    >
      Global Expertise Local Excellence
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {cardData.map((card, idx) => (
        <motion.div
          key={idx}
          custom={idx}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.2 }}
          className="relative rounded-2xl shadow-xl border border-transparent p-8 text-center transition-all duration-300 flex flex-col items-center group overflow-hidden h-80"
          style={{
            willChange: "transform, box-shadow, border-color",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${card.bgImage.src})`,
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
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            {card.icon}
            <h3 className="text-2xl font-extrabold mb-2 text-white group-hover:text-clubora-gold transition-colors duration-300 drop-shadow-lg">
              {card.title}
            </h3>
            <p className="text-sm text-gray-200 font-medium drop-shadow-lg">
              {card.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default GlobalExpertiseSection;
