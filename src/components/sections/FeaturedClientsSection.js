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
      variants={fadeIn}
      className="text-4xl md:text-5xl font-bold text-center mb-12 text-clubora-navy uppercase"
    >
      Our Amazing Clients
    </motion.h2>
    <LogoCarousel />
  </motion.section>
);

export default FeaturedClientsSection;
