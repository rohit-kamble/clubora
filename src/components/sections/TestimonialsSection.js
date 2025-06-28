import { motion } from "framer-motion";
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

const TestimonialsSection = () => (
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
        className="text-5xl font-extrabold mb-10 inline-block bg-gradient-to-r from-burnt-orange via-clubora-gold to-clubora-navy bg-[length:200%_100%] bg-clip-text text-transparent relative"
        style={{
          animation: "shimmer 2.5s linear infinite",
          backgroundImage:
            "linear-gradient(90deg, #D35400 0%, #FFD580 40%, #0F2C3F 100%)",
          backgroundSize: "200% 100%",
          backgroundPosition: "-500px 0",
        }}
      >
        Our Happy Clients!
      </motion.h2>
      <div className="flex justify-center items-center">
        <div className="w-[90%]">
          <Slider {...testimonialSliderSettings}>
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-4">
                <motion.div
                  variants={fadeIn}
                  className="bg-clubora-white rounded-lg shadow-xl p-8 text-left h-full flex flex-col justify-between min-h-[320px]"
                >
                  <p className="text-clubora-gray mb-6 italic text-lg leading-relaxed">
                    {`"${t.text}"`}
                  </p>
                  <div className="mt-auto pt-4 border-t border-clubora-gold/20">
                    <p className="font-bold text-clubora-navy text-lg">
                      {t.name}
                    </p>
                    <p className="text-sm text-clubora-gold font-semibold">
                      {t.company}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  </motion.section>
);

export default TestimonialsSection;
