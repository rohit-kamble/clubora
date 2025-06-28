import StatsSection from "@/pages/api/StatsSection";
import { motion } from "framer-motion";
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

const AboutSection = () => (
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
        residents experience community living. We bring the finesse of luxury
        hospitality into residential clubhouses—offering residents a seamless
        blend of service, lifestyle, and comfort typically found only in
        five-star hotels.
      </motion.p>
      <motion.p
        variants={fadeIn}
        className="text-lg text-clubora-gray leading-relaxed"
      >
        Our mission is to transform ordinary common areas into vibrant,
        well-managed lifestyle hubs where every interaction feels curated, every
        experience feels personal, and every detail reflects a higher standard
        of living.
      </motion.p>
      <motion.p
        variants={fadeIn}
        className="text-lg text-clubora-gray leading-relaxed"
      >
        Backed by years of hands-on experience in hospitality and residential
        operations, Clubora was created to meet the growing demand for
        professionally managed, lifestyle-driven community spaces.
        <br />
        {`At Clubora, we don't just manage spaces—we elevate lifestyles.`}
      </motion.p>
    </div>
    <StatsSection />
  </motion.section>
);

export default AboutSection;
