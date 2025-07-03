import { motion } from "framer-motion";
import Image from "next/image";
import ffms from "../../pics/ffs.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.15,
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

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", stiffness: 80 },
  },
};

const ServicePartnerSection = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    id="services"
    viewport={{ once: true, amount: 0.2 }}
    className="flex flex-col items-center justify-center py-12 px-4"
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
      Our Service Partner
    </motion.h2>
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-2xl  max-w-2xl w-full p-8 flex flex-col items-center text-center"
    >
      {/* <motion.div variants={itemVariants}>
        <FaUsers className="w-12 h-12 text-[#D35400] mb-4" />
      </motion.div> */}
      <Image src={ffms} width={100} height={100} alt="FFMS" />
      <motion.h3
        variants={itemVariants}
        className="text-2xl md:text-3xl font-semibold mb-3 mt-4 text-[#D35400]"
      >
        FFMS – Facility & Manpower Experts
      </motion.h3>
      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl text-gray-700"
      >
        FFMS is one of the growing facility management service providers trusted
        across industries. Their ability to deploy skilled and unskilled trained
        manpower across locations complements Clubora&rsquo;s service
        delivery—bringing strength, reliability, and scale to our clubhouse
        operations.
      </motion.p>
    </motion.div>
  </motion.section>
);

export default ServicePartnerSection;
