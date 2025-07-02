import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";

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

const testimonials = [
  {
    text: "Clubora has completely transformed our clubhouse experience. The staff is courteous, the amenities are always spotless, and every event feels special.",
    name: "Mrs. Sharma",
    company: "Oberoi Splendor Complex",
  },
  {
    text: "The professionalism and warmth of the Clubora team is unmatched. Our residents love the new vibe!",
    name: "Mr. Patel",
    company: "Hiranandani Gardens",
  },
  {
    text: "From the gym to the pool to the kids' play area, everything is managed so well. Highly recommend Clubora!",
    name: "Ms. Fernandes",
    company: "Raheja Exotica",
  },
  {
    text: "The events and workshops organized by Clubora have brought our community together like never before.",
    name: "Mr. Manchandani",
    company: "Shalimar Fortlez",
  },
];

const testimonialSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  arrows: true,
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
    <div className="w-2 h-2 rounded-full bg-burnt-orange/50 transition-all duration-300"></div>
  ),
  appendDots: (dots) => (
    <div>
      <ul className="m-0 p-0" style={{ margin: "20px 0" }}>
        {dots}
      </ul>
    </div>
  ),
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

const AssociatePartnerSection = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    id="testimonials"
    viewport={{ once: true }}
    variants={staggerContainer}
    className="relative py-20 bg-gradient-to-br from-clubora-navy to-clubora-blue text-center"
  >
    <div className=" mx-auto px-4 relative">
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
        My Business Partner
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        className="max-w-4xl mx-auto mt-12"
      >
        {/* <motion.p
          variants={fadeIn}
          className="text-xl text-clubora-burntOrange/90 mb-12 leading-relaxed"
        >
          Our attentive housekeeping team keeps all clubhouse and activity areas
          clean, fresh, and well-maintained—creating a welcoming environment
          every single day.
        </motion.p> */}
      </motion.div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left Column - Image and Text */}

      {/* Right Column - Best Practices List */}
      <motion.div
        variants={staggerContainer}
        className="bg-burnt-orange flex items-center justify-center p-8 md:p-12 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        <motion.div
          variants={fadeIn}
          className="flex flex-col items-center justify-center text-center p-4"
        >
          <div className="w-12 h-12 bg-burnt-orange rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3 text-center">
            Daily Cleaning
          </h3>
          <p className="text-white/80 text-sm text-center">
            Comprehensive cleaning of all clubhouse areas and activity spaces.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="flex flex-col items-center justify-center text-center p-4"
        >
          <div className="w-12 h-12 bg-burnt-orange rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3 text-center">
            Sanitization
          </h3>
          <p className="text-white/80 text-sm text-center">
            Regular sanitization protocols to ensure health and safety
            standards.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="flex flex-col items-center justify-center text-center p-4"
        >
          <div className="w-12 h-12 bg-burnt-orange rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3 text-center">
            Attention to Detail
          </h3>
          <p className="text-white/80 text-sm text-center">
            Meticulous attention to cleanliness and presentation in every space.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="flex flex-col items-center justify-center text-center p-4"
        >
          <div className="w-12 h-12 bg-burnt-orange rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3 text-center">
            Quality Assurance
          </h3>
          <p className="text-white/80 text-sm text-center">
            Regular inspections and quality checks to maintain high standards.
          </p>
        </motion.div>
      </motion.div>

      <div className="relative flex items-center justify-center p-8 md:p-12 text-white bg-black">
        <div className="absolute inset-0">
          <Image
            src={"./banner.png"}
            alt="Modern Cityscape"
            layout="fill"
            className="opacity-40 object-cover"
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
            className="text-sm md:text-xl font-bold leading-[1.5] mb-8"
          >
            Our attentive housekeeping team keeps all clubhouse and activity
            areas clean, fresh, and well-maintained—creating a welcoming
            environment every single day.
          </motion.h2>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default AssociatePartnerSection;
