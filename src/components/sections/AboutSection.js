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
    {/* <motion.h2
      variants={fadeIn}
      className="text-4xl md:text-5xl font-bold text-center mb-12 text-clubora-navy uppercase"
    >
      Clubora
    </motion.h2> */}
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
