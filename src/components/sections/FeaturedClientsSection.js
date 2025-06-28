import { motion } from "framer-motion";
import LogoCarousel from "../../pages/api/LogoCarousal";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
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

const FeaturedClientsSection = () => (
  <motion.section
    id="featured"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
    className="max-w-6xl mx-auto py-20 px-4 text-center "
  >
    <motion.h2
      variants={titleVariants}
      initial="hidden"
      animate="visible"
      className="text-5xl font-extrabold mb-10 inline-block bg-gradient-to-r from-burnt-orange via-clubora-gold to-clubora-navy bg-[length:200%_100%] bg-clip-text text-transparent relative"
      style={{
        animation: "shimmer 2.5s linear infinite",
        backgroundImage:
          "linear-gradient(90deg, #D35400 0%, #FFD580 40%, #0F2C3F 100%)",
        backgroundSize: "200% 100%",
        backgroundPosition: "-500px 0",
      }}
    >
      Our Amazing Clients
    </motion.h2>
    <LogoCarousel />
  </motion.section>
);

export default FeaturedClientsSection;
