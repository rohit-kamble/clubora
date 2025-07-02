import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaUserTie,
  FaClipboardCheck,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";
import uniformedStaff from "../../uniform.jpeg";

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

const BestPracticesSection = () => (
  <motion.section className="my-[100px]">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left Column - Image and Text */}
      <div className="relative flex items-center justify-center p-8 md:p-12 text-white">
        <div className="absolute inset-0">
          <Image
            src={uniformedStaff}
            alt="Modern Cityscape"
            layout="fill"
            className="object-cover"
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
            className="text-sm md:text-xl font-bold leading-[1.5] mb-8"
          >
            Hospitality Mindset. Lifestyle Execution. We bring hotel-style
            service, curated programming, and professionally trained teams to
            elevate the way residents live and connect within their communities.
          </motion.h2>
        </motion.div>
      </div>

      {/* Right Column - Best Practices List */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-burnt-orange flex items-center justify-center p-8 md:p-12 text-white"
      >
        <div className="max-w-md">
          <motion.h3 variants={fadeIn} className="text-3xl font-bold mb-8">
            What Sets Us Apart
          </motion.h3>
          <ul className="space-y-6">
            <motion.li variants={fadeIn} className="flex items-start gap-4">
              <FaUserTie className="w-8 h-8 text-white mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold">Trained & Uniformed Staff</h4>
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
                  Regular internal training & audits ensure 100% performance.
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
                  Workshops, events & wellness sessions designed for all ages.
                </p>
              </div>
            </motion.li>
            <motion.li variants={fadeIn} className="flex items-start gap-4">
              <FaStar className="w-8 h-8 text-white mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold">Luxury Service Standards</h4>
                <p className="text-white/80 mt-1">
                  Every interaction reflects five-star quality and precision.
                </p>
              </div>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export default BestPracticesSection;
